export const DURATION = 240;
export function createGame() {
  return { screen: 'closed', index: 0, selected: null, confirmed: false, hint: false, usedHint: false, responses: [], remaining: DURATION, deadline: null, finished: false, timedOut: false, exit: false };
}
export function gameReducer(state, action) {
  if (action.type === 'autoOpen') return state.screen === 'closed' ? { ...createGame(), screen: 'entry' } : state;
  if (action.type === 'open') return { ...createGame(), screen: 'entry' };
  if (action.type === 'close') return createGame();
  if (action.type === 'intro') return { ...createGame(), screen: 'intro' };
  if (action.type === 'start') return { ...createGame(), screen: 'quiz', deadline: action.now + DURATION * 1000 };
  if (action.type === 'exit') return { ...state, exit: true };
  if (action.type === 'continue') return { ...state, exit: false };
  if (state.screen !== 'quiz') return state;
  const remaining = Math.max(0, Math.ceil((state.deadline - action.now) / 1000));
  if (!remaining) return { ...state, remaining: 0, screen: 'result', finished: true, timedOut: true, exit: false };
  switch (action.type) {
    case 'tick': return remaining === state.remaining ? state : { ...state, remaining };
    case 'select': return state.confirmed || state.exit ? state : { ...state, selected: action.value };
    case 'hint': return { ...state, hint: !state.hint, usedHint: true };
    case 'confirm':
      if (state.selected === null || state.confirmed || state.exit) return state;
      return { ...state, confirmed: true, remaining, responses: [...state.responses, { selected: state.selected, usedHint: state.usedHint }] };
    case 'next':
      if (!state.confirmed || state.exit) return state;
      if (state.index + 1 === action.total) return { ...state, remaining, finished: true, screen: 'result' };
      return { ...state, remaining, index: state.index + 1, selected: null, confirmed: false, hint: false, usedHint: false };
    default: return state;
  }
}
export function formatTime(seconds) {
  return String(Math.floor(seconds / 60)).padStart(2, '0') + ':' + String(seconds % 60).padStart(2, '0');
}
