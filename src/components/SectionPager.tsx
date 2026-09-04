import Link from 'next/link'
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react'

export default function SectionPager({ group, previousItem, nextItem }) {
  return (
    <section className="site-width section-gestures" aria-label="Section navigation">
      <div className="section-gestures-shell">
        <p className="section-eyebrow">Navigation</p>
        <div className="section-gesture-grid">
          {previousItem ? (
            <Link href={previousItem.href} prefetch={false} className="gesture-link">
              <ArrowLeft size={18} aria-hidden="true" />
              <span>
                <span className="gesture-label">Previous</span>
                <span className="gesture-title">{previousItem.label}</span>
              </span>
            </Link>
          ) : (
            <div className="gesture-link is-static">
              <ArrowLeft size={18} aria-hidden="true" />
              <span>
                <span className="gesture-label">Previous</span>
                <span className="gesture-title">Start of {group.title}</span>
              </span>
            </div>
          )}

          <Link href={group.href} prefetch={false} className="gesture-link gesture-link--center">
            <Compass size={18} aria-hidden="true" />
            <span>
              <span className="gesture-label">Browse</span>
              <span className="gesture-title">{group.title}</span>
            </span>
          </Link>

          {nextItem ? (
            <Link href={nextItem.href} prefetch={false} className="gesture-link gesture-link--next">
              <span>
                <span className="gesture-label">Next</span>
                <span className="gesture-title">{nextItem.label}</span>
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          ) : (
            <div className="gesture-link gesture-link--next is-static">
              <span>
                <span className="gesture-label">Next</span>
                <span className="gesture-title">End of {group.title}</span>
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
