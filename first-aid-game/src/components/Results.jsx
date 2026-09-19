import { ArrowRight, CheckCircle2, RotateCcw, Award, Minus, Info } from 'lucide-react';
import { DURATION, formatTime } from '../game';

export default function Results({ questions, responses, remaining, timedOut, onRestart, headingRef, onCourse }) {
  const score = responses.filter((response, i) => response.selected === questions[i].correct).length;
  return (
    <section className="mx-auto w-full max-w-240 rounded-3xl border border-line bg-white p-7 shadow-[0_12px_50px_#10365e06] md:p-12">
      <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-orange-light text-orange"><Award size={32} aria-hidden="true" /></div>
      <p className="eyebrow mt-6 text-center">Mỗi kiến thức đúng, thêm một cơ hội</p>
      <h1 id="result-title" ref={headingRef} tabIndex={-1} className="question-heading mt-3 text-center text-3xl font-bold text-navy">{timedOut ? 'Hết 4 phút' : 'Bạn đã hoàn thành thử thách!'}</h1>
      <p className="mt-4 text-center text-xl font-semibold text-navy">{timedOut && responses.length < questions.length ? 'Cùng nhìn lại những câu bạn đã thử' : score >= 8 ? 'Bạn đã có nền tảng tốt' : score >= 5 ? 'Bạn đã có kiến thức cơ bản' : 'Mỗi câu hỏi là một bước củng cố nền tảng'}</p>
      <p className="mx-auto mt-3 max-w-140 text-center text-sm leading-7 text-muted">Trong tình huống thật, kiến thức chỉ là bước đầu. Thực hành giúp bạn phản ứng chính xác và tự tin hơn.</p>
      <div className="my-8 grid grid-cols-3 divide-x divide-line rounded-2xl bg-pale py-6 text-center"><div><p className="text-3xl font-bold text-navy">{score}<span className="text-lg font-normal text-muted"> / {questions.length}</span></p><p className="mt-1 text-xs text-muted">Câu trả lời đúng</p></div><div><p className="text-3xl font-bold text-navy">{responses.length}</p><p className="mt-1 text-xs text-muted">Câu đã xác nhận</p></div><div><p className="text-3xl font-bold tabular-nums text-navy max-sm:text-2xl">{formatTime(DURATION - remaining)}</p><p className="mt-1 text-xs text-muted">Thời gian sử dụng</p></div></div>
      <div className="result-next"><h2>Muốn tự tin hơn khi gặp tình huống thật?</h2><p>Khám phá các chương trình thực hành cùng chuyên gia GHME.</p><div className="flex flex-wrap justify-center gap-3"><a className="button-primary" href="../#programs" onClick={onCourse}>Khám phá khóa học sơ cấp cứu<ArrowRight size={17} aria-hidden="true" /></a><button className="button-secondary" onClick={onRestart}><RotateCcw size={17} aria-hidden="true" />Làm lại thử thách</button></div></div>
      <div id="review" className="mt-10 border-t border-line pt-7"><h2 className="mb-4 text-lg font-semibold text-navy">Cùng nhìn lại kiến thức</h2><div className="divide-y divide-line">{questions.map((q, i) => {
        const response = responses[i];
        const correct = response?.selected === q.correct;
        const Icon = !response ? Minus : correct ? CheckCircle2 : Info;
        return <details key={q.id} className="group py-3"><summary className="flex cursor-pointer list-none items-start gap-3 rounded-md text-sm leading-6 text-navy"><Icon size={18} className={`mt-1 shrink-0 ${correct ? 'text-navy' : 'text-orange'}`} aria-hidden="true" /><span className="flex-1"><strong className="font-medium">{i + 1}. {q.question}</strong><span className="block text-[11px] text-muted">{!response ? 'Chưa xác nhận' : correct ? 'Trả lời đúng' : 'Cần ôn lại'} · Xem giải thích</span></span></summary><div className="ml-7 mt-3 rounded-lg bg-pale p-4 text-xs leading-6 text-muted">{response && <p>Bạn chọn: {'ABCD'[response.selected]}. {q.answers[response.selected]}</p>}<p className="font-semibold text-navy">Đáp án: {'ABCD'[q.correct]}. {q.answers[q.correct]}</p><p>{q.explanation}</p><a href={q.source} target="_blank" rel="noreferrer" className="underline underline-offset-2">Tham khảo Red Cross</a></div></details>;
      })}</div></div>
    </section>
  );
}
