import { useEffect, useReducer, useRef } from 'react';
import { HeartPulse } from 'lucide-react';
import { questions } from './questions';
import { createGame, gameReducer } from './game';
import Header, { Footer } from './components/Header';
import Situation from './components/Situation';
import Question from './components/Question';
import Results from './components/Results';

export default function App() {
  const [game, dispatch] = useReducer(gameReducer, undefined, createGame);
  const headingRef = useRef(null);
  const mounted = useRef(false);
  const send = (type, extra = {}) => dispatch({ type, now: Date.now(), ...extra });

  useEffect(() => {
    if (game.finished) return;
    const tick = () => dispatch({ type: 'tick', now: Date.now() });
    const interval = window.setInterval(tick, 250);
    document.addEventListener('visibilitychange', tick);
    return () => { window.clearInterval(interval); document.removeEventListener('visibilitychange', tick); };
  }, [game.finished, game.deadline]);

  useEffect(() => {
    if (mounted.current) headingRef.current?.focus({ preventScroll: true });
    mounted.current = true;
  }, [game.index, game.finished]);

  const q = questions[game.index];
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <a href="#game-main" className="skip-link">Đến nội dung bài ôn tập</a>
      <Header index={game.index} total={questions.length} remaining={game.remaining} finished={game.finished} />
      <main id="game-main" className="relative mx-auto flex w-full max-w-350 flex-1 flex-col justify-center px-8 pb-3 pt-7 max-sm:px-4 md:pt-8">
        {!game.finished ? <>
          <div className="mx-auto mb-6 flex w-full max-w-300 items-end justify-between gap-5 max-sm:items-start">
            <div><p className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[2px] text-orange"><span className="h-px w-6 bg-orange" />GHME Learning Challenge</p><h1 className="text-[30px] font-bold leading-tight tracking-[-1px] text-navy max-sm:text-2xl">4 phút <span className="font-normal">thời gian vàng</span><span className="text-orange">.</span></h1></div>
            <p className="max-w-60 text-right text-xs leading-6 text-muted max-md:hidden">10 tình huống thực tế.<br />Khởi đầu cho sự sẵn sàng.</p>
          </div>
          <div className="mx-auto grid w-full max-w-300 grid-cols-[.8fr_1.2fr] gap-7 rounded-3xl border border-line bg-white p-5 shadow-[0_12px_50px_#10365e06] max-md:grid-cols-1 lg:gap-8 lg:p-7">
            <Situation question={q} index={game.index} hint={game.hint} />
            <Question question={q} index={game.index} total={questions.length} selected={game.selected} confirmed={game.confirmed} hint={game.hint} onSelect={value => send('select', { value })} onHint={() => send('hint')} onConfirm={() => send('confirm')} onNext={() => send('next', { total: questions.length })} headingRef={headingRef} />
          </div>
          <p className="mx-auto mt-4 flex items-center gap-2 text-[11px] text-muted"><HeartPulse size={14} aria-hidden="true" />Bình tĩnh suy nghĩ. Mỗi lựa chọn là một lần học thêm.</p>
        </> : <Results questions={questions} responses={game.responses} remaining={game.remaining} timedOut={game.timedOut} onRestart={() => send('restart')} headingRef={headingRef} />}
      </main>
      <Footer />
    </div>
  );
}
