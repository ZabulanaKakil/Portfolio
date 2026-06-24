import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { portfolio, personalSpecs } from '../data/portfolio'
import { SectionWrapper } from '../components/SectionWrapper'
import { useReducedMotion } from '../hooks/useMedia'
import { GradientFallback } from '../components/GradientFallback'
import type { SectionId } from '../data/portfolio'
import heroImg from '../assets/hero.png'

const Scene3D = lazy(() =>
  import('../components/Scene3D').then((m) => ({ default: m.Scene3D })),
)

interface InfoSectionProps {
  activeSection: SectionId
  isMobile: boolean
}

export function InfoSection({ activeSection, isMobile }: InfoSectionProps) {
  const reducedMotion = useReducedMotion()

  return (
    <>
      {reducedMotion ? (
        <GradientFallback />
      ) : (
        <Suspense fallback={<GradientFallback />}>
          <Scene3D activeSection={activeSection} isMobile={isMobile} />
        </Suspense>
      )}
      <SectionWrapper id="info" title="" subtitle="">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card-glass max-w-4xl p-6 md:p-10"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-start">
            <img
              src={heroImg}
              alt={portfolio.name}
              className="mx-auto h-40 w-40 shrink-0 rounded-2xl border border-[var(--border)] object-cover object-top md:mx-0 md:h-48 md:w-48"
              loading="eager"
            />
            <div className="min-w-0 flex-1">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-google-blue">
                {portfolio.title}
              </p>
              <h1 className="text-[clamp(1.75rem,5vw,3rem)] font-bold leading-tight text-[var(--text)]">
                {portfolio.name}
              </h1>
              <p className="mt-3 text-[clamp(1rem,2.5vw,1.25rem)] font-medium text-[var(--text-muted)]">
                {portfolio.tagline}
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <p className="text-[clamp(0.95rem,2.5vw,1.05rem)] leading-relaxed text-[var(--text-muted)]">
              {portfolio.bio}
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">{portfolio.cvSummary}</p>
          </div>

          <div className="mt-8 overflow-x-auto rounded-xl border border-[var(--border)]">
            <table className="w-full min-w-[280px] text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--surface-elevated)]">
                  <th className="px-4 py-3 font-semibold text-[var(--text)]">Specification</th>
                  <th className="px-4 py-3 font-semibold text-[var(--text)]">Details</th>
                </tr>
              </thead>
              <tbody>
                {personalSpecs.map((row) => (
                  <tr key={row.label} className="border-b border-[var(--border)] last:border-0">
                    <td className="px-4 py-3 font-medium text-[var(--text-muted)]">{row.label}</td>
                    <td className="px-4 py-3 text-[var(--text)]">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {portfolio.skillHighlights.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>

          <blockquote className="mt-8 border-l-4 border-google-yellow pl-4 italic text-[var(--text-muted)]">
            <p className="text-sm leading-relaxed">&ldquo;{portfolio.quote.text}&rdquo;</p>
            <footer className="mt-2 text-xs not-italic">— {portfolio.quote.author}</footer>
          </blockquote>
        </motion.div>
      </SectionWrapper>
    </>
  )
}
