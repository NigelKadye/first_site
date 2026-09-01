import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import SectionBackLink from './SectionBackLink'

export default function CategoryOverview({ group }) {
  return (
    <section className="content-section">
      <div className="site-width section-shell">
        <SectionBackLink href="/" label="Back to Home" />
        <div className="section-heading">
          <p className="section-eyebrow">Guide category</p>
          <h2 className="section-title">{group.title}</h2>
          <p className="section-intro">{group.description}</p>
        </div>
        <div className="guide-grid wide-grid">
          {group.items.map((item) => (
            <Link key={item.id} href={item.href} className="guide-item category-link">
              <span className="stack-title">{item.label}</span>
              <span className="subtle-copy">{item.description}</span>
              <span className="category-link-arrow">
                <ChevronRight size={18} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
