'use strict';
(() => {
  const catalogs = window.GHME_TRANSLATIONS || {};
  const root = document.documentElement;
  let language = root.lang === 'en' ? 'en' : 'vi';
  const normalize = value => String(value).replace(/\s+/g, ' ').trim();
  const sourceKeys = new Map(Object.entries(catalogs.vi || {}).map(([key, value]) => [normalize(value), key]));
  const missing = new Set();
  const textSpacing = new WeakMap();
  function t(key, values = {}) {
    const text = catalogs[language]?.[key] ?? catalogs.vi?.[key];
    if (text === undefined) {
      missing.add(key);
      return values.fallback || '';
    }
    return text.replace(/\{(\w+)\}/g, (match, name) => values[name] ?? match);
  }
  function translate(source, values = {}) {
    const key = sourceKeys.get(normalize(source));
    return key ? t(key, values) : source;
  }
  function apply(scope = document) {
    const elements = [...scope.querySelectorAll('[data-i18n], [data-i18n-attrs], template')];
    if (scope.nodeType === 1 && scope.matches('[data-i18n], [data-i18n-attrs]')) elements.unshift(scope);
    elements.forEach(element => {
      if (element.tagName === 'TEMPLATE') { apply(element.content); return; }
      const nodes = [...element.childNodes].filter(node => node.nodeType === Node.TEXT_NODE);
      (element.dataset.i18n || '').split(';').filter(Boolean).forEach(slot => {
        const [index, key] = slot.split(':');
        const node = nodes[Number(index)];
        if (!node) return;
        const next = t(key);
        // Keep spaces separating inline links, icons and emphasized words.
        const value = node.textContent;
        if (!textSpacing.has(node)) textSpacing.set(node, [value.match(/^\s*/)?.[0] || '', value.match(/\s*$/)?.[0] || '']);
        const [leading, trailing] = textSpacing.get(node);
        node.textContent = (/^[.,;:!?]/.test(next) ? '' : leading) + next + trailing;
      });
      (element.dataset.i18nAttrs || '').split(';').filter(Boolean).forEach(slot => {
        const [attribute, key] = slot.split(':');
        element.setAttribute(attribute, t(key));
      });
    });
  }
  function updateValidation() {
    document.querySelectorAll('#consultation-form input, #consultation-form select, #consultation-form textarea').forEach(field => {
      field.setCustomValidity('');
      const validity = field.validity;
      if (validity.valueMissing) field.setCustomValidity(t(field.type === 'checkbox' ? 'form.consentRequired' : 'form.required'));
      else if (validity.typeMismatch) field.setCustomValidity(t('form.invalidEmail'));
      else if (validity.patternMismatch) field.setCustomValidity(t('form.invalidPhone'));
    });
  }
  function setLanguage(next, persist = true) {
    if (!catalogs[next]) return;
    language = next;
    root.lang = next;
    if (persist) { try { localStorage.setItem('ghmeLanguage', next); } catch { /* Keep preference in page memory. */ } }
    apply();
    document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === next)));
    updateValidation();
    window.dispatchEvent(new CustomEvent('ghme:languagechange', { detail: { language: next } }));
    clearTimeout(window.ghmeLanguageRecovery);
    root.removeAttribute('data-i18n-loading');
  }
  window.GHMEI18n = { t, translate, apply, setLanguage, updateValidation, get language() { return language; }, get missingKeys() { return [...missing]; } };
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  document.querySelector('#consultation-form')?.addEventListener('input', updateValidation);
  document.querySelector('#consultation-form')?.addEventListener('change', updateValidation);
  window.addEventListener('storage', event => {
    if (event.key === 'ghmeLanguage') setLanguage(event.newValue === 'en' ? 'en' : 'vi', false);
  });
  setLanguage(language, false);
})();
