import type { ReactNode } from 'react'
import type { SectionId } from '../data/portfolio'

const accentMap: Record<SectionId, { accent: string; glow: string; bar: string }> = {
  info: {
    accent: 'text-google-blue',
    glow: 'from-google-blue/20',
    bar: 'bg-google-blue',
  },
  journey: {
    accent: 'text-google-green',
    glow: 'from-google-green/20',
    bar: 'bg-google-green',
  },
  skills: {
    accent: 'text-google-yellow',
    glow: 'from-google-yellow/20',
    bar: 'bg-google-yellow',
  },
  achievements: {
    accent: 'text-google-red',
    glow: 'from-google-red/20',
    bar: 'bg-google-red',
  },
  contacts: {
    accent: 'text-google-blue',
    glow: 'from-google-blue/20',
    bar: 'bg-google-blue',
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
    <section id={id} className="section-anchor mx-auto w-full min-w-0 max-w-6xl px-4 py-8 sm:px-5 sm:py-10 md:px-6 md:py-20">
      {(title || subtitle || legend) && (
        <header className="section-header-sticky mb-6 md:mb-10">
          <div className={`section-header-panel bg-gradient-to-r ${accent.glow} to-transparent`}>
            {title && (
              <div className="flex flex-col items-center gap-2">
                <span className={`h-1 w-10 shrink-0 rounded-full ${accent.bar}`} aria-hidden="true" />
                <h2
                  className={`min-w-0 text-center text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-[var(--text)] ${accent.accent}`}
                >
                  {title}
                </h2>
              </div>
            )}
            {subtitle && (
              <p className="mt-2 max-w-none text-center text-[clamp(0.9rem,2.5vw,1.05rem)] leading-relaxed text-[var(--text-muted)]">
                {subtitle}
              </p>
            )}
            {legend && <div className="mt-4">{legend}</div>}
          </div>
        </header>
      )}
      <div className="section-content">{children}</div>
    </section>
  )
}
