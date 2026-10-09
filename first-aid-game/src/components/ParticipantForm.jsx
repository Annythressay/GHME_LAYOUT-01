import { useLocalization } from '../i18n';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, X, Clock3 } from 'lucide-react';
import GameDialog from './GameDialog';

export default function ParticipantForm({ onClose, onComplete }) {
  const { t } = useLocalization();
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
    if (cleaned.name.length < 2) next.name = 'ui.PleaseEnterYourFullName';
    const digits = cleaned.phone.replace(/\D/g, '');
    if (!/^\+?[\d\s().-]+$/.test(cleaned.phone) || digits.length < 9 || digits.length > 15) next.phone = 'ui.PleaseEnterAValidPhoneNumber';
    if (cleaned.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned.email)) next.email = 'ui.PleaseCheckYourEmailAddress';
    setErrors(next);
    const invalid = Object.keys(next)[0];
    if (invalid) { event.currentTarget.elements.namedItem(invalid)?.focus(); return; }
    onComplete(cleaned);
  };
  return <GameDialog confirmation labelledBy="participant-title" className="participant-dialog" onClose={onClose}>
    <button className="close-game" onClick={onClose} aria-label={t('ui.CloseParticipantForm')}><X size={20} aria-hidden="true" /></button>
    <p className="participant-eyebrow">{t('ui.GHMEFirstAidChallenge')}</p>
    <h2 id="participant-title">{t('ui.BeforeYouBegin')}</h2>
    <p className="participant-description">{t('ui.TellGHMEALittleAboutYourself')}</p>
    <form className="participant-form" noValidate onSubmit={submit}>
      <label htmlFor="participant-name">{t('ui.FullName')} <span aria-hidden="true">*</span></label>
      <input ref={nameRef} id="participant-name" name="name" autoComplete="name" required maxLength={100} placeholder={t('ui.EnterYourFullName')} value={values.name} onChange={update} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'participant-name-error' : undefined} />
      {errors.name && <p id="participant-name-error" className="field-error">{t(errors.name)}</p>}
      <label htmlFor="participant-phone">{t('ui.PhoneNumber')} <span aria-hidden="true">*</span></label>
      <input id="participant-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required maxLength={24} placeholder={t('ui.EnterYourPhoneNumber')} value={values.phone} onChange={update} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'participant-phone-error' : undefined} />
      {errors.phone && <p id="participant-phone-error" className="field-error">{t(errors.phone)}</p>}
      <label htmlFor="participant-email">Email <small>{t('ui.Optional')}</small></label>
      <input id="participant-email" name="email" type="email" autoComplete="email" maxLength={254} placeholder="ban@example.com" value={values.email} onChange={update} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'participant-email-error' : undefined} />
      {errors.email && <p id="participant-email-error" className="field-error">{t(errors.email)}</p>}
      <p className="participant-timing"><Clock3 size={16} aria-hidden="true" />{t('ui.YouWillStillHaveTheFull')}</p>
      <button type="submit" className="button-primary">{t('ui.EnterTheChallenge')}<ArrowRight size={18} aria-hidden="true" /></button>
      <p className="participant-notice">{t('ui.PreviewYourDetailsAreNotSent')}</p>
    </form>
  </GameDialog>;
}
