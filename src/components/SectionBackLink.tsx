import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function SectionBackLink({ href = '/', label = 'Back to Home' }) {
  return (
    <Link href={href} prefetch={false} className="section-back">
      <ArrowLeft size={16} aria-hidden="true" />
      {label}
    </Link>
  )
}
