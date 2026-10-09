'use strict';

document.documentElement.classList.add('about-js');

const aboutMenu = document.querySelector('.menu-toggle');
const aboutNavigation = document.querySelector('#navigation');
const aboutCompact = window.matchMedia('(max-width: 991px)');

function setAboutMenu(open) {
  aboutMenu.setAttribute('aria-expanded', String(open));
  aboutMenu.setAttribute('aria-label', window.GHMEI18n.translate(open ? 'Đóng menu' : 'Mở menu'));
  aboutNavigation.classList.toggle('open', open);
}

aboutMenu.addEventListener('click', () => setAboutMenu(aboutMenu.getAttribute('aria-expanded') !== 'true'));
aboutNavigation.addEventListener('click', event => { if (event.target.closest('a')) setAboutMenu(false); });
document.addEventListener('click', event => {
  if (!aboutNavigation.contains(event.target) && !aboutMenu.contains(event.target)) setAboutMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && aboutMenu.getAttribute('aria-expanded') === 'true') {
    setAboutMenu(false);
    aboutMenu.focus();
  }
});
aboutCompact.addEventListener('change', () => setAboutMenu(false));

window.addEventListener('ghme:languagechange', () => setAboutMenu(aboutMenu.getAttribute('aria-expanded') === 'true'));
