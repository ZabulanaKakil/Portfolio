import type { ReactNode } from 'react'
import type { SectionId } from '../data/portfolio'

const accentMap: Record<SectionId, { border: string; accent: string; glow: string }> = {
  info: {
    border: 'border-google-blue',
    accent: 'text-google-blue',
    glow: 'from-google-blue/20',
  },
  journey: {
    border: 'border-google-green',
    accent: 'text-google-green',
    glow: 'from-google-green/20',
  },
  skills: {
    border: 'border-google-yellow',
    accent: 'text-google-yellow',
    glow: 'from-google-yellow/20',
  },
  achievements: {
    border: 'border-google-red',
    accent: 'text-google-red',
    glow: 'from-google-red/20',
  },
  contacts: {
    border: 'border-google-blue',
    accent: 'text-google-blue',
    glow: 'from-google-blue/20',
  },
}

interface SectionWrapperProps {
  id: SectionId
  title?: string
  subtitle?: string
  legend?: ReactNode
  children: ReactNode
}

export function SectionWrapper({ id, title, subtitle, legend, children }: SectionWrapperProps) {
  const accent = accentMap[id]

  return (
    <section
      id={id}
      className={`section-anchor mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-20 ${accent.border} border-l-4 pl-5 md:pl-8`}
    >
      {(title || subtitle || legend) && (
        <header className="section-header-sticky mb-8 md:mb-10">
          <div
            className={`section-header-panel bg-gradient-to-r ${accent.glow} to-transparent`}
          >
            {title && (
              <h2
                className={`text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-[var(--text)] ${accent.accent}`}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 max-w-2xl text-[clamp(0.9rem,2.5vw,1.05rem)] leading-relaxed text-[var(--text-muted)]">
                {subtitle}
              </p>
            )}
            {legend && <div className="mt-4">{legend}</div>}
          </div>
        </header>
      )}
      {children}
    </section>
  )
}
