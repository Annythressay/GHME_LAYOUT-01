'use strict';

// Progressive enhancement: canonical rows remain static grids without JS.
(() => {
  const section = document.querySelector('#partners');
  if (!section || section.classList.contains('is-ready')) return;
  const marquee = section.querySelector('.partners__marquee');
  const rows = Array.from(section.querySelectorAll('.partners__row'), row => ({
    track: row.querySelector('.partners__track'),
    list: row.querySelector('.partners__list'),
    distance: 0,
  }));
  if (!marquee || !rows.length || rows.some(row => !row.list || !row.track)) return;

  const speed = 22; // CSS transform pixels per second, independently measured per row.
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const createCopy = list => {
    const copy = list.cloneNode(true);
    copy.setAttribute('aria-hidden', 'true');
    copy.setAttribute('inert', '');
    copy.removeAttribute('aria-label');
    copy.removeAttribute('id');
    copy.querySelectorAll('[id]').forEach(element => element.removeAttribute('id'));
    copy.querySelectorAll('img').forEach(image => { image.alt = ''; });
    // Keep future partner links out of the duplicate keyboard sequence as well.
    copy.querySelectorAll('a, button, input, select, textarea, [tabindex], [contenteditable]').forEach(element => {
      element.setAttribute('tabindex', '-1');
    });
    return copy;
  };

  const updateRows = () => {
    rows.forEach(row => {
      const { track, list } = row;
      const copies = Array.from(track.children).filter(child => child !== list);
      if (reducedMotion.matches) {
        copies.forEach(copy => copy.remove());
        row.distance = 0;
        return;
      }

      // Includes the trailing gap, so adjacent copies have the usual card spacing.
      const distance = list.getBoundingClientRect().width;
      if (!distance) return;
      // Cover the viewport plus a complete travel distance, even for short lists.
      const copyCount = Math.max(1, Math.ceil(marquee.clientWidth / distance));
      if (distance === row.distance && copies.length === copyCount) return;

      const animation = track.getAnimations()[0];
      const previousTiming = animation?.effect.getTiming();
      const phase = row.distance && previousTiming?.duration
        ? ((Number(animation.currentTime) - previousTiming.delay) / previousTiming.duration % 1 + 1) % 1
        : null;

      copies.slice(copyCount).forEach(copy => copy.remove());
      for (let count = copies.length; count < copyCount; count += 1) {
        track.append(createCopy(list));
      }
      track.style.setProperty('--partners-distance', `${distance}px`);
      track.style.setProperty('--partners-duration', `${distance / speed}s`);
      row.distance = distance;

      // Preserve cycle progress when responsive card dimensions/duration change.
      // WAAPI is used only on resize, never as a per-frame animation loop.
      if (phase !== null && animation) {
        const timing = animation.effect.getTiming();
        animation.currentTime = timing.delay + (phase + 1) * timing.duration;
      }
    });
  };
  section.classList.add('is-ready');
  updateRows();
  // Observe actual row geometry as well as the viewport; no timers are needed.
  const resizeObserver = new ResizeObserver(updateRows);
  resizeObserver.observe(marquee);
  rows.forEach(row => resizeObserver.observe(row.list));
  reducedMotion.addEventListener('change', updateRows);
})();
