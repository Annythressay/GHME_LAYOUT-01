import { useEffect, useRef } from 'react';

// Native modal dialogs supply top-layer rendering, inert background and focus containment.
export default function GameDialog({ children, compact, confirmation, onClose, fallbackRef }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    const root = dialog.getRootNode();
    const previous = root.activeElement || document.activeElement;
    const body = document.body;
    const overflow = body.style.overflow;
    const padding = body.style.paddingRight;
    if (!confirmation) {
      const gap = window.innerWidth - document.documentElement.clientWidth;
      body.style.paddingRight = (parseFloat(getComputedStyle(body).paddingRight) + gap) + 'px';
      body.style.overflow = 'hidden';
    }
    dialog.showModal();
    return () => {
      dialog.close();
      if (!confirmation) { body.style.overflow = overflow; body.style.paddingRight = padding; }
      const target = previous?.isConnected && previous !== body ? previous : fallbackRef?.current;
      target?.focus({ preventScroll: true });
    };
  }, [confirmation, fallbackRef]);
  const trapFocus = event => {
    if (event.key !== 'Tab' || event.target.closest('dialog') !== ref.current) return;
    const items = [...ref.current.querySelectorAll('button:not(:disabled), a[href], input:not(:disabled), summary, [tabindex="0"]')]
      .filter(el => el.closest('dialog') === ref.current && el.getClientRects().length);
    const active = ref.current.getRootNode().activeElement;
    const first = items[0], last = items[items.length - 1];
    if (event.shiftKey && (active === first || !items.includes(active))) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && active === last) { event.preventDefault(); first?.focus(); }
  };
  return <dialog onKeyDown={trapFocus} ref={ref} role="dialog" aria-modal="true" aria-labelledby={confirmation ? 'exit-title' : 'game-title'} className={'game-dialog ' + (compact ? 'entry-dialog ' : '') + (confirmation ? 'exit-dialog' : '')} onCancel={event => { event.preventDefault(); event.stopPropagation(); onClose(); }}>{children}</dialog>;
}
