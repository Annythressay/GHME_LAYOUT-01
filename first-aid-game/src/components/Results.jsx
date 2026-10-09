import { useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, RotateCcw, ChevronDown, BookOpen } from 'lucide-react';
import { DURATION, formatTime } from '../game';

export default function Results({ questions, responses, remaining, timedOut, onRestart, headingRef, onCourse }) {
  const reviewRef = useRef(null);
  const [showAll, setShowAll] = useState(false);
  const isCorrect = i => responses[i]?.selected === questions[i].correct;
  const score = responses.filter((response, i) => response.selected === questions[i].correct).length;
  const review = questions.map((q, i) => ({ q, i })).filter(({ i }) => !isCorrect(i));
  const revisit = [...new Set(review.map(({ q }) => q.category))];
  const strengths = [...new Set(questions.filter((q, i) => isCorrect(i) && !revisit.includes(q.category)).map(q => q.category))];
  const visible = showAll ? questions.map((q, i) => ({ q, i })) : review;
  const goToReview = () => {
    if (!review.length) setShowAll(true);
    requestAnimationFrame(() => { reviewRef.current?.scrollIntoView({ block: 'start', behavior: 'instant' }); reviewRef.current?.focus({ preventScroll: true }); });
  };
  const message = timedOut && responses.length < questions.length ? 'Cùng nhìn lại những câu bạn đã thử.' : score >= 8 ? 'Bạn đã có nền tảng tốt.' : score >= 5 ? 'Bạn đã có kiến thức cơ bản.' : 'Mỗi câu hỏi là một bước củng cố nền tảng.';
  return <section className="results">
    <div className="result-overview">
      <div className="result-hero"><p className="section-label">{timedOut ? 'Hết 4 phút' : 'Hoàn thành thử thách'}</p><h1 id="result-title" ref={headingRef} tabIndex={-1} className="question-heading result-score"><span>{score}</span><span className="score-total"> / {questions.length}</span><span className="sr-only"> câu trả lời đúng</span></h1><h2>{message}</h2><p className="result-time">{timedOut ? 'Thời gian sử dụng' : 'Hoàn thành trong'} <strong>{formatTime(DURATION - remaining)}</strong>{responses.length < questions.length && <> · {responses.length}/{questions.length} câu đã xác nhận</>}</p><p className="result-support">Mỗi cách xử trí đúng là một bước để sẵn sàng giúp đỡ.</p><button className="result-review-action" onClick={goToReview}>{review.length ? `Ôn lại ${review.length} tình huống` : 'Xem lại các đáp án'}<ArrowRight size={17} aria-hidden="true" /></button></div>
      <div className="learning-summary">
        {strengths.length > 0 && <div className="summary-group summary-strength"><h2><CheckCircle2 size={18} aria-hidden="true" />Bạn làm tốt</h2><ul>{strengths.map(category => <li key={category}>{category}</li>)}</ul></div>}
        <div className="summary-group summary-revisit"><h2><BookOpen size={18} aria-hidden="true" />{revisit.length ? 'Bạn nên xem lại' : 'Tiếp tục giữ vững kiến thức'}</h2>{revisit.length ? <><p className="summary-note">Các chủ đề có câu sai hoặc chưa trả lời.</p><ul className="revisit-list">{revisit.map(category => <li key={category}>{category}</li>)}</ul></> : <p className="summary-note">Bạn đã trả lời đúng cả 10 tình huống. Thực hành thường xuyên giúp củng cố kỹ năng.</p>}</div>
      </div>
    </div>
    <section className="answer-review" aria-labelledby="review-title"><div className="review-heading"><h2 id="review-title" ref={reviewRef} tabIndex={-1}>{showAll ? 'Toàn bộ kết quả' : 'Các câu cần xem lại'} <span>{visible.length}</span></h2><p>Nhìn lại lựa chọn. Ghi nhớ cách xử trí.</p></div>
      {visible.length === 0 && <p className="review-empty">Không có câu nào cần xem lại trong lượt chơi này.</p>}
      <div className="review-list">{visible.map(({ q, i }) => <article className="review-row" key={q.id}><span className="review-number">{String(i + 1).padStart(2, '0')}</span><div className="review-content"><p className="review-category">{q.category}{showAll && isCorrect(i) && <span> · Chính xác</span>}</p><h3>{q.question}</h3><div className="review-answers"><p className={isCorrect(i) ? 'review-selected is-correct' : 'review-selected'}><span>Bạn chọn</span>{responses[i] ? <>{'ABCD'[responses[i].selected]}. {q.answers[responses[i].selected]}</> : 'Chưa xác nhận đáp án'}</p><p className="review-correct"><span>Đáp án đúng</span>{'ABCD'[q.correct]}. {q.answers[q.correct]}</p></div><details><summary>Xem giải thích<ChevronDown size={16} aria-hidden="true" /></summary><div className="review-explanation"><p>{q.explanation}</p><a className="source-link" href={q.source} target="_blank" rel="noreferrer">Tham khảo Red Cross</a></div></details></div></article>)}</div>
      <button className="text-button review-toggle" aria-pressed={showAll} onClick={() => setShowAll(value => !value)}>{showAll ? 'Chỉ xem các câu cần ôn lại' : 'Xem toàn bộ kết quả'}<ArrowRight size={16} aria-hidden="true" /></button>
    </section>
    <section className="result-next"><div><p className="section-label">Bước tiếp theo</p><h2>Muốn tự tin hơn trong tình huống thật?</h2><p>Thực hành trực tiếp giúp biến kiến thức thành phản xạ.</p></div><div className="result-next-actions"><a className="button-primary" href="../#programs" onClick={onCourse}>Khám phá khóa học sơ cấp cứu<ArrowRight size={17} aria-hidden="true" /></a><button className="text-button" onClick={onRestart}><RotateCcw size={16} aria-hidden="true" />Làm lại thử thách</button></div></section>
    <p className="result-note">Bài ôn tập kiến thức · Không thay thế đào tạo sơ cứu thực hành.</p>
  </section>;
}
