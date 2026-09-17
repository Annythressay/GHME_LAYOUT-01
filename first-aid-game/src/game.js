export const DURATION = 240;

export function createGame(now = Date.now()) {
  return { index: 0, selected: null, confirmed: false, hint: false, responses: [], remaining: DURATION, deadline: now + DURATION * 1000, finished: false, timedOut: false };
}

export function gameReducer(state, action) {
  if (action.type === 'restart') return createGame(action.now);
  if (state.finished) return state;
  const remaining = Math.max(0, Math.ceil((state.deadline - action.now) / 1000));
  if (remaining === 0) return { ...state, remaining: 0, finished: true, timedOut: true };
  switch (action.type) {
    case 'tick': return remaining === state.remaining ? state : { ...state, remaining };
    case 'select': return state.confirmed ? state : { ...state, selected: action.value };
    case 'hint': return { ...state, hint: !state.hint };
    case 'confirm':
      if (state.selected === null || state.confirmed) return state;
      return { ...state, confirmed: true, responses: [...state.responses, { selected: state.selected, usedHint: state.hint }] };
    case 'next':
      if (!state.confirmed) return state;
      if (state.index + 1 === action.total) return { ...state, remaining, finished: true };
      return { ...state, index: state.index + 1, selected: null, confirmed: false, hint: false };
    default: return state;
  }
}

export function formatTime(seconds) {
  return `${Math.floor(seconds / 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
}
