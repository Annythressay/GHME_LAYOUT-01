'use strict';
// Programs: native scrolling, one card per navigation, no duplicated content.
const programs = document.querySelector('#programs');
if (programs) {
  const viewport = programs.querySelector('.programs-viewport');
  const cards = [...programs.querySelectorAll('.program-card')];
  const navigation = programs.querySelector('.programs-navigation');
  const previous = navigation.querySelector('[data-program-step="-1"]');
  const next = navigation.querySelector('[data-program-step="1"]');
  const status = programs.querySelector('#programs-status');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0, step = 0, maximum = 0, pages = 0, pointer = null, dragged = false;
  function updateButtons() {
    previous.disabled = index === 0;
    next.disabled = index >= pages;
  }
  function move(direction) {
    index = Math.max(0, Math.min(pages, index + direction));
    viewport.scrollTo({left: Math.min(index * step, maximum), behavior: reduced.matches ? 'instant' : 'smooth'});
    updateButtons();
    status.textContent = 'Chương trình: ' + cards[index].querySelector('h3').textContent;
  }
  function measure() {
    step = cards[0].getBoundingClientRect().width + 12;
    maximum = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    pages = Math.ceil(Math.max(0, maximum - 1) / step);
    index = Math.min(index, pages);
    viewport.scrollTo({left: Math.min(index * step, maximum), behavior: 'instant'});
    updateButtons();
  }
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  navigation.hidden = false;
  viewport.addEventListener('dragstart', event => event.preventDefault());
  viewport.addEventListener('pointerdown', event => {
    if (event.button > 0 || event.isPrimary === false) return;
    pointer = {x: event.clientX, y: event.clientY, id: event.pointerId};
    dragged = false;
  });
  viewport.addEventListener('pointermove', event => {
    if (!pointer || pointer.id !== event.pointerId) return;
    const dx = event.clientX - pointer.x, dy = event.clientY - pointer.y;
    if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy) * 1.3) {
      viewport.setPointerCapture(event.pointerId);
      dragged = true;
    }
  });
  viewport.addEventListener('pointerup', event => {
    if (!pointer || pointer.id !== event.pointerId) return;
    const dx = event.clientX - pointer.x, dy = event.clientY - pointer.y;
    pointer = null;
    if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.3) move(dx < 0 ? 1 : -1);
    setTimeout(() => { dragged = false; }, 0);
  });
  viewport.addEventListener('pointercancel', () => { pointer = null; dragged = false; });
  viewport.addEventListener('click', event => {
    if (dragged) { event.preventDefault(); event.stopImmediatePropagation(); }
  }, true);
  // Anchor links and search results must reveal the requested card after reordering.
  function revealHash() {
    const target = cards.findIndex(card => '#' + card.id === window.location.hash);
    if (target >= 0) { index = Math.min(target, pages); move(0); }
  }
  window.addEventListener('hashchange', revealHash);
  new ResizeObserver(measure).observe(viewport);
  measure();
  revealHash();
}
// One circular track serves arrows, previews, pagination and touch.
const schedule = document.querySelector('#schedule');
if (schedule) {
  const viewport = schedule.querySelector('.schedule-carousel');
  const track = schedule.querySelector('#schedule-results');
  const order = ['danang', 'hanoi', 'hcm', 'cantho'];
  const cards = order.map(city => track.querySelector('[data-schedule-city="' + city + '"]'));
  const pagination = schedule.querySelector('.schedule-pagination');
  const status = schedule.querySelector('#schedule-status');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let active = 1, count = 2, width = 0, gap = 24, offset = 0, moving = false;
  let timer;
  let pending = [];
  const slides = [];
  // Copies at each end allow seamless wrap-around; card data remains in the originals.
  for (let copy = 0; copy < 3; copy += 1) {
    cards.forEach((card, index) => {
      const slide = copy === 1 ? card : card.cloneNode(true);
      if (copy !== 1) {
        slide.dataset.scheduleClone = 'true';
        slide.querySelectorAll('[id]').forEach(node => node.removeAttribute('id'));
        slide.removeAttribute('id');
      }
      slide.hidden = false;
      slide.dataset.slideIndex = String(index);
      track.append(slide);
      slides.push(slide);
    });
  }
  const wrap = index => (index % cards.length + cards.length) % cards.length;
  const previewButtons = [-1, 1].map(step => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'schedule-preview-hit ' + (step < 0 ? 'is-left' : 'is-right');
    button.setAttribute('aria-label', step < 0 ? 'Xem các lịch trước' : 'Xem các lịch tiếp theo');
    button.setAttribute('aria-controls', 'schedule-results');
    button.addEventListener('click', () => navigate(step));
    viewport.append(button);
    return button;
  });
  function paint(announce = false) {
    const start = cards.length + active;
    track.style.transform = 'translate3d(' + (offset - start * (width + gap)) + 'px, 0, 0)';
    slides.forEach((slide, index) => {
      const main = index >= start && index < start + count;
      slide.classList.toggle('is-active', main);
      slide.classList.toggle('is-prev', index === start - 1);
      slide.classList.toggle('is-next', index === start + count);
      slide.classList.toggle('is-offscreen', !main && index !== start - 1 && index !== start + count);
      slide.inert = !main;
      slide.setAttribute('aria-hidden', String(!main));
    });
    const page = wrap(active);
    pagination.querySelectorAll('[data-schedule-page]').forEach(dot => {
      if (Number(dot.dataset.schedulePage) === page) dot.setAttribute('aria-current', 'page');
      else dot.removeAttribute('aria-current');
    });
    if (announce) status.textContent = 'Đang hiển thị: ' + Array.from({length: count}, (_, i) =>
      cards[wrap(active + i)].querySelector('.city').textContent).join(' và ') + '.';
  }
  function finish() {
    clearTimeout(timer);
    track.classList.add('is-resetting');
    active = wrap(active);
    paint();
    // Commit the equivalent loop position before enabling transitions again.
    void track.offsetWidth;
    track.classList.remove('is-resetting');
    moving = false;
    if (pending.length) pending.shift()();
  }
  function moveTo(index) {
    if (moving) { pending.push(() => moveTo(index)); return; }
    if (index === active) return;
    moving = true;
    active = index;
    paint(true);
    timer = setTimeout(finish, reducedMotion.matches ? 0 : 450);
  }
  function navigate(step) {
    if (moving) { pending.push(() => navigate(step)); return; }
    moveTo(active + step);
  }
  track.addEventListener('transitionend', event => {
    if (event.target === track && event.propertyName === 'transform') finish();
  });
  function layout() {
    pending = [];
    finish();
    const viewportWidth = schedule.clientWidth;
    count = viewportWidth >= 1200 ? 2 : 1;
    gap = viewportWidth <= 767 ? 12 : 24;
    width = count === 2 ? Math.min(548, (viewportWidth - 4 * gap) / 3)
      : viewportWidth <= 767 ? viewportWidth - 92 : Math.min(600, viewportWidth * .7);
    offset = (viewportWidth - (count * width + (count - 1) * gap)) / 2;
    viewport.style.setProperty('--carousel-width', viewportWidth + 'px');
    viewport.style.setProperty('--card-width', width + 'px');
    viewport.style.setProperty('--track-gap', gap + 'px');
    viewport.style.setProperty('--active-edge', offset + 'px');
    previewButtons.forEach(button => { button.style.width = Math.max(0, offset - gap / 2) + 'px'; });
    pagination.querySelectorAll('[data-schedule-page]').forEach(dot => dot.remove());
    const next = pagination.querySelector('[data-schedule-step="1"]');
    for (let page = 0; page < cards.length; page += 1) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'schedule-dot';
      dot.dataset.schedulePage = String(page);
      dot.setAttribute('aria-label', 'Bắt đầu từ ' + cards[page].querySelector('.city').textContent);
      dot.setAttribute('aria-controls', 'schedule-results');
      dot.addEventListener('click', () => moveTo(page));
      pagination.insertBefore(dot, next);
    }
    track.classList.add('is-resetting');
    paint();
    void track.offsetWidth;
    track.classList.remove('is-resetting');
  }
  schedule.querySelectorAll('[data-schedule-step]').forEach(button => {
    button.addEventListener('click', () => navigate(Number(button.dataset.scheduleStep)));
    button.hidden = false;
  });
  pagination.hidden = false;
  pagination.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    navigate(event.key === 'ArrowRight' ? 1 : -1);
    pagination.querySelector('[aria-current="page"]').focus();
  });
  let touch = null, suppressClick = false;
  viewport.addEventListener('dragstart', event => event.preventDefault());
  viewport.addEventListener('pointerdown', event => {
    if (event.isPrimary === false || event.button > 0) return;
    touch = {x: event.clientX, y: event.clientY, id: event.pointerId};
    suppressClick = false;
  });
  viewport.addEventListener('pointermove', event => {
    if (!touch || touch.id !== event.pointerId) return;
    const dx = event.clientX - touch.x, dy = event.clientY - touch.y;
    if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy) * 1.3) {
      viewport.setPointerCapture(event.pointerId);
      viewport.classList.add('is-dragging');
    }
  });
  viewport.addEventListener('pointerup', event => {
    if (!touch || touch.id !== event.pointerId) return;
    const dx = event.clientX - touch.x, dy = event.clientY - touch.y;
    touch = null;
    viewport.classList.remove('is-dragging');
    if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.3) {
      suppressClick = true;
      navigate(dx < 0 ? 1 : -1);
      setTimeout(() => { suppressClick = false; }, 0);
    }
  });
  viewport.addEventListener('pointercancel', () => { touch = null; viewport.classList.remove('is-dragging'); });
  viewport.addEventListener('click', event => {
    if (suppressClick) { event.preventDefault(); event.stopImmediatePropagation(); }
  }, true);
  let previousWidth = 0;
  new ResizeObserver(() => {
    if (schedule.clientWidth !== previousWidth) {
      previousWidth = schedule.clientWidth;
      layout();
    }
  }).observe(schedule);
  layout();
}
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigation');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Đóng menu':'Mở menu');nav.classList.toggle('open',open);});
nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Mở menu');}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus();}});
const dialog=document.querySelector('#info-dialog');
const content=document.querySelector('#dialog-content');
function show(title,text){document.querySelector('#dialog-title').textContent=title;content.replaceChildren();const p=document.createElement('p');p.textContent=text;content.append(p);dialog.showModal();}
document.querySelectorAll('.dialog-close,.dialog-done').forEach(b=>b.addEventListener('click',()=>dialog.close()));
const info={login:['Đăng nhập','Chức năng tài khoản chưa được kết nối trong bản frontend prototype. Bạn có thể sử dụng form tư vấn để trải nghiệm giao diện.'],products:['Sản phẩm','Danh mục sản phẩm đang chờ nội dung chính thức từ GHME.'],language:['Ngôn ngữ','Bản prototype hiện có nội dung tiếng Việt. Bản tiếng Anh đang chờ nội dung được duyệt.'],privacy:['Chính sách riêng tư','Bản prototype không gửi hoặc lưu dữ liệu form lên máy chủ. Nội dung chính sách chính thức cần được GHME cung cấp trước khi vận hành.'],terms:['Điều khoản sử dụng','Nội dung điều khoản chính thức đang chờ GHME cung cấp. Đây là bản thử nghiệm giao diện.'],news:['Tin tức & kiến thức','Nội dung tin tức đang chờ GHME cung cấp.'],faq:['Câu hỏi thường gặp','Bạn có thể xem lịch thực hành, chọn chương trình và điền form tư vấn trên trang. Nội dung hỏi đáp chính thức đang chờ GHME cung cấp.']};
document.querySelectorAll('[data-info]').forEach(b=>b.addEventListener('click',()=>show(...info[b.dataset.info])));
document.querySelector('#schedule-detail').addEventListener('click',()=>{show('Lịch thực hành tháng 09/2026','Lịch tham khảo theo thiết kế được cung cấp. Lịch học có thể được điều chỉnh; lớp học được tổ chức khi đủ số lượng học viên đăng ký.');document.querySelectorAll('.schedule-card:not([data-schedule-clone])').forEach(card=>{const h=document.createElement('h3');h.textContent=card.querySelector('.city').textContent;content.append(h);if(card.querySelector('.schedule-pending')){const p=document.createElement('p');p.textContent=card.querySelector('.schedule-pending p').textContent;content.append(p);}card.querySelectorAll('tbody tr').forEach(row=>{const p=document.createElement('p');p.textContent=Array.from(row.cells,c=>c.textContent).join(' · ');content.append(p);});});});
document.querySelectorAll('[data-program]').forEach(a=>a.addEventListener('click',()=>{document.querySelector('[name="need"]').value=a.dataset.program;}));
document.querySelector('#consultation-form').addEventListener('submit',e=>{e.preventDefault();const status=e.currentTarget.querySelector('.form-status');status.hidden=false;status.textContent='Thông tin đã được kiểm tra hợp lệ. Đây là bản thử nghiệm: yêu cầu chưa được gửi, dữ liệu không được lưu trên máy chủ.';status.tabIndex=-1;status.focus();});
document.querySelector('#search-form').addEventListener('submit',e=>{e.preventDefault();const value=document.querySelector('#search').value.trim();const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').toLowerCase();if(!value)return;const matches=Array.from(document.querySelectorAll('.program-card')).filter(c=>normalize(c.textContent).includes(normalize(value)));show('Kết quả tìm kiếm',matches.length?`Tìm thấy ${matches.length} chương trình phù hợp.`:'Chưa có chương trình phù hợp. Hãy thử “cơ bản”, “trẻ nhỏ” hoặc “gia đình”.');matches.forEach(c=>{const p=document.createElement('p');const a=document.createElement('a');a.href='#'+c.id;a.textContent=c.querySelector('h3').textContent;a.addEventListener('click',()=>dialog.close());p.append(a);content.append(p);});});
