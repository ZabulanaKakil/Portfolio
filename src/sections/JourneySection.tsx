import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  journeyCategoryLabels,
  portfolio,
  type JourneyCategory,
  type JourneyEvent,
} from '../data/portfolio'
import { SectionWrapper } from '../components/SectionWrapper'
import { DetailModal } from '../components/DetailModal'

const categoryStyles: Record<JourneyCategory, string> = {
  life: 'bg-google-red/20 text-google-red border-google-red/30',
  education: 'bg-google-blue/20 text-google-blue border-google-blue/30',
  achievement: 'bg-google-green/20 text-google-green border-google-green/30',
  job: 'bg-google-yellow/20 text-google-yellow border-google-yellow/30',
}

export function JourneySection() {
  const [selected, setSelected] = useState<JourneyEvent | null>(null)

  const groupedByYear = useMemo(() => {
    const map = new Map<string, JourneyEvent[]>()
    for (const event of portfolio.journey) {
      const list = map.get(event.year) ?? []
      list.push(event)
      map.set(event.year, list)
    }
    return Array.from(map.entries()).sort(([a], [b]) => Number(a) - Number(b))
  }, [])

  return (
    <SectionWrapper
      id="journey"
      title="Through the ages"
      subtitle="Tap any card for details. A color-coded timeline of life, education, achievements, and service."
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {(Object.keys(journeyCategoryLabels) as JourneyCategory[]).map((cat) => (
          <span
            key={cat}
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${categoryStyles[cat]}`}
          >
            {journeyCategoryLabels[cat]}
          </span>
        ))}
      </div>

      <div className="space-y-8">
        {groupedByYear.map(([year, events], groupIndex) => (
          <div key={year} className="journey-year-group">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-2xl font-bold text-[var(--text)]">{year}</span>
              <div className="h-px flex-1 bg-[var(--border)]" />
            </div>
            <div className="journey-grid">
              {events.map((event, index) => (
                <motion.button
                  key={`${year}-${event.title}-${index}`}
                  type="button"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: groupIndex * 0.03 + index * 0.04 }}
                  onClick={() => setSelected(event)}
                  className={`card-glass flex min-h-11 flex-col items-center justify-center border p-4 text-center transition-transform hover:scale-[1.02] active:scale-[0.98] ${categoryStyles[event.category]}`}
                >
                  <span className="text-xs font-semibold uppercase tracking-wide opacity-80">
                    {journeyCategoryLabels[event.category]}
                  </span>
                  <span className="mt-2 text-sm font-semibold leading-snug">{event.title}</span>
                  {event.detail && (
                    <span className="mt-1 line-clamp-2 text-xs opacity-75">Tap for more</span>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <DetailModal
        title={selected?.title ?? ''}
        open={selected !== null}
        onClose={() => setSelected(null)}
      >
        {selected && (
          <>
            <p className="mb-3">
              <span
                className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-semibold ${categoryStyles[selected.category]}`}
              >
                {journeyCategoryLabels[selected.category]} · {selected.year}
              </span>
            </p>
            <p>{selected.detail ?? 'No additional details recorded for this milestone.'}</p>
          </>
        )}
      </DetailModal>
    </SectionWrapper>
  )
}
