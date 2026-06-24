import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolio'
import { SectionWrapper } from '../components/SectionWrapper'
import { useReducedMotion } from '../hooks/useMedia'
import { GradientFallback } from '../components/GradientFallback'
import type { SectionId } from '../data/portfolio'

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
          className="card-glass max-w-3xl p-8 md:p-10"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-google-blue">
            Portfolio
          </p>
          <h1 className="text-[clamp(2.25rem,6vw,3.75rem)] font-bold leading-tight text-[var(--text)]">
            {portfolio.name}
          </h1>
          <p className="mt-4 text-[clamp(1.1rem,3vw,1.5rem)] font-medium text-[var(--text-muted)]">
            {portfolio.tagline}
          </p>
          <p className="mt-6 text-[clamp(0.95rem,2.5vw,1.05rem)] leading-relaxed text-[var(--text-muted)]">
            {portfolio.bio}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {portfolio.skills.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  )
}
