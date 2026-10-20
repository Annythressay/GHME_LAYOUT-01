'use strict';

(() => {
  const section = document.querySelector('#feedback');
  if (!section) return;
  const cards = [...section.querySelectorAll('[data-feedback-card]')];
  const dots = [...section.querySelectorAll('[data-feedback-dot]')];
  const previous = section.querySelector('[data-feedback-prev]');
  const next = section.querySelector('[data-feedback-next]');
  const status = section.querySelector('[data-feedback-status]');
  if (cards.length !== 3 || !previous || !next || !dots.length) return;
  const compact = window.matchMedia('(max-width: 991.98px)');
  let active = 1;

  const render = (announce = false) => {
    cards.forEach((card, index) => {
      card.classList.toggle('is-featured', index === active);
      card.style.order = (index - active + 1 + cards.length) % cards.length;
      card.hidden = compact.matches && index !== active;
    });
    dots.forEach(dot => {
      if (Number(dot.dataset.feedbackDot) === active) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
    if (announce) {
      const name = cards[active].querySelector('.inner-name').textContent;
      status.textContent = window.GHMEI18n?.t('feedback.status', { name }) || name;
    }
  };
  const move = step => {
    active = (active + step + cards.length) % cards.length;
    render(true);
  };
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  dots.forEach(dot => dot.addEventListener('click', () => {
    active = Number(dot.dataset.feedbackDot);
    render(true);
  }));
  section.addEventListener('keydown', event => {
    if (!event.target.closest('[data-feedback-prev], [data-feedback-next], [data-feedback-dot]')) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      move(event.key === 'ArrowLeft' ? -1 : 1);
    }
  });
  compact.addEventListener('change', () => render());
  window.addEventListener('ghme:languagechange', () => {
    if (status.textContent) render(true);
  });
  section.classList.add('is-ready');
  previous.hidden = next.hidden = section.querySelector('.inner-pagination').hidden = false;
  render();
})();
