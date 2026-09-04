import { ArrowLeft } from 'lucide-react'
import { craftGinData } from '../../data/craftGin'

export default function PlanVisit({ onNavigate }) {
  return (
    <section className="content-section">
      <div className="site-width section-shell">
        <button type="button" className="section-back" onClick={() => onNavigate('home')}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Home
        </button>
        <div className="section-heading">
          <p className="section-eyebrow">Regions</p>
          <h2 className="section-title">Plan a Visit</h2>
          <p className="section-intro">Find gin schools, distilleries, and visitor leads by region. Confirm opening hours, tour dates, age requirements, and hands-on workshop availability before you travel.</p>
        </div>
        <div className="flat-section-list">
          {craftGinData.regions.map((region) => (
            <section key={region.title} className="flat-section region-visit-section">
              <h3>{region.title}</h3>
              <p className="subtle-copy">{region.intro}</p>
              <ol className="visit-list">
                {region.locations.map((location) => (
                  <li key={location.name} className="visit-list-item">
                    <div>
                      <p className="stack-title">{location.name}</p>
                      <p className="micro-note">{location.place}</p>
                    </div>
                    <p className="stack-copy">{location.note}</p>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
