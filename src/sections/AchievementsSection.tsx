import { Award } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { SectionWrapper } from '../components/SectionWrapper'
import { Card3D } from '../components/Card3D'

const categoryColors: Record<string, string> = {
  Honor: 'text-google-red bg-google-red/15',
  Service: 'text-google-blue bg-google-blue/15',
  'Military Course': 'text-google-green bg-google-green/15',
  Operations: 'text-google-yellow bg-google-yellow/15',
}

export function AchievementsSection() {
  return (
    <SectionWrapper
      id="achievements"
      title="Rewards & achievements"
      subtitle="Recognition earned through service, courses, and operational excellence."
    >
      <div className="achievements-grid">
        {portfolio.achievements.map((item, index) => (
          <Card3D
            key={item.title}
            as="article"
            className="card-glass flex flex-col overflow-hidden"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="flex h-32 items-center justify-center bg-gradient-to-br from-[var(--surface-elevated)] to-transparent">
              <Award size={40} className="text-google-yellow/70" />
            </div>
            <div className="achievement-card-body flex flex-1 flex-col p-6">
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColors[item.category] ?? 'bg-[var(--surface-elevated)] text-[var(--text-muted)]'}`}
              >
                {item.category}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-[var(--text)]">{item.title}</h3>
              <time className="mt-1 text-sm text-[var(--text-muted)]">{item.date}</time>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                {item.description}
              </p>
            </div>
          </Card3D>
        ))}
      </div>
    </SectionWrapper>
  )
}
