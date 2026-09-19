import { Clock3, ShieldCheck } from 'lucide-react';
import { formatTime } from '../game';

export default function Header({ index, total, remaining, finished, answered, imageBase }) {
  const number = index + 1;
  return (
    <header className="border-b border-line bg-white">
      <div className="mx-auto grid min-h-22 max-w-350 grid-cols-[1fr_1fr_1fr] items-center gap-8 pl-8 pr-16 max-sm:grid-cols-[1fr_auto] max-sm:gap-4 max-sm:pl-5 max-sm:pr-14 max-sm:py-4">
        <div className="flex w-fit items-center gap-4 rounded-md" aria-label="GHME — trang đầu mini-game">
          <img src={imageBase + 'logo_GHME.svg'} alt="GHME" className="h-auto w-32 shrink-0 object-contain object-left" />
          <span className="border-l border-line pl-4 text-[11px] leading-5 text-muted max-lg:hidden">KIẾN THỨC SƠ CỨU<br /><strong id="game-title" className="font-semibold text-navy">4 phút thời gian vàng</strong></span>
        </div>
        <div className="mx-auto w-full max-w-64 max-sm:order-3 max-sm:col-span-2 max-sm:max-w-none">
          <div className="mb-2 flex justify-between text-xs"><span className="font-semibold text-navy">{finished ? 'Đã kết thúc' : `Câu ${number} / ${total}`}</span><span className="text-muted">{finished ? 'Tổng kết' : `${Math.round(answered / total * 100)}% hành trình`}</span></div>
          <div role="progressbar" aria-label="Tiến trình câu hỏi" aria-valuenow={answered} aria-valuemin={0} aria-valuemax={total} className="h-1.5 overflow-hidden rounded-full bg-pale">
            <div className="h-full rounded-full bg-navy transition-[width] duration-200" style={{ width: `${answered / total * 100}%` }} />
          </div>
        </div>
        <div className="flex items-center justify-end gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-orange-light text-orange"><Clock3 size={19} aria-hidden="true" /></div>
          <div><p className="text-[10px] font-medium text-muted">Thời gian còn lại</p><p role="timer" aria-label="Thời gian còn lại" aria-live="off" className={`text-[27px] font-bold leading-8 tracking-wide tabular-nums ${remaining < 60 ? 'text-orange' : 'text-navy'}`}>{formatTime(remaining)}</p></div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return <footer className="mx-auto flex w-full max-w-300 flex-wrap items-center justify-between gap-3 px-6 pb-6 pt-5 text-[11px] text-muted"><span className="flex items-center gap-2"><ShieldCheck size={15} aria-hidden="true" />GHME · Học để sẵn sàng giúp đỡ</span><span>Bài ôn tập kiến thức · Không thay thế đào tạo sơ cứu thực hành</span></footer>;
}
