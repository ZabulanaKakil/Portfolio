import { useMemo, useState } from 'react'
import {
  journeyCategoryLabels,
  portfolio,
  type JourneyCategory,
  type JourneyEvent,
} from '../data/portfolio'
import { SectionWrapper } from '../components/SectionWrapper'
import { DetailModal } from '../components/DetailModal'
import { Card3D } from '../components/Card3D'

const badgeClass: Record<JourneyCategory, string> = {
  life: 'journey-badge--life',
  education: 'journey-badge--education',
  achievement: 'journey-badge--achievement',
  job: 'journey-badge--job',
}

const cardClass: Record<JourneyCategory, string> = {
  life: 'journey-card--life',
  education: 'journey-card--education',
  achievement: 'journey-card--achievement',
  job: 'journey-card--job',
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

  const legend = (
    <div className="flex flex-wrap justify-center gap-2">
      {(Object.keys(journeyCategoryLabels) as JourneyCategory[]).map((cat) => (
        <span key={cat} className={`journey-badge ${badgeClass[cat]}`}>
          <span className="journey-badge-swatch" aria-hidden="true" />
          {journeyCategoryLabels[cat]}
        </span>
      ))}
    </div>
  )

  return (
    <SectionWrapper
      id="journey"
      title="Through the ages"
      subtitle="Tap any card for details. Colors indicate life, education, achievements, and service milestones."
      legend={legend}
    >
      <div className="space-y-10">
        {groupedByYear.map(([year, events], groupIndex) => (
          <div key={year} className="journey-year-group">
            <div className="journey-year-header">
              <h3 className="journey-year-label">{year}</h3>
              <div className="journey-year-line" aria-hidden="true" />
            </div>
            <div className="journey-grid">
              {events.map((event, index) => (
                <Card3D
                  key={`${year}-${event.title}-${index}`}
                  onClick={() => setSelected(event)}
                  className={`card-glass journey-card ${cardClass[event.category]}`}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: groupIndex * 0.03 + index * 0.04, duration: 0.35 }}
                >
                  <span className={`journey-badge ${badgeClass[event.category]}`}>
                    <span className="journey-badge-swatch" aria-hidden="true" />
                    {journeyCategoryLabels[event.category]}
                  </span>
                  <span className="journey-card-title">{event.title}</span>
                  {event.detail && <span className="journey-card-hint">Tap for more</span>}
                </Card3D>
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
              <span className={`journey-badge ${badgeClass[selected.category]}`}>
                <span className="journey-badge-swatch" aria-hidden="true" />
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
