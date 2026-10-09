import { createContext, useContext, useEffect, useState } from 'react';
import { messages } from './messages';

const Localization = createContext(null);
function readLanguage() {
  if (window.GHMEI18n) return window.GHMEI18n.language;
  try { return localStorage.getItem('ghmeLanguage') === 'en' ? 'en' : 'vi'; } catch { return 'vi'; }
}
export function LocalizationProvider({ children }) {
  const [language, setLanguage] = useState(readLanguage);
  useEffect(() => {
    const change = event => setLanguage(event.detail.language === 'en' ? 'en' : 'vi');
    const storage = event => { if (event.key === 'ghmeLanguage') setLanguage(readLanguage()); };
    window.addEventListener('ghme:languagechange', change);
    window.addEventListener('storage', storage);
    if (!window.GHMEI18n) {
      document.documentElement.lang = language;
      document.title = language === 'en' ? '4 Golden Minutes — GHME' : '4 Phút Thời Gian Vàng — GHME';
      document.querySelector('meta[name="description"]')?.setAttribute('content', language === 'en' ? '10 situations, 4 minutes. Review first aid knowledge with GHME through an interactive challenge.' : '10 tình huống, 4 phút. Cùng GHME ôn lại kiến thức sơ cứu qua trải nghiệm tương tác.');
    }
    return () => { window.removeEventListener('ghme:languagechange', change); window.removeEventListener('storage', storage); };
  }, [language]);
  function t(key, values = {}) {
    const message = messages[key]?.[language] ?? messages[key]?.vi ?? '';
    return message.replace(/\{(\w+)\}/g, (match, name) => values[name] ?? match);
  }
  return <Localization.Provider value={{ language, t }}>{children}</Localization.Provider>;
}
export const useLocalization = () => useContext(Localization);
