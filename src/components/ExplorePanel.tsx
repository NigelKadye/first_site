import Link from 'next/link'
import { ArrowUpRight, ChevronDown } from 'lucide-react'

export default function ExplorePanel({ items }) {
  return (
    <aside className="explore-panel" aria-labelledby="explore-panel-title">
      <div className="explore-panel-heading">
        <div>
          <p className="section-eyebrow">Navigate by interest</p>
          <h2 id="explore-panel-title">Explore the guide</h2>
        </div>
        <span className="explore-panel-count">04</span>
      </div>
      <div className="explore-dropdowns">
        {items.map((item, index) => (
          <details key={item.href} className="explore-dropdown" open={index === 0}>
            <summary>
              <span className="explore-dropdown-number">0{index + 1}</span>
              <span className="explore-dropdown-title">{item.label}</span>
              <ChevronDown size={17} aria-hidden="true" />
            </summary>
            <div className="explore-dropdown-body">
              <p>{item.description}</p>
              <Link href={item.href} className="explore-all-link">
                Browse {item.label}
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
              {item.items?.length ? (
                <div className="explore-sub-links">
                  {item.items.map((subItem) => (
                    <Link key={subItem.href} href={subItem.href}>
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </details>
        ))}
      </div>
    </aside>
  )
}
