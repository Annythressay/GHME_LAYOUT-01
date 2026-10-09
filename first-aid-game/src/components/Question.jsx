import { ArrowRight, Check, CheckCircle2, Info, Lightbulb } from 'lucide-react';
import Feedback from './Feedback';

export default function Question({ question, index, total, selected, confirmed, hint, onSelect, onHint, onConfirm, onNext, headingRef }) {
  return <section className="decision" aria-labelledby="question-title">
    <p className="question-category">{question.category}</p>
    <h2 id="question-title" ref={headingRef} tabIndex={-1} className="question-heading">{question.question}</h2>
    <fieldset className="decision-choices" disabled={confirmed}>
      <legend className="sr-only">Chọn một cách xử trí phù hợp nhất</legend>
      {question.answers.map((answer, i) => {
        const right = confirmed && i === question.correct;
        const wrong = confirmed && selected === i && !right;
        return <label key={i} className={`answer-option${selected === i ? ' is-selected' : ''}${confirmed ? ' is-locked' : ''}${right ? ' is-correct' : ''}${wrong ? ' is-incorrect' : ''}`}>
          <input type="radio" name={`answer-${question.id}`} value={i} checked={selected === i} onChange={() => onSelect(i)} className="sr-only" />
          <span className="answer-letter" aria-hidden="true">{'ABCD'[i]}</span><span className="answer-text">{answer}{confirmed && (right || wrong) && <span className="sr-only">{right ? ' — Đáp án đúng' : ' — Bạn chọn, chưa chính xác'}</span>}</span>
          <span className="answer-mark" aria-hidden="true">{right ? <CheckCircle2 size={18} /> : wrong ? <Info size={18} /> : selected === i ? <Check size={18} /> : null}</span>
        </label>;
      })}
    </fieldset>
    <div className="learning-space">
      <div aria-live="polite" aria-atomic="true">{confirmed && <Feedback question={question} correct={selected === question.correct} />}</div>
      {!confirmed && <div className="training-aid"><button className="hint-toggle" onClick={onHint} aria-expanded={hint} aria-controls="question-hint"><Lightbulb size={18} aria-hidden="true" />{hint ? 'Ẩn gợi ý' : 'Cần một gợi ý?'}</button><div id="question-hint" className="hint-content" aria-live="polite">{hint && <p>{question.hint}</p>}</div></div>}
    </div>
    <div className="decision-actions"><span className="decision-step">{confirmed ? 'Ghi nhớ trước khi tiếp tục' : selected === null ? 'Chọn cách bạn sẽ xử trí' : 'Sẵn sàng với lựa chọn của bạn?'}</span><button className="button-primary decision-primary" disabled={selected === null} onClick={confirmed ? onNext : onConfirm}>{confirmed ? index === total - 1 ? 'Xem kết quả' : 'Câu tiếp theo' : 'Xác nhận đáp án'}<ArrowRight size={18} aria-hidden="true" /></button></div>
  </section>;
}
