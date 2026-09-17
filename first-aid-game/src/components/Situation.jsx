import { HeartPulse, Lightbulb, BookOpen } from 'lucide-react';

export default function Situation({ question, index, hint }) {
  return (
    <aside className="flex min-w-0 flex-col rounded-[18px] bg-pale p-5 lg:p-6">
      <div className="mb-4 flex items-center justify-between gap-2"><span className="eyebrow">Tình huống {String(index + 1).padStart(2, '0')}</span><HeartPulse size={20} className="text-navy/60" aria-hidden="true" /></div>
      <div className="relative overflow-hidden rounded-xl bg-white">
        <img src={`./images/${question.image}.webp`} alt={question.imageAlt} className="aspect-[1.13] w-full object-cover max-md:aspect-[1.8]" />
        <span className="absolute bottom-3 left-3 rounded-md bg-white/95 px-2.5 py-1.5 text-[10px] font-medium text-navy">Ảnh minh họa thực hành</span>
      </div>
      <div className="pt-5"><span className="mb-3 block h-0.5 w-7 bg-orange" /><h2 className="whitespace-pre-line text-[22px] font-semibold leading-[1.45] tracking-tight text-navy">{question.scene}</h2></div>
      <div id="question-hint" className="mt-5 min-h-23 border-t border-navy/10 pt-4" aria-live="polite">
        {hint ? <div className="flex gap-2.5"><Lightbulb size={18} className="mt-0.5 shrink-0 text-orange" aria-hidden="true" /><div><p className="mb-1 text-xs font-semibold text-navy">Một gợi ý cho bạn</p><p className="text-xs leading-6 text-muted">{question.hint}</p></div></div> : <p className="flex gap-2.5 text-xs leading-6 text-muted"><BookOpen size={17} className="mt-1 shrink-0" aria-hidden="true" />Quan sát tình huống. Bình tĩnh lựa chọn cách xử trí phù hợp nhất.</p>}
      </div>
    </aside>
  );
}
