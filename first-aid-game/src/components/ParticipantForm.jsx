import { useEffect, useRef, useState } from 'react';
import { ArrowRight, X, Clock3 } from 'lucide-react';
import GameDialog from './GameDialog';

export default function ParticipantForm({ onClose, onComplete }) {
  const nameRef = useRef(null);
  useEffect(() => { nameRef.current?.focus(); }, []);
  const [values, setValues] = useState({ name: '', phone: '', email: '' });
  const [errors, setErrors] = useState({});
  const update = event => {
    const { name, value } = event.target;
    setValues(previous => ({ ...previous, [name]: value }));
    setErrors(previous => ({ ...previous, [name]: undefined }));
  };
  const submit = event => {
    event.preventDefault();
    const cleaned = { name: values.name.trim(), phone: values.phone.trim(), email: values.email.trim() };
    const next = {};
    if (cleaned.name.length < 2) next.name = 'Vui lòng nhập họ và tên của bạn.';
    const digits = cleaned.phone.replace(/\D/g, '');
    if (!/^\+?[\d\s().-]+$/.test(cleaned.phone) || digits.length < 9 || digits.length > 15) next.phone = 'Vui lòng nhập số điện thoại hợp lệ (9–15 chữ số).';
    if (cleaned.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned.email)) next.email = 'Vui lòng kiểm tra lại địa chỉ email.';
    setErrors(next);
    const invalid = Object.keys(next)[0];
    if (invalid) { event.currentTarget.elements.namedItem(invalid)?.focus(); return; }
    onComplete(cleaned);
  };
  return <GameDialog confirmation labelledBy="participant-title" className="participant-dialog" onClose={onClose}>
    <button className="close-game" onClick={onClose} aria-label="Đóng form thông tin"><X size={20} aria-hidden="true" /></button>
    <p className="participant-eyebrow">GHME · Thử thách sơ cứu</p>
    <h2 id="participant-title">Trước khi bắt đầu</h2>
    <p className="participant-description">Cho GHME biết một chút về bạn để bắt đầu hành trình 10 tình huống.</p>
    <form className="participant-form" noValidate onSubmit={submit}>
      <label htmlFor="participant-name">Họ và tên <span aria-hidden="true">*</span></label>
      <input ref={nameRef} id="participant-name" name="name" autoComplete="name" required maxLength={100} placeholder="Nhập họ và tên của bạn" value={values.name} onChange={update} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'participant-name-error' : undefined} />
      {errors.name && <p id="participant-name-error" className="field-error">{errors.name}</p>}
      <label htmlFor="participant-phone">Số điện thoại <span aria-hidden="true">*</span></label>
      <input id="participant-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required maxLength={24} placeholder="Nhập số điện thoại" value={values.phone} onChange={update} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'participant-phone-error' : undefined} />
      {errors.phone && <p id="participant-phone-error" className="field-error">{errors.phone}</p>}
      <label htmlFor="participant-email">Email <small>Không bắt buộc</small></label>
      <input id="participant-email" name="email" type="email" autoComplete="email" maxLength={254} placeholder="ban@example.com" value={values.email} onChange={update} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'participant-email-error' : undefined} />
      {errors.email && <p id="participant-email-error" className="field-error">{errors.email}</p>}
      <p className="participant-timing"><Clock3 size={16} aria-hidden="true" />Bạn vẫn có đủ 4 phút sau bước này.</p>
      <button type="submit" className="button-primary">Vào thử thách<ArrowRight size={18} aria-hidden="true" /></button>
      <p className="participant-notice">Bản xem trước: thông tin chưa được gửi đến GHME và chỉ được giữ trong lượt truy cập này.</p>
    </form>
  </GameDialog>;
}
