/* Read the preference before the first paint; storage failure defaults to VI. */
(() => {
  let language = 'vi';
  try { if (localStorage.getItem('ghmeLanguage') === 'en') language = 'en'; } catch { /* Private/storage-blocked browsing. */ }
  document.documentElement.lang = language;
  if (language === 'en') {
    document.documentElement.dataset.i18nLoading = '';
    // Recover the readable Vietnamese fallback even if a localization asset fails.
    window.ghmeLanguageRecovery = setTimeout(() => document.documentElement.removeAttribute('data-i18n-loading'), 3000);
  }
})();
