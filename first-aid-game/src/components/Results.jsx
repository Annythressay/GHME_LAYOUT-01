import { useLocalization } from '../i18n';
import { useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, RotateCcw, ChevronDown, BookOpen } from 'lucide-react';
import { DURATION, formatTime } from '../game';

export default function Results({ questions, responses, remaining, timedOut, onRestart, headingRef, onCourse }) {
  const { t, language } = useLocalization();
  const reviewRef = useRef(null);
  const [showAll, setShowAll] = useState(false);
  const isCorrect = i => responses[i]?.selected === questions[i].correct;
  const score = responses.filter((response, i) => response.selected === questions[i].correct).length;
  const review = questions.map((q, i) => ({ q, i })).filter(({ i }) => !isCorrect(i));
  const revisit = [...new Set(review.map(({ q }) => q.category))];
  const strengths = [...new Set(questions.filter((q, i) => isCorrect(i) && !revisit.includes(q.category)).map(q => q.category))];
  const visible = showAll ? questions.map((q, i) => ({ q, i })) : review;
  const goToReview = () => {
    if (!review.length) setShowAll(true);
    requestAnimationFrame(() => { reviewRef.current?.scrollIntoView({ block: 'start', behavior: 'instant' }); reviewRef.current?.focus({ preventScroll: true }); });
  };
  const message = timedOut && responses.length < questions.length ? t('ui.LetSReviewTheQuestionsYou') : score >= 8 ? t('ui.YouHaveAStrongFoundation') : score >= 5 ? t('ui.YouHaveABasicUnderstanding') : t('ui.EveryQuestionHelpsStrengthenYourKnowledge');
  return <section className="results">
    <div className="result-overview">
      <div className="result-hero"><p className="section-label">{timedOut ? t('ui.4MinutesAreUp') : t('ui.ChallengeComplete62')}</p><h1 id="result-title" ref={headingRef} tabIndex={-1} className="question-heading result-score"><span>{score}</span><span className="score-total"> / {questions.length}</span><span className="sr-only"> {t('ui.CorrectAnswers')}</span></h1><h2>{message}</h2><p className="result-time">{timedOut ? t('ui.TimeUsed') : t('ui.CompletedIn')} <strong>{formatTime(DURATION - remaining)}</strong>{responses.length < questions.length && <> · {responses.length}/{questions.length} {t('ui.AnswersConfirmed')}</>}</p><p className="result-support">{t('ui.EveryCorrectActionHelpsYouPrepare')}</p><button className="result-review-action" onClick={goToReview}>{review.length ? t('ui.ReviewValue0Situations', {value0: review.length}) : t('ui.ReviewTheAnswers')}<ArrowRight size={17} aria-hidden="true" /></button></div>
      <div className="learning-summary">
        {strengths.length > 0 && <div className="summary-group summary-strength"><h2><CheckCircle2 size={18} aria-hidden="true" />{t('ui.YourStrengths')}</h2><ul>{strengths.map(category => <li key={category}>{category}</li>)}</ul></div>}
        <div className="summary-group summary-revisit"><h2><BookOpen size={18} aria-hidden="true" />{revisit.length ? t('ui.TopicsToRevisit') : t('ui.KeepYourKnowledgeStrong')}</h2>{revisit.length ? <><p className="summary-note">{t('ui.TopicsWithIncorrectOrUnansweredQuestions')}</p><ul className="revisit-list">{revisit.map(category => <li key={category}>{category}</li>)}</ul></> : <p className="summary-note">{t('ui.YouAnsweredAll10SituationsCorrectly')}</p>}</div>
      </div>
    </div>
    <section className="answer-review" aria-labelledby="review-title"><div className="review-heading"><h2 id="review-title" ref={reviewRef} tabIndex={-1}>{showAll ? t('ui.AllResults') : t('ui.QuestionsToRevisit')} <span>{visible.length}</span></h2><p>{t('ui.ReviewYourChoicesRememberTheRight')}</p></div>
      {visible.length === 0 && <p className="review-empty">{t('ui.ThereAreNoQuestionsToRevisit')}</p>}
      <div className="review-list">{visible.map(({ q, i }) => <article className="review-row" key={q.id}><span className="review-number">{String(i + 1).padStart(2, '0')}</span><div className="review-content"><p className="review-category">{q.category}{showAll && isCorrect(i) && <span> {t('ui.Correct79')}</span>}</p><h3>{q.question}</h3><div className="review-answers"><p className={isCorrect(i) ? 'review-selected is-correct' : 'review-selected'}><span>{t('ui.YourChoice')}</span>{responses[i] ? <>{'ABCD'[responses[i].selected]}. {q.answers[responses[i].selected]}</> : t('ui.NoAnswerConfirmed')}</p><p className="review-correct"><span>{t('ui.CorrectAnswer82')}</span>{'ABCD'[q.correct]}. {q.answers[q.correct]}</p></div><details><summary>{t('ui.ViewExplanation')}<ChevronDown size={16} aria-hidden="true" /></summary><div className="review-explanation"><p>{q.explanation}</p><a className="source-link" href={q.source} target="_blank" rel="noreferrer">{t('ui.RedCrossReference')}</a></div></details></div></article>)}</div>
      <button className="text-button review-toggle" aria-pressed={showAll} onClick={() => setShowAll(value => !value)}>{showAll ? t('ui.ShowOnlyQuestionsToRevisit') : t('ui.ViewAllResults')}<ArrowRight size={16} aria-hidden="true" /></button>
    </section>
    <section className="result-next"><div><p className="section-label">{t('ui.NextSteps')}</p><h2>{t('ui.WantMoreConfidenceInAReal')}</h2><p>{t('ui.HandsOnPracticeHelpsTurnKnowledge')}</p></div><div className="result-next-actions"><a className="button-primary" href="../#programs" onClick={onCourse}>{t('ui.ExploreFirstAidCourses')}<ArrowRight size={17} aria-hidden="true" /></a><button className="text-button" onClick={onRestart}><RotateCcw size={16} aria-hidden="true" />{t('ui.TryTheChallengeAgain')}</button></div></section>
    <p className="result-note">{t('ui.KnowledgeReviewDoesNotReplaceHands')}</p>
  </section>;
}
