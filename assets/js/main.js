'use strict';
const i18n = window.GHMEI18n;
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
    status.textContent = i18n.t('programs.status', { title: cards[index].querySelector('h3').textContent });
  }
  function measure() {
    step = cards[0].getBoundingClientRect().width + 12;
    maximum = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    pages = Math.ceil(Math.max(0, maximum - 1) / step);
    navigation.hidden = pages === 0;
    index = Math.min(index, pages);
    viewport.scrollTo({left: Math.min(index * step, maximum), behavior: 'instant'});
    updateButtons();
  }
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
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
  window.addEventListener('ghme:languagechange', () => move(0));
}
// Product categories and kit variants share one accessible detail panel.
const showcase = document.querySelector('.product-showcase');
if (showcase) {
  const categories = [...showcase.querySelectorAll('[data-product-category]')];
  const kits = [...showcase.querySelectorAll('[data-product-kit]')];
  const panels = [...showcase.querySelectorAll('[data-product-panel]')];
  const kitOptions = showcase.querySelector('#product-kit-options');
  const productDialog = showcase.querySelector('#product-dialog');
  let selectedKit = 'personal';
  let selectedProduct = 'aed';
  const generatedRequests = new Map();
  function selectProduct(id, category) {
    selectedProduct = id;
    panels.forEach(panel => { panel.hidden = panel.dataset.productPanel !== id; });
    categories.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.productCategory === category)));
    kits.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.productKit === selectedKit)));
    kitOptions.hidden = category !== 'kits';
    showcase.querySelector('#product-status').textContent = i18n.t('products.status', { title: showcase.querySelector('#product-title-' + id).textContent });
  }
  categories.forEach(button => button.addEventListener('click', () => {
    const category = button.dataset.productCategory;
    selectProduct(category === 'kits' ? selectedKit : category, category);
  }));
  kits.forEach(button => button.addEventListener('click', () => {
    selectedKit = button.dataset.productKit;
    selectProduct(selectedKit, 'kits');
  }));
  // Native buttons remain reachable with Tab; arrow keys also move within each group.
  [categories, kits].forEach(group => group.forEach((button, index) => button.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? group.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + group.length) % group.length;
    group[next].focus();
    group[next].click();
  })));
  showcase.querySelectorAll('[data-product-detail]').forEach(button => button.addEventListener('click', () => {
    const panel = showcase.querySelector('#product-' + button.dataset.productDetail);
    showcase.querySelector('#product-dialog-title').textContent = panel.querySelector('h3').textContent;
    const body = showcase.querySelector('#product-dialog-content');
    body.replaceChildren(panel.querySelector('.inner-desc').cloneNode(true), panel.querySelector('.inner-specs').cloneNode(true));
    productDialog.showModal();
  }));
  productDialog.querySelector('.product-dialog__close').addEventListener('click', () => productDialog.close());
  productDialog.addEventListener('click', event => {
    const bounds = productDialog.getBoundingClientRect();
    if (event.target === productDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) productDialog.close();
  });
  function prepareConsultation(id) {
    const form = document.querySelector('#consultation-form');
    const title = showcase.querySelector('#product-title-' + id).textContent;
    const need = form.querySelector('[name="need"]');
    if (![...need.options].some(option => option.value === 'Tư vấn sản phẩm')) need.add(new Option(i18n.t('products.consultation'), 'Tư vấn sản phẩm'));
    need.value = 'Tư vấn sản phẩm';
    i18n.updateValidation();
    const message = form.querySelector('[name="message"]');
    const request = i18n.t('products.request', { title });
    if (!message.value.includes(request)) message.value += (message.value.trim() ? '\n' : '') + request;
    generatedRequests.set(id, request);
    i18n.updateValidation();
    if (productDialog.open) productDialog.close();
  }
  showcase.querySelectorAll('[data-product-consult]').forEach(link => link.addEventListener('click', () => prepareConsultation(link.dataset.productConsult)));
  showcase.querySelector('#product-dialog-consult').addEventListener('click', () => prepareConsultation(selectedProduct));
  window.addEventListener('ghme:languagechange', () => {
    selectProduct(selectedProduct, ['personal', 'office', 'travel'].includes(selectedProduct) ? 'kits' : selectedProduct);
    const option = document.querySelector('[name="need"] option[value="Tư vấn sản phẩm"]');
    if (option) option.textContent = i18n.t('products.consultation');
    const message = document.querySelector('[name="message"]');
    generatedRequests.forEach((previous, id) => {
      if (!message.value.includes(previous)) { generatedRequests.delete(id); return; }
      const next = i18n.t('products.request', { title: showcase.querySelector('#product-title-' + id).textContent });
      message.value = message.value.replace(previous, next);
      generatedRequests.set(id, next);
    });
    if (productDialog.open) showcase.querySelector('#product-dialog-title').textContent = showcase.querySelector('#product-title-' + selectedProduct).textContent;
  });
}
// Header navigation is handled in header.js.
const dialog=document.querySelector('#info-dialog');
const content=document.querySelector('#dialog-content');
let activeInfo = null;
function show(title,text){document.querySelector('#dialog-title').textContent=i18n.translate(title);content.replaceChildren();const p=document.createElement('p');p.textContent=i18n.translate(text);content.append(p);if(!dialog.open)dialog.showModal();}
window.addEventListener('ghme:languagechange', () => {
  if (dialog.open && activeInfo) show(...info[activeInfo]);
  else if (dialog.open) document.querySelector('#search-form').dispatchEvent(new Event('submit', {cancelable:true}));
  const status = document.querySelector('#consultation-form .form-status');
  if (!status.hidden) status.textContent = i18n.t('form.success');
});
document.querySelectorAll('.dialog-close,.dialog-done').forEach(b=>b.addEventListener('click',()=>dialog.close()));
const info={login:['Đăng nhập','Chức năng tài khoản chưa được kết nối trong bản frontend prototype. Bạn có thể sử dụng form tư vấn để trải nghiệm giao diện.'],products:['Sản phẩm','Danh mục sản phẩm đang chờ nội dung chính thức từ GHME.'],privacy:['Chính sách riêng tư','Bản prototype không gửi hoặc lưu dữ liệu form lên máy chủ. Nội dung chính sách chính thức cần được GHME cung cấp trước khi vận hành.'],terms:['Điều khoản sử dụng','Nội dung điều khoản chính thức đang chờ GHME cung cấp. Đây là bản thử nghiệm giao diện.'],news:['Tin tức & kiến thức','Nội dung tin tức đang chờ GHME cung cấp.'],faq:['Câu hỏi thường gặp','Bạn có thể xem lịch thực hành, chọn chương trình và điền form tư vấn trên trang. Nội dung hỏi đáp chính thức đang chờ GHME cung cấp.']};
document.querySelectorAll('[data-info]').forEach(b=>b.addEventListener('click',()=>{activeInfo=b.dataset.info;show(...info[activeInfo]);}));
// Course detail links return here with a known card ID, never arbitrary form text.
const requestedProgram = new URLSearchParams(window.location.search).get('program');
const requestedCard = [...document.querySelectorAll('.program-card')].find(card => card.id === requestedProgram);
if (requestedCard) {
  document.querySelector('[name="need"]').value = requestedCard.querySelector('[data-program]').dataset.program;
  i18n.updateValidation();
}
document.querySelectorAll('[data-program][href="#consultation"]').forEach(a=>a.addEventListener('click',()=>{document.querySelector('[name="need"]').value=a.dataset.program;i18n.updateValidation();}));
document.querySelector('#consultation-form').addEventListener('submit',e=>{e.preventDefault();const status=e.currentTarget.querySelector('.form-status');status.hidden=false;status.textContent=i18n.t('form.success');status.tabIndex=-1;status.focus();});
document.querySelector('#search-form').addEventListener('submit',e=>{e.preventDefault();const value=document.querySelector('#search').value.trim();const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').toLowerCase();if(!value)return;const matches=Array.from(document.querySelectorAll('.program-card')).filter(c=>normalize(c.textContent).includes(normalize(value)));activeInfo=null;show(i18n.t('search.title'),matches.length?i18n.t('search.matches',{count:matches.length}):i18n.t('search.empty'));matches.forEach(c=>{const p=document.createElement('p');const a=document.createElement('a');a.href='#'+c.id;a.textContent=c.querySelector('h3').textContent;a.addEventListener('click',()=>dialog.close());p.append(a);content.append(p);});});
