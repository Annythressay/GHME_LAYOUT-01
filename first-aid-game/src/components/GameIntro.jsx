import { ArrowRight, Clock3, BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function GameIntro({ intro, imageBase, headingRef, onStart, onClose }) {
  if (!intro) return <div className="micro-invitation">
    <p className="micro-label"><strong>GHME</strong><span aria-hidden="true"> · </span><span>4 phút thời gian vàng</span></p>
    <div className="micro-body">
      <div className="micro-duration" aria-label="Thời lượng thử thách: 4 phút"><span aria-hidden="true">04:00</span><small aria-hidden="true">thời lượng</small></div>
      <h1 id="game-title" ref={headingRef} tabIndex={-1} className="question-heading micro-heading">10 tình huống.<br />Bạn sẽ xử trí<br />thế nào?</h1>
    </div>
    <div className="micro-actions"><button className="button-primary micro-start" onClick={onStart}>Thử 4 phút<ArrowRight size={18} aria-hidden="true" /></button><button className="micro-later" onClick={onClose}>Để sau</button></div>
  </div>;
  return <div className={'welcome ' + (intro ? 'welcome-intro' : '')}>
    <div className="welcome-visual"><img className="welcome-logo" src={imageBase + 'logo_GHME.svg'} alt="GHME" /><div className="welcome-photo"><img src={imageBase + 'bidv.webp'} alt="Ảnh minh họa học viên thực hành sơ cứu trên mô hình" /><span>Ảnh minh họa thực hành</span></div><div className="welcome-caption"><span className="eyebrow">Học để sẵn sàng</span><p>Một chút kiến thức.<br />Thêm một phần tự tin.</p></div></div>
    <div className="welcome-content"><p className="eyebrow">Thử thách kiến thức sơ cấp cứu</p><h1 id="game-title" ref={headingRef} tabIndex={-1} className="question-heading welcome-title">{intro ? <>Sẵn sàng cho<br />tình huống đầu tiên?</> : <><span>4 PHÚT</span><br />THỜI GIAN VÀNG<span className="text-orange">.</span></>}</h1>
      <p className="welcome-question">{intro ? 'Bình tĩnh lựa chọn. Học thêm sau mỗi câu.' : 'Bạn sẽ phản ứng thế nào trong những phút đầu tiên?'}</p>
      <p className="welcome-description">{intro ? 'Chọn một đáp án, xác nhận rồi đọc giải thích trước khi sang câu tiếp theo. Bạn có thể dùng gợi ý bất cứ lúc nào.' : '10 câu hỏi ngắn giúp bạn khám phá kiến thức sơ cứu của mình trong khoảng 4 phút.'}</p>
      <ul className="welcome-benefits"><li><CheckCircle2 size={17} aria-hidden="true" />10 tình huống thực tế</li><li><Clock3 size={17} aria-hidden="true" />{intro ? 'Đồng hồ chỉ chạy khi bạn sẵn sàng' : 'Khoảng 4 phút, theo nhịp của bạn'}</li><li><BookOpen size={17} aria-hidden="true" />Giải thích sau mỗi câu trả lời</li></ul>
      <button className="button-primary welcome-start" onClick={onStart}>{intro ? 'Sẵn sàng, bắt đầu' : 'Bắt đầu thử thách'}<ArrowRight size={18} aria-hidden="true" /></button><button className="welcome-later" onClick={onClose}>{intro ? 'Quay lại website' : 'Để sau'}</button>
      <p className="welcome-trust"><ShieldCheck size={14} aria-hidden="true" />Không đăng nhập · Không cần thông tin cá nhân</p>
      {intro && <p className="welcome-note">4 phút là thời lượng thử thách, không phải mốc xử trí chung cho mọi tình huống. Bài ôn tập không thay thế đào tạo thực hành.</p>}
    </div>
  </div>;
}
