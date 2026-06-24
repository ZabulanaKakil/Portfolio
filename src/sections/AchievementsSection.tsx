import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { SectionWrapper } from '../components/SectionWrapper'

const categoryColors: Record<string, string> = {
  Honor: 'text-google-red bg-google-red/15',
  Leadership: 'text-google-blue bg-google-blue/15',
  Innovation: 'text-google-yellow bg-google-yellow/15',
  Community: 'text-google-green bg-google-green/15',
}

export function AchievementsSection() {
  return (
    <SectionWrapper
      id="achievements"
      title="Achievements"
      subtitle="Recognition earned through service, leadership, and commitment to excellence."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {portfolio.achievements.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: index * 0.1 }}
            className="card-glass flex flex-col p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-google-yellow/15 text-google-yellow">
                <Award size={20} />
              </div>
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColors[item.category] ?? 'bg-[var(--surface-elevated)] text-[var(--text-muted)]'}`}
              >
                {item.category}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[var(--text)]">{item.title}</h3>
            <time className="mt-1 text-sm text-[var(--text-muted)]">{item.date}</time>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
              {item.description}
            </p>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  )
}
