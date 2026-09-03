import GinList from '../GinList'
import { europeGins } from '../../data/gins'

import { ArrowLeft } from 'lucide-react'

function BackHomeButton({ onNavigate }) {
  return (
    <button type="button" className="section-back" onClick={() => onNavigate('home')}>
      <ArrowLeft size={16} aria-hidden="true" />
      Back to Home
    </button>
  )
}


export default function Europe({ onNavigate }) {
  return (
    <section className="content-section">
      <div className="site-width section-shell">
        <BackHomeButton onNavigate={onNavigate} />
        <div className="section-heading">
          <p className="section-eyebrow">Regional collection</p>
          <h2 className="section-title">{europeGins.title}</h2>
          <p className="section-intro">{europeGins.intro}</p>
        </div>
        <GinList regions={europeGins.regions} />
      </div>
    </section>
  )
}
