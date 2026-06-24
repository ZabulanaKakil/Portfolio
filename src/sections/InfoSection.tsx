import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { portfolio, personalSpecs, type BioHighlight, type BioParagraph } from '../data/portfolio'

const bioHighlightClass: Record<BioHighlight, string> = {
  role: 'bio-highlight--role',
  service: 'bio-highlight--service',
  tech: 'bio-highlight--tech',
  value: 'bio-highlight--value',
  skill: 'bio-highlight--skill',
}
import { SectionWrapper } from '../components/SectionWrapper'
import { GradientFallback } from '../components/GradientFallback'
import profileImg from '../assets/profile.png'

function BioText({ spans, className }: { spans: BioParagraph; className?: string }) {
  return (
    <p className={className}>
      {spans.map((span, index) =>
        span.highlight ? (
          <span key={`${span.text}-${index}`} className={bioHighlightClass[span.highlight]}>
            {span.text}
          </span>
        ) : (
          <span key={`${span.text}-${index}`}>{span.text}</span>
        ),
      )}
    </p>
  )
}

export function InfoSection() {
  const [bioExpanded, setBioExpanded] = useState(false)

  return (
    <>
      <GradientFallback />
      <SectionWrapper id="info" title="" subtitle="">
        <div className="card-glass hero-card w-full p-4 sm:p-6 md:p-10">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:text-center">
            <div className="profile-frame mx-auto h-40 w-40 shrink-0 md:mx-auto md:h-48 md:w-48">
              <img
                src={profileImg}
                alt="Tanvir Nahian Swapnil"
                className="profile-frame__image"
                loading="eager"
              />
            </div>
            <div className="min-w-0 w-full">
              <h1 className="text-[clamp(1.75rem,5vw,3rem)] font-bold leading-tight text-theme">
                {portfolio.name}
              </h1>
              <hr className="hero-name-divider" aria-hidden="true" />
              <p className="hero-title-badge">{portfolio.title}</p>
              <p className="mt-3 text-[clamp(1rem,2.5vw,1.25rem)] font-medium leading-snug text-theme-muted">
                {portfolio.tagline}
              </p>
            </div>
          </div>

          <div className="hero-bio mt-8">
            <p className="hero-bio__salutation">{portfolio.salutation}</p>
            <BioText
              spans={portfolio.bioIntro}
              className="hero-bio__paragraph text-[clamp(0.95rem,2.5vw,1.05rem)] leading-relaxed text-theme-muted"
            />
            {bioExpanded && (
              <div className="hero-bio__expanded space-y-4">
                <BioText
                  spans={portfolio.bioTechnical}
                  className="hero-bio__paragraph text-[clamp(0.95rem,2.5vw,1.05rem)] leading-relaxed text-theme-muted"
                />
                <br></br>
                <BioText
                  spans={portfolio.bioClosing}
                  className="hero-bio__paragraph text-[clamp(0.95rem,2.5vw,1.05rem)] leading-relaxed text-theme-muted"
                />
              </div>
            )}

            <div className="hero-bio__toggle-wrap">
              <button
                type="button"
                className="hero-bio-toggle"
                onClick={() => setBioExpanded((expanded) => !expanded)}
                aria-expanded={bioExpanded}
                aria-label={bioExpanded ? 'Hide full bio' : 'Show full bio'}
              >
                {bioExpanded ? (
                  <ChevronUp aria-hidden="true" size={22} strokeWidth={2.25} />
                ) : (
                  <ChevronDown aria-hidden="true" size={22} strokeWidth={2.25} />
                )}
              </button>
            </div>
          </div>

          <div className="mt-8 overflow-x-auto rounded-xl border border-[var(--border)]">
            <table className="spec-table w-full min-w-[280px] text-sm">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--surface-elevated)]">
                  <th className="px-4 py-3 font-semibold text-theme">Specification</th>
                  <th className="px-4 py-3 font-semibold text-theme">Details</th>
                </tr>
              </thead>
              <tbody>
                {personalSpecs.map((row) => (
                  <tr key={row.label} className="border-b border-[var(--border)] last:border-0">
                    <td className="px-4 py-3 font-medium text-theme-muted">{row.label}</td>
                    <td className="px-4 py-3 text-theme">{row.value}</td>
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

          <blockquote className="hero-quote mt-8 italic text-theme-muted">
            <p className="text-sm leading-relaxed">&ldquo;{portfolio.quote.text}&rdquo;</p>
            <footer className="mt-2 text-xs not-italic">— {portfolio.quote.author}</footer>
          </blockquote>
        </div>
      </SectionWrapper>
    </>
  )
}
