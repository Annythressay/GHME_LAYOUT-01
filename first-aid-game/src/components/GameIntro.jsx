import { useLocalization } from '../i18n';
import { ArrowRight } from 'lucide-react';

export default function GameIntro({ imageBase, headingRef, onStart, onClose }) {
  const { t, language } = useLocalization();
  return <section className="opening">
    <div className="opening-brand"><img src={imageBase + 'logo-ghme.svg'} alt="GHME" /><span>{t('ui.FirstAidChallenge13')}</span></div>
    <div className="opening-composition">
      <div className="opening-content">
        <h1 id="game-title" ref={headingRef} tabIndex={-1} className="question-heading opening-title" aria-label={t('ui.4GoldenMinutes')}><span className="opening-four">4 <span>{language === 'vi' && t('ui.MINUTES')}</span></span><span className="opening-golden">{t('ui.GOLDEN')}<br />{t('ui.TIME')}<span className="title-stop">.</span></span></h1>
        <p className="opening-question">{t('ui.10Situations')}<br />{t('ui.HowWouldYouRespond')}</p>
        <p className="opening-description">{t('ui.ShortQuestionsAboutCommonFirstAid')}<br className="desktop-break" /> {t('ui.ChooseAnActionAndLearnAfter')}</p>
        <div className="opening-actions"><button className="button-primary" onClick={onStart}>{t('ui.StartTheChallenge')}<ArrowRight size={18} aria-hidden="true" /></button><button className="text-button" onClick={onClose}>{t('ui.MaybeLater')}</button></div>
      </div>
      <figure className="opening-visual"><img src={imageBase + 'bidv.webp'} alt={t('ui.GHMELearnersPracticingFirstAidOn')} /><figcaption>{t('ui.KnowledgeFromPracticalTrainingAtGHME')}</figcaption></figure>
    </div>
    <p className="opening-note">{t('ui.4MinutesToTestYourKnowledge')}</p>
  </section>;
}
