import { ArrowLeft } from 'lucide-react'
import { craftGinData } from '../../data/craftGin'

export default function CraftGin({ onNavigate }) {
  return (
    <section className="content-section">
      <div className="site-width section-shell">
        <button type="button" className="section-back" onClick={() => onNavigate('home')}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Home
        </button>
        <div className="section-heading">
          <p className="section-eyebrow">Lifestyle · First Date Gin Tips</p>
          <h2 className="section-title">{craftGinData.title}</h2>
          <p className="section-intro">{craftGinData.intro}</p>
        </div>

        <article className="guide-card craft-gin-callout">
          <h3>{craftGinData.nonAlcoholicTitle}</h3>
          <div className="guide-grid">
            {craftGinData.nonAlcoholicOptions.map((option) => (
              <div key={option} className="guide-item">
                <p className="stack-copy">{option}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="guide-card craft-gin-callout">
          <h3>{craftGinData.howToTitle}</h3>
          <div className="guide-grid">
            {craftGinData.steps.map((step, index) => (
              <div key={step.title} className="guide-item">
                <p className="section-eyebrow">Step {index + 1}</p>
                <p className="stack-title">{step.title}</p>
                <p className="stack-copy">{step.description}</p>
              </div>
            ))}
          </div>
        </article>

        <div className="craft-region-list">
          <div className="section-heading craft-subheading">
            <p className="section-eyebrow">Plan a visit</p>
            <h3 className="section-title">Gin schools, distilleries, and visitor leads</h3>
            <p className="section-intro">These are starting points for a craft-gin date. Availability, age limits, tours, and hands-on classes vary, so contact each venue before making a booking.</p>
          </div>
          {craftGinData.regions.map((region) => (
            <section key={region.title} className="craft-region">
              <div className="craft-region-heading">
                <h3>{region.title}</h3>
                <p className="subtle-copy">{region.intro}</p>
              </div>
              <div className="craft-location-grid">
                {region.locations.map((location) => (
                  <article key={location.name} className="craft-location">
                    <p className="stack-title">{location.name}</p>
                    <p className="micro-note">{location.place}</p>
                    <p className="stack-copy">{location.note}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
