import { ArrowLeft } from 'lucide-react'
import GinList from '../GinList'
import { asianGins } from '../../data/gins'

export default function Asia({ onNavigate }) {
  return (
    <section className="content-section">
      <div className="site-width section-shell">
        <button type="button" className="section-back" onClick={() => onNavigate('home')}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Home
        </button>
        <div className="section-heading">
          <p className="section-eyebrow">Regional collection</p>
          <h2 className="section-title">{asianGins.title}</h2>
          <p className="section-intro">{asianGins.intro}</p>
        </div>
        <GinList regions={asianGins.regions} />
      </div>
    </section>
  )
}
