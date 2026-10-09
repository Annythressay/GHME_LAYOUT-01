import { useLocalization } from '../i18n';
export default function Situation({ question, index, imageBase }) {
  const { t, language } = useLocalization();
  return <aside className="situation" aria-label={t('ui.SituationValue0', {value0: index + 1})}>
    <div className="case-label"><span>{t('ui.Situation')} {String(index + 1).padStart(2, '0')}</span><span className="case-line" /></div>
    <figure className="case-visual"><img src={imageBase + question.image + '.webp'} alt={question.imageAlt} /><figcaption>{t('ui.IllustrationFromAPracticalFirstAid')}</figcaption></figure>
  </aside>;
}
