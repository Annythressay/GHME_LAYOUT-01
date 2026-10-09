export default function Situation({ question, index, imageBase }) {
  return <aside className="situation" aria-label={`Tình huống ${index + 1}`}>
    <div className="case-label"><span>Tình huống {String(index + 1).padStart(2, '0')}</span><span className="case-line" /></div>
    <figure className="case-visual"><img src={imageBase + question.image + '.webp'} alt={question.imageAlt} /><figcaption>Ảnh minh họa từ lớp thực hành sơ cứu.</figcaption></figure>
  </aside>;
}
