import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import css from './styles.css?inline';

const host = document.getElementById('ghme-first-aid') || document.getElementById('root');
if (host && !host.shadowRoot) {
  const shadow = host.attachShadow({ mode: 'open' });
  const style = document.createElement('style');
  style.textContent = css;
  const mount = document.createElement('div');
  shadow.append(style, mount);
  const imageBase = import.meta.env.DEV ? new URL('../images/', window.location.href).href : new URL(/* @vite-ignore */ './images/', import.meta.url).href;
  createRoot(mount).render(<React.StrictMode><App imageBase={imageBase} /></React.StrictMode>);
}
