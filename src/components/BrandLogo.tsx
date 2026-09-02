import { Leaf, Martini } from 'lucide-react'

export default function BrandLogo({ compact = false }) {
  return (
    <span className={`brand-logo${compact ? ' brand-logo--compact' : ''}`} aria-label="Kadye & Gin Est2023">
      <span className="brand-logo-icons" aria-hidden="true">
        <Martini size={compact ? 16 : 19} strokeWidth={1.8} />
        <Leaf size={compact ? 14 : 17} strokeWidth={1.8} />
      </span>
      <span className="brand-logo-copy">
        <span className="brand-logo-name">Kadye &amp; Gin</span>
        <span className="brand-logo-est">Est2023</span>
      </span>
    </span>
  )
}
