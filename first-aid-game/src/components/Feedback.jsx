import { useLocalization } from '../i18n';
import { CheckCircle2, Info, ExternalLink } from 'lucide-react';

// Present the existing explanation and hint; no additional clinical claims.
export default function Feedback({ question, correct }) {
  const { t, language } = useLocalization();
  const sentences = question.explanation.split(/(?<=[.!?])\s+/);
  const explanation = sentences[0];
  const takeaway = sentences.length > 1 ? sentences.slice(1).join(' ') : question.hint;
  return <div className={`feedback ${correct ? 'feedback-correct' : 'feedback-review'}`}>
    <div className="feedback-status">{correct ? <CheckCircle2 size={19} aria-hidden="true" /> : <Info size={19} aria-hidden="true" />}<strong>{correct ? t('ui.Correct') : t('ui.LetSReviewTheRightAction')}</strong></div>
    <p className="feedback-explanation">{explanation}</p>
    <p className="feedback-takeaway"><strong>{t('ui.KeyTakeaway')}</strong>{takeaway}</p>
    <a href={question.source} target="_blank" rel="noreferrer" className="source-link">{t('ui.RedCrossReference')}<ExternalLink size={11} aria-hidden="true" /></a>
  </div>;
}
