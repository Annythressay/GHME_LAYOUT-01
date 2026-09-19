'use strict';

const courseMenu = document.querySelector('.course-menu');
const courseNavigation = document.querySelector('#course-navigation');
const compactNavigation = window.matchMedia('(max-width: 767px)');

function setMenu(open) {
  courseMenu.setAttribute('aria-expanded', String(open));
  courseMenu.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
  courseNavigation.hidden = compactNavigation.matches && !open;
}
courseMenu.addEventListener('click', () => setMenu(courseMenu.getAttribute('aria-expanded') !== 'true'));
compactNavigation.addEventListener('change', () => setMenu(false));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && courseMenu.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    courseMenu.focus();
  }
});
courseNavigation.addEventListener('click', event => {
  if (event.target.closest('a')) setMenu(false);
});
setMenu(false);

// The navigation remains usable without JS; JS adds a current-section indicator.
const sectionLinks = [...document.querySelectorAll('.course-section-nav a')];
const linkedSections = sectionLinks.map(link => document.querySelector(link.hash));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting);
    if (!visible.length) return;
    const id = visible[0].target.id;
    sectionLinks.forEach(link => {
      if (link.hash === '#' + id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-10% 0px -55% 0px', threshold: 0 });
  linkedSections.forEach(section => observer.observe(section));
}
