import { Clock3, CheckCircle2, X } from 'lucide-react';
import { formatTime } from '../game';

export default function Header({ index, total, remaining, finished, answered, imageBase, onClose }) {
  return <header className="training-header">
    <div className="training-brand"><img src={imageBase + 'logo-ghme.svg'} alt="GHME" /><span id="game-title">4 phút thời gian vàng</span></div>
    <div className="training-progress">
      <p>{finished ? 'Đã kết thúc thử thách' : <>Câu <strong>{String(index + 1).padStart(2, '0')}</strong><span> / {total}</span></>}</p>
      <div role="progressbar" aria-label="Tiến trình câu hỏi" aria-valuenow={answered} aria-valuemin={0} aria-valuemax={total} className="progress-track"><span style={{ width: `${answered / total * 100}%` }} /></div>
    </div>
    <div className={`training-timer${remaining < 60 && !finished ? ' is-low' : ''}`}>
      {finished ? <CheckCircle2 size={19} aria-hidden="true" /> : <><Clock3 size={18} aria-hidden="true" /><span role="timer" aria-label="Thời gian còn lại" aria-live="off">{formatTime(remaining)}</span></>}
    </div>
    <button className="close-game" aria-label="Đóng thử thách" title="Đóng" onClick={onClose}><X size={21} aria-hidden="true" /></button>
  </header>;
}
