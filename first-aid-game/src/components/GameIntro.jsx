import { ArrowRight } from 'lucide-react';

export default function GameIntro({ imageBase, headingRef, onStart, onClose }) {
  return <section className="opening">
    <div className="opening-brand"><img src={imageBase + 'logo-ghme.svg'} alt="GHME" /><span>Thử thách sơ cấp cứu</span></div>
    <div className="opening-composition">
      <div className="opening-content">
        <h1 id="game-title" ref={headingRef} tabIndex={-1} className="question-heading opening-title"><span className="opening-four">4 <span>PHÚT</span></span><span className="opening-golden">THỜI GIAN<br />VÀNG<span className="title-stop">.</span></span></h1>
        <p className="opening-question">10 tình huống.<br />Bạn sẽ xử trí thế nào?</p>
        <p className="opening-description">Những câu hỏi ngắn về sơ cấp cứu thường gặp.<br className="desktop-break" /> Chọn cách xử trí và học thêm sau mỗi câu.</p>
        <div className="opening-actions"><button className="button-primary" onClick={onStart}>Bắt đầu thử thách<ArrowRight size={18} aria-hidden="true" /></button><button className="text-button" onClick={onClose}>Để sau</button></div>
      </div>
      <figure className="opening-visual"><img src={imageBase + 'bidv.webp'} alt="Học viên GHME thực hành sơ cứu trên mô hình" /><figcaption>Kiến thức từ những buổi thực hành tại GHME.</figcaption></figure>
    </div>
    <p className="opening-note">4 phút cho thử thách kiến thức. Bài ôn tập không thay thế đào tạo sơ cứu thực hành.</p>
  </section>;
}
