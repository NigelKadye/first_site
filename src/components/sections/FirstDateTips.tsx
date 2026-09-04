import { ArrowLeft } from 'lucide-react'
import { craftGinData } from '../../data/craftGin'
import { firstDatesData } from '../../data/firstDates'

export default function FirstDateTips({ onNavigate }) {
  return (
    <section className="content-section">
      <div className="site-width section-shell">
        <button type="button" className="section-back" onClick={() => onNavigate('home')}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Home
        </button>
        <div className="section-heading">
          <p className="section-eyebrow">Lifestyle</p>
          <h2 className="section-title">First Date Gin Tips</h2>
          <p className="section-intro">Make a gin date welcoming, relaxed, and easy to enjoy whether one of you drinks or neither of you does.</p>
        </div>
        <section className="flat-section">
          <h3>{craftGinData.nonAlcoholicTitle}</h3>
          <div className="flat-list">
            {craftGinData.nonAlcoholicOptions.map((option, index) => (
              <div key={option} className="flat-list-item">
                <p className="section-eyebrow">Tip {index + 1}</p>
                <p className="stack-copy">{option}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="flat-section">
          <h3>{firstDatesData.tipsTitle}</h3>
          <div className="flat-list">
            {firstDatesData.tips.map((tip, index) => (
              <div key={tip.title} className="flat-list-item">
                <p className="section-eyebrow">Tip {index + 1}</p>
                <p className="stack-title">{tip.title}</p>
                <p className="stack-copy">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
