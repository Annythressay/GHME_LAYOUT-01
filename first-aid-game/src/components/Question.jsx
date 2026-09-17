import { ArrowRight, Check, CheckCircle2, Info, Lightbulb, ExternalLink } from 'lucide-react';

export default function Question({ question, index, total, selected, confirmed, hint, onSelect, onHint, onConfirm, onNext, headingRef }) {
  const correct = selected === question.correct;
  return (
    <section className="flex min-w-0 flex-col py-2 md:pl-2 lg:py-3 lg:pl-4" aria-labelledby="question-title">
      <div className="mb-4 flex items-center gap-3"><span className="eyebrow">Câu hỏi {String(index + 1).padStart(2, '0')}</span><span className="size-1 rounded-full bg-line" /><span className="text-xs text-muted">{question.category}</span></div>
      <h2 id="question-title" ref={headingRef} tabIndex={-1} className="question-heading text-[26px] font-bold leading-[1.4] tracking-[-0.7px] text-navy lg:text-[29px]">{question.question}</h2>
      <p id="answer-instructions" className="mb-6 mt-3 text-[13px] text-muted">Chọn một đáp án phù hợp nhất.</p>
      <fieldset aria-describedby="answer-instructions" disabled={confirmed} className="grid grid-cols-2 gap-3.5 max-sm:grid-cols-1">
        <legend className="sr-only">Các đáp án</legend>
        {question.answers.map((answer, i) => (
          <label key={i} className={`answer-option ${selected === i ? 'is-selected' : ''} ${confirmed ? 'is-locked' : ''}`}>
            <input type="radio" name={`answer-${question.id}`} value={i} checked={selected === i} onChange={() => onSelect(i)} className="peer sr-only" />
            <span className="answer-letter">{'ABCD'[i]}</span>
            <span className="min-w-0 flex-1 text-[13px] font-medium leading-[1.65]">{answer}</span>
            {selected === i && <Check size={15} className="absolute right-2 top-2 text-navy" aria-hidden="true" />}
          </label>
        ))}
      </fieldset>
      <div className="mt-5 min-h-28" aria-live="polite" aria-atomic="true">
        {confirmed && <div className={`feedback flex gap-3 rounded-xl p-4 ${correct ? 'bg-pale text-navy' : 'bg-orange-light text-navy'}`}>
          {correct ? <CheckCircle2 className="mt-0.5 shrink-0" size={21} aria-hidden="true" /> : <Info className="mt-0.5 shrink-0 text-orange" size={21} aria-hidden="true" />}
          <div><p className="mb-1 text-sm font-semibold">{correct ? 'Chính xác!' : 'Chưa chính xác'}</p>{!correct && <p className="mb-1 text-xs font-semibold">Đáp án phù hợp: {'ABCD'[question.correct]}. {question.answers[question.correct]}</p>}<p className="text-xs leading-6 text-muted">{question.explanation}</p><a href={question.source} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 text-[10px] underline underline-offset-2">Nguồn kiến thức: Red Cross<ExternalLink size={10} aria-hidden="true" /></a></div>
        </div>}
      </div>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
        <button type="button" className="button-secondary" onClick={onHint} aria-expanded={hint} aria-controls="question-hint" disabled={confirmed}><Lightbulb size={17} aria-hidden="true" />{hint ? 'Ẩn gợi ý' : 'Gợi ý'}</button>
        <button type="button" className="button-primary" disabled={selected === null} onClick={confirmed ? onNext : onConfirm}>{confirmed ? index === total - 1 ? 'Xem kết quả' : 'Tiếp theo' : 'Xác nhận đáp án'}<ArrowRight size={18} aria-hidden="true" /></button>
      </div>
    </section>
  );
}
