import { motion } from 'framer-motion'
import { portfolio, personalSpecs } from '../data/portfolio'
import { SectionWrapper } from '../components/SectionWrapper'
import { GradientFallback } from '../components/GradientFallback'
import profileImg from '../assets/profilepic.png'

export function InfoSection() {
  return (
    <>
      <GradientFallback />
      <SectionWrapper id="info" title="" subtitle="">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card-glass hero-card w-full p-4 sm:p-6 md:p-10"
        >
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:text-center">
            <div className="profile-frame mx-auto h-40 w-40 shrink-0 md:mx-auto md:h-48 md:w-48">
              <img
                src={profileImg}
                alt="Tanvir Nahian Swapnil"
                className="profile-frame__image"
                loading="eager"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-[clamp(1.75rem,5vw,3rem)] font-bold leading-tight text-[var(--text)]">
                {portfolio.name}
              </h1>
              <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-google-blue">
                {portfolio.title}
              </p>
              <p className="mt-3 text-[clamp(1rem,2.5vw,1.25rem)] font-medium leading-snug text-[var(--text-muted)]">
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
            <table className="spec-table w-full min-w-[280px] text-sm">
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

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {portfolio.skillHighlights.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>

          <blockquote className="hero-quote mt-8 italic text-[var(--text-muted)]">
            <p className="text-sm leading-relaxed">&ldquo;{portfolio.quote.text}&rdquo;</p>
            <footer className="mt-2 text-xs not-italic">— {portfolio.quote.author}</footer>
          </blockquote>
        </motion.div>
      </SectionWrapper>
    </>
  )
}
