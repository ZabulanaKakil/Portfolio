import type { ReactNode } from 'react'
import type { SectionId } from '../data/portfolio'

const accentMap: Record<SectionId, string> = {
  info: 'border-google-blue',
  journey: 'border-google-green',
  achievements: 'border-google-yellow',
  contacts: 'border-google-red',
}

interface SectionWrapperProps {
  id: SectionId
  title?: string
  subtitle?: string
  children: ReactNode
}

export function SectionWrapper({ id, title, subtitle, children }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`section-anchor mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24 ${accentMap[id]} border-l-4 pl-6 md:pl-8`}
    >
      {(title || subtitle) && (
        <header className="mb-10">
          {title && (
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-[var(--text)]">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-2 max-w-2xl text-[clamp(0.95rem,2.5vw,1.125rem)] text-[var(--text-muted)]">
              {subtitle}
            </p>
          )}
        </header>
      )}
      {children}
    </section>
  )
}
