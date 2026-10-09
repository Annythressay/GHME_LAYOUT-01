import { useEffect, useReducer, useRef, useState } from 'react';
import { HeartPulse, X } from 'lucide-react';
import { questions } from './questions';
import { createGame, gameReducer } from './game';
import Header from './components/Header';
import Situation from './components/Situation';
import Question from './components/Question';
import Results from './components/Results';
import GameIntro from './components/GameIntro';
import GameDialog from './components/GameDialog';
import ParticipantForm from './components/ParticipantForm';

const memory = new Set();
function remember(key) { memory.add(key); try { sessionStorage.setItem(key, 'true'); } catch { /* Retain choice in memory when storage is blocked. */ } }

export default function App({ imageBase }) {
  const [game, dispatch] = useReducer(gameReducer, undefined, createGame);
  const headingRef = useRef(null);
  const triggerRef = useRef(null);
  const [participant, setParticipant] = useState(null);
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [noticed, setNoticed] = useState(false);
  const notice = () => setNoticed(true);
  const send = (type, extra = {}) => dispatch({ type, now: Date.now(), ...extra });
  const close = () => { setRegistrationOpen(false); remember('ghmeFirstAidGameDismissed'); send('close'); };
  const requestStart = () => participant ? send('start') : setRegistrationOpen(true);
  const completeRegistration = values => { setParticipant(values); setRegistrationOpen(false); send('start'); };
  const requestClose = () => game.screen === 'quiz' ? send('exit') : close();
  useEffect(() => {
    if (game.screen !== 'closed') setNoticed(true);
  }, [game.screen]);
  useEffect(() => {
    if (game.screen !== 'quiz') return;
    const tick = () => dispatch({ type: 'tick', now: Date.now() });
    const interval = setInterval(tick, 250);
    document.addEventListener('visibilitychange', tick);
    return () => { clearInterval(interval); document.removeEventListener('visibilitychange', tick); };
  }, [game.screen, game.deadline]);
  useEffect(() => {
    if (game.screen === 'result') remember('ghmeFirstAidGameCompleted');
    headingRef.current?.focus();
  }, [game.screen, game.index]);
  const q = questions[game.index];
  const courseAction = event => {
    const target = document.getElementById('programs');
    if (target) {
      event.preventDefault(); close();
      requestAnimationFrame(() => { target.scrollIntoView({ behavior: 'instant' }); target.tabIndex = -1; target.focus({ preventScroll: true }); history.replaceState(null, '', '#programs'); });
    }
  };
  return <>
    <button ref={triggerRef} type="button" className={`game-trigger${noticed ? ' is-noticed' : ''}`} onPointerEnter={notice} onPointerDown={notice} onFocus={notice} onClick={() => { notice(); send('open'); }} aria-haspopup="dialog" aria-expanded={game.screen !== 'closed'}>
      <span className="icon-signal" aria-hidden="true">
        <span className="signal-glow" />
        <span className="signal-waves signal-left"><i /><i /><i /></span>
        <span className="signal-heart"><HeartPulse className="game-trigger-icon" size={32} /></span>
        <span className="signal-waves signal-right"><i /><i /><i /></span>
      </span>
      <span>Thử thách sơ cứu <strong>4 phút</strong></span>
    </button>
    {game.screen !== 'closed' && <GameDialog onClose={requestClose} fallbackRef={triggerRef}>
      {(game.screen === 'entry' || game.screen === 'intro') && <button className="close-game" aria-label={game.screen === 'entry' ? 'Đóng' : 'Đóng thử thách'} title="Đóng" onClick={requestClose}><X size={21} aria-hidden="true" /></button>}
      {(game.screen === 'entry' || game.screen === 'intro') ? <GameIntro imageBase={imageBase} headingRef={headingRef} onStart={requestStart} onClose={close} /> : <>
        <Header index={game.index} total={questions.length} answered={game.responses.length} remaining={game.remaining} finished={game.finished} imageBase={imageBase} onClose={requestClose} />
        <main className="game-main">
          {game.screen === 'quiz' ? <div className="game-composition" key={q.id}>
            <Situation question={q} index={game.index} imageBase={imageBase} />
            <Question question={q} index={game.index} total={questions.length} selected={game.selected} confirmed={game.confirmed} hint={game.hint} onSelect={value => send('select', { value })} onHint={() => send('hint')} onConfirm={() => send('confirm')} onNext={() => send('next', { total: questions.length })} headingRef={headingRef} />
          </div> : <Results questions={questions} responses={game.responses} remaining={game.remaining} timedOut={game.timedOut} onRestart={() => send('intro')} headingRef={headingRef} onCourse={courseAction} />}
        </main>
      </>}
      {registrationOpen && <ParticipantForm onClose={() => setRegistrationOpen(false)} onComplete={completeRegistration} />}
      {game.exit && <GameDialog confirmation onClose={() => send('continue')}>
        <p className="section-label">Rời thử thách</p><h2 id="exit-title" className="exit-heading">Bạn muốn dừng thử thách?</h2><p className="exit-description">Lượt chơi này sẽ kết thúc. Khi quay lại, bạn sẽ bắt đầu một lượt mới. Đồng hồ vẫn chạy khi bạn cân nhắc.</p><div className="exit-actions"><button autoFocus className="button-primary" onClick={() => send('continue')}>Tiếp tục</button><button className="button-secondary" onClick={close}>Thoát thử thách</button></div>
      </GameDialog>}
    </GameDialog>}
  </>;
}
