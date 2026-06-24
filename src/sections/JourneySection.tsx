import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolio'
import { SectionWrapper } from '../components/SectionWrapper'

export function JourneySection() {
  return (
    <SectionWrapper
      id="journey"
      title="Journey through the ages"
      subtitle="A timeline of service, leadership, and growth across decades of dedicated military career."
    >
      <div className="journey-scroll">
        {portfolio.journey.map((item, index) => (
          <motion.article
            key={item.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.08 }}
            className="card-glass relative p-6"
          >
            <span className="inline-block rounded-full bg-google-green/15 px-3 py-1 text-sm font-bold text-google-green">
              {item.year}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-[var(--text)]">{item.role}</h3>
            <p className="text-sm font-medium text-google-blue">{item.org}</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
              {item.description}
            </p>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  )
}
