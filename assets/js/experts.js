'use strict';
// Progressive enhancement: every profile and biography also exists in the HTML.
(() => {
  const section = document.querySelector('.experts');
  if (!section) return;
  const tabs = [...section.querySelectorAll('[data-experts-tab]')];
  const panels = tabs.map(tab => section.querySelector('#' + tab.getAttribute('aria-controls')));
  const groups = panels.map(panel => [...panel.querySelectorAll('.experts__card')]);
  const search = section.querySelector('#experts-search');
  const specialty = section.querySelector('#experts-specialty');
  const toggle = section.querySelector('.experts__toggle');
  const toggleLabel = toggle.querySelector('span');
  const toggleIcon = toggle.querySelector('i');
  const empty = section.querySelector('.experts__empty');
  const count = section.querySelector('#experts-count');
  const dialog = section.querySelector('#expert-dialog');
  const content = section.querySelector('#expert-dialog-content');
  let opener = null;
  let previousOverflow = '';
  let scrollLocked = false;
  let backdropPointer = false;
  const expanded = groups.map(() => false);
  let activeGroup = 0;
  let initialCount = 0;
  let resizeFrame = 0;
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase().trim();
  const names = new Map(groups.flat().map(card => [card, normalize(card.dataset.name)]));

  function responsiveCount() {
    // CSS keeps the column count and presentation limit at the same breakpoints.
    const grid = panels[activeGroup].querySelector('.experts__grid');
    return Number.parseInt(getComputedStyle(grid).getPropertyValue('--experts-initial-count'), 10) || 8;
  }

  function renderDirectory() {
    const query = normalize(search.value);
    const matching = groups[activeGroup].filter(card => names.get(card).includes(query) &&
      (activeGroup !== 0 || !specialty.value || card.dataset.specialty === specialty.value));
    initialCount = responsiveCount();
    // Preserve the source order, reserving room for every matching featured card.
    const featured = matching.filter(card => card.matches('.experts__card--featured') || card.querySelector('.experts__advisor-tag'));
    const featuredSet = new Set(featured);
    const regular = matching.filter(card => !featuredSet.has(card));
    const collapsed = [...featured, ...regular.slice(0, Math.max(0, initialCount - featured.length))];
    const visible = new Set(expanded[activeGroup] ? matching : collapsed);
    const focused = document.activeElement;
    const hidesFocus = groups[activeGroup].some(card => !visible.has(card) && card.contains(focused));
    groups[activeGroup].forEach(card => { card.hidden = !visible.has(card); });
    const groupLabel = activeGroup === 0 ? 'giảng viên' : 'thành viên';
    count.textContent = matching.length ? `Đang hiển thị ${visible.size} / ${matching.length} ${groupLabel}` : 'Không có kết quả phù hợp';
    empty.hidden = matching.length > 0;
    specialty.closest('label').hidden = activeGroup !== 0;
    toggle.hidden = matching.length <= collapsed.length;
    toggle.setAttribute('aria-controls', panels[activeGroup].id);
    toggle.setAttribute('aria-expanded', String(expanded[activeGroup]));
    toggleLabel.textContent = expanded[activeGroup] ? 'Thu gọn' : activeGroup === 0 ? 'Xem thêm chuyên gia' : 'Xem thêm thành viên';
    toggleIcon.className = `fa-solid fa-chevron-${expanded[activeGroup] ? 'up' : 'down'}`;
    if (hidesFocus || (toggle.hidden && focused === toggle)) {
      (toggle.hidden ? tabs[activeGroup] : toggle).focus({ preventScroll: true });
    }
  }

  function selectTab(index) {
    activeGroup = index;
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].hidden = i !== index;
    });
    renderDirectory();
  }
  section.querySelector('.experts__tabs').setAttribute('role', 'tablist');
  tabs.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    panels[index].setAttribute('role', 'tabpanel');
    panels[index].setAttribute('aria-labelledby', tab.id);
    panels[index].tabIndex = 0;
    tab.addEventListener('click', () => selectTab(index));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      selectTab(next);
      tabs[next].focus();
    });
  });
  section.classList.add('experts--enhanced');
  section.querySelector('.experts__filters').hidden = false;
  section.querySelector('.experts__footer').hidden = false;
  selectTab(0);

  function applyFilters() {
    expanded.fill(false);
    renderDirectory();
  }
  search.addEventListener('input', applyFilters);
  specialty.addEventListener('change', applyFilters);
  section.querySelector('.experts__reset').addEventListener('click', () => {
    search.value = '';
    specialty.value = '';
    applyFilters();
    search.focus({ preventScroll: true });
  });
  toggle.addEventListener('click', () => {
    const collapsing = expanded[activeGroup];
    const previousTop = toggle.getBoundingClientRect().top;
    expanded[activeGroup] = !collapsing;
    renderDirectory();
    if (collapsing) {
      // Keep the CTA in the same viewport position after removing the extra rows.
      const target = window.scrollY + toggle.getBoundingClientRect().top - previousTop;
      window.scrollTo({ top: Math.max(0, target), behavior: 'instant' });
      toggle.focus({ preventScroll: true });
    }
  });
  window.addEventListener('resize', () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      if (responsiveCount() !== initialCount) renderDirectory();
    });
  });

  section.addEventListener('click', event => {
    const button = event.target.closest('[data-expert-id]');
    if (!button) return;
    const template = section.querySelector('#expert-profile-' + button.dataset.expertId);
    if (!template) return;
    opener = button;
    content.replaceChildren(template.content.cloneNode(true));
    // The dialog portrait is visible immediately even when its card is off screen.
    content.querySelector('img').loading = 'eager';
    if (!scrollLocked) previousOverflow = document.documentElement.style.overflow;
    dialog.showModal();
    document.documentElement.style.overflow = 'hidden';
    scrollLocked = true;
    dialog.scrollTop = 0;
  });
  function restorePage() {
    if (!scrollLocked) return;
    document.documentElement.style.overflow = previousOverflow;
    scrollLocked = false;
    opener?.focus({ preventScroll: true });
  }
  function closeProfile() {
    dialog.close();
    restorePage();
  }
  section.querySelector('.experts__close').addEventListener('click', closeProfile);
  dialog.addEventListener('cancel', event => {
    event.preventDefault();
    closeProfile();
  });
  // Native dialog handles Escape and background inertness. Keep Tab inside the
  // profile even when its close button is the only focusable element.
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const focusable = [...dialog.querySelectorAll('button, a[href], input, select, textarea, [tabindex="0"]')]
      .filter(element => !element.disabled && element.getClientRects().length);
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  dialog.addEventListener('close', () => {
    // Ignore a queued close event if another profile has already been opened.
    if (!dialog.open) restorePage();
  });
  function outside(event) {
    const rect = dialog.getBoundingClientRect();
    return event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom);
  }
  dialog.addEventListener('pointerdown', event => { backdropPointer = outside(event); });
  dialog.addEventListener('click', event => {
    if (backdropPointer && outside(event)) closeProfile();
    backdropPointer = false;
  });
})();
