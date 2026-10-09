'use strict';
// Shared markup becomes sidebar detail panels on desktop and inline accordions on mobile.
(() => {
  const header = document.querySelector('.premium-header');
  if (!header) return;
  const navigation = header.querySelector('#navigation');
  const menu = header.querySelector('.menu-toggle');
  const backdrop = header.querySelector('.header-backdrop');
  const search = header.querySelector('#search-form');
  const actions = header.querySelector('.nav-actions');
  const compact = window.matchMedia('(max-width: 1099.98px)');
  const hover = window.matchMedia('(hover: hover) and (pointer: fine)');
  const dropdowns = [...header.querySelectorAll('.nav-dropdown')];
  let leaveTimer, drawerOpen = false, scrollStyle, backgroundState;
  const toggleFor = dropdown => dropdown.querySelector('.nav-dropdown-toggle');
  const panelFor = dropdown => dropdown.querySelector('.header-mega');
  function updateBackdrop() {
    backdrop.hidden = !drawerOpen && !dropdowns.some(d => !panelFor(d).hidden);
    header.style.setProperty('--header-bottom', Math.max(0, header.getBoundingClientRect().bottom) + 'px');
  }
  function setDropdown(dropdown, open) {
    toggleFor(dropdown).setAttribute('aria-expanded', String(open));
    panelFor(dropdown).hidden = !open;
    if (!open) dropdown.dataset.pinned = 'false';
    updateBackdrop();
  }
  function closeDropdowns(except) {
    clearTimeout(leaveTimer);
    dropdowns.forEach(d => { if (d !== except) setDropdown(d, false); });
  }
  function openDropdown(dropdown) {
    clearTimeout(leaveTimer);
    closeDropdowns(dropdown);
    setDropdown(dropdown, true);
  }
  function selectCategory(button, allowCollapse = false) {
    const panel = button.closest('.header-mega');
    const wasOpen = button.getAttribute('aria-expanded') === 'true';
    panel.querySelectorAll('.header-category').forEach(category => {
      const active = category === button && !(compact.matches && allowCollapse && wasOpen);
      category.setAttribute('aria-expanded', String(active));
      document.getElementById(category.getAttribute('aria-controls')).hidden = !active;
    });
  }
  function setDrawer(open, restoreFocus = false) {
    if (open === drawerOpen) return;
    drawerOpen = open;
    menu.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('open', open);
    if (open) {
      scrollStyle = { overflow: document.body.style.overflow, paddingRight: document.body.style.paddingRight };
      const gap = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (gap) document.body.style.paddingRight = gap + 'px';
      backgroundState = [...document.body.children, ...header.querySelectorAll('.utility, .nav-wrap > :not(.header-navigation)')].filter(el => el !== header && !['SCRIPT', 'STYLE'].includes(el.tagName)).map(el => [el, el.inert]);
      backgroundState.forEach(([el]) => { el.inert = true; });
      header.querySelector('.header-drawer-close').focus();
    } else {
      document.body.style.overflow = scrollStyle.overflow;
      document.body.style.paddingRight = scrollStyle.paddingRight;
      backgroundState.forEach(([el, inert]) => { el.inert = inert; });
      closeDropdowns();
      if (restoreFocus) menu.focus();
    }
    updateBackdrop();
  }
  dropdowns.forEach(dropdown => {
    const toggle = toggleFor(dropdown);
    toggle.addEventListener('click', event => {
      // A first mouse click after hover keeps the panel open; a second click closes it.
      const shouldClose = toggle.getAttribute('aria-expanded') === 'true' && (compact.matches || dropdown.dataset.pinned === 'true' || event.detail === 0);
      if (shouldClose) setDropdown(dropdown, false);
      else { openDropdown(dropdown); dropdown.dataset.pinned = 'true'; }
    });
    dropdown.addEventListener('pointerenter', () => {
      if (compact.matches || !hover.matches) return;
      clearTimeout(leaveTimer);
      openDropdown(dropdown);
    });
    dropdown.addEventListener('pointerleave', () => {
      if (compact.matches) return;
      leaveTimer = setTimeout(() => {
        if (!dropdown.contains(document.activeElement)) setDropdown(dropdown, false);
      }, 180);
    });
    toggle.addEventListener('keydown', event => {
      if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return;
      event.preventDefault();
      openDropdown(dropdown);
      const categories = [...dropdown.querySelectorAll('.header-category')];
      categories[event.key === 'ArrowDown' ? 0 : categories.length - 1].focus();
    });
    dropdown.querySelector('.header-mega-close').addEventListener('click', () => {
      setDropdown(dropdown, false); toggle.focus();
    });
    const categories = [...dropdown.querySelectorAll('.header-category')];
    categories.forEach((button, index) => {
      button.addEventListener('click', () => selectCategory(button, true));
      button.addEventListener('pointerenter', () => {
        if (!compact.matches && hover.matches) selectCategory(button);
      });
      button.addEventListener('keydown', event => {
        if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
          event.preventDefault();
          const next = event.key === 'Home' ? 0 : event.key === 'End' ? categories.length - 1 : (index + (event.key === 'ArrowDown' ? 1 : -1) + categories.length) % categories.length;
          categories[next].focus();
          selectCategory(categories[next]);
        } else if (event.key === 'ArrowRight') {
          event.preventDefault(); selectCategory(button);
          document.getElementById(button.getAttribute('aria-controls')).querySelector('a').focus();
        }
      });
    });
    dropdown.addEventListener('focusout', event => {
      if (!compact.matches && !dropdown.contains(event.relatedTarget)) setDropdown(dropdown, false);
    });
    dropdown.querySelectorAll('.header-group').forEach(group => group.addEventListener('keydown', event => {
      if (event.key !== 'ArrowLeft') return;
      event.preventDefault(); categories.find(c => c.getAttribute('aria-controls') === group.id).focus();
    }));
  });
  menu.addEventListener('click', () => setDrawer(true));
  header.querySelector('.header-drawer-close').addEventListener('click', () => setDrawer(false, true));
  backdrop.addEventListener('click', () => { if (drawerOpen) setDrawer(false, true); else closeDropdowns(); });
  // Select existing showcase controls before following a link to a hidden product panel.
  header.querySelectorAll('[data-header-product]').forEach(link => link.addEventListener('click', () => {
    const id = link.dataset.headerProduct;
    const kit = ['personal', 'office', 'travel'].includes(id);
    document.querySelector('[data-product-category="' + (kit ? 'kits' : id) + '"]')?.click();
    if (kit) document.querySelector('[data-product-kit="' + id + '"]')?.click();
  }));
  header.addEventListener('click', event => {
    if (!event.target.closest('a, [data-info]')) return;
    if (drawerOpen) setDrawer(false, true);
    closeDropdowns();
  }, true);
  document.addEventListener('click', event => { if (!header.contains(event.target)) closeDropdowns(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      const active = dropdowns.find(d => !panelFor(d).hidden);
      if (active) { setDropdown(active, false); toggleFor(active).focus(); }
      else if (drawerOpen) setDrawer(false, true);
    }
    if (event.key === 'Tab' && drawerOpen) {
      const focusable = [...navigation.querySelectorAll('a, button, input')].filter(el => el.getClientRects().length && !el.disabled);
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  function adaptLayout() {
    setDrawer(false);
    closeDropdowns();
    // Keep the same search input and submit handler visible outside the compact drawer.
    if (compact.matches) header.querySelector('.nav-wrap').append(search);
    else actions.before(search);
    dropdowns.forEach(dropdown => {
      dropdown.querySelectorAll('.header-category').forEach((category, index) => {
        const group = document.getElementById(category.getAttribute('aria-controls'));
        if (compact.matches) category.after(group);
        else dropdown.querySelector('.header-mega-content').append(group);
        category.setAttribute('aria-expanded', String(!compact.matches && index === 0));
        group.hidden = compact.matches || index !== 0;
      });
    });
    updateBackdrop();
  }
  compact.addEventListener('change', adaptLayout);
  window.addEventListener('scroll', () => {
    if (compact.matches) return;
    if (header.getBoundingClientRect().bottom <= 0) backdrop.hidden = true;
    else updateBackdrop();
  }, { passive: true });
  window.addEventListener('resize', updateBackdrop);
  adaptLayout();
})();
