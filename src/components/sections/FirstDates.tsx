import { ArrowLeft } from 'lucide-react'
import { firstDatesData } from '../../data/firstDates'

export default function FirstDates({ onNavigate }) {
  return (
    <section className="content-section">
      <div className="site-width section-shell">
        <button type="button" className="section-back" onClick={() => onNavigate('home')}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Home
        </button>
        <div className="section-heading">
          <p className="section-eyebrow">Lifestyle</p>
          <h2 className="section-title">{firstDatesData.title}</h2>
          <p className="section-intro">{firstDatesData.intro}</p>
        </div>
        <div className="info-grid wide-grid">
          {firstDatesData.categories.map((category) => (
            <article key={category.title} className="info-card">
              <h3>{category.title}</h3>
              <p className="subtle-copy">{category.subtitle}</p>
              <div className="stack-list">
                {category.gins.map((gin) => (
                  <div key={gin.name} className="stack-row">
                    <p className="stack-title">{gin.name}</p>
                    <p className="stack-copy">{gin.why}</p>
                    <p className="micro-note">Order: {gin.order}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <article className="guide-card">
          <h3>{firstDatesData.tipsTitle}</h3>
          <div className="guide-grid">
            {firstDatesData.tips.map((tip) => (
              <div key={tip.title} className="guide-item">
                <p className="stack-title">{tip.title}</p>
                <p className="stack-copy">{tip.description}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
