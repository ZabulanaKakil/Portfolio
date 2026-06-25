import { useCallback, useMemo, useState } from 'react'
import {
  journeyCategoryLabels,
  journeyCategoryOrder,
  portfolio,
  type JourneyCategory,
  type JourneyEvent,
  type DetailContent,
} from '../data/portfolio'
import { SectionWrapper } from '../components/SectionWrapper'
import { DetailModal } from '../components/DetailModal'
import { Card3D } from '../components/Card3D'
import { scrollToSection } from '../hooks/useActiveSection'

const badgeClass: Record<JourneyCategory, string> = {
  life: 'journey-badge--life',
  education: 'journey-badge--education',
  achievement: 'journey-badge--achievement',
  job: 'journey-badge--job',
  other: 'journey-badge--other',
}

const cardClass: Record<JourneyCategory, string> = {
  life: 'journey-card--life',
  education: 'journey-card--education',
  achievement: 'journey-card--achievement',
  job: 'journey-card--job',
  other: 'journey-card--other',
}

const detailHighlightClass: Record<JourneyCategory, string> = {
  life: 'journey-detail-highlight--life',
  education: 'journey-detail-highlight--education',
  achievement: 'journey-detail-highlight--achievement',
  job: 'journey-detail-highlight--job',
  other: 'journey-detail-highlight--other',
}

function JourneyDetailText({
  spans,
  category,
}: {
  spans: DetailContent
  category: JourneyCategory
}) {
  return (
    <p className="journey-detail-text">
      {spans.map((span, index) =>
        span.highlight ? (
          <span
            key={`${span.text}-${index}`}
            className={`journey-detail-highlight ${detailHighlightClass[category]}`}
          >
            {span.text}
          </span>
        ) : (
          <span key={`${span.text}-${index}`}>{span.text}</span>
        ),
      )}
    </p>
  )
}

export function JourneySection() {
  const [selected, setSelected] = useState<JourneyEvent | null>(null)
  const [activeFilters, setActiveFilters] = useState<Set<JourneyCategory>>(() => new Set())

  const toggleFilter = useCallback((category: JourneyCategory) => {
    setActiveFilters((prev) => {
      const next = new Set(prev)
      if (next.has(category)) {
        next.delete(category)
      } else {
        next.add(category)
      }
      return next
    })
    scrollToSection('journey')
  }, [])

  const filteredEvents = useMemo(() => {
    if (activeFilters.size === 0) {
      return portfolio.journey
    }
    return portfolio.journey.filter((event) => activeFilters.has(event.category))
  }, [activeFilters])

  const groupedByYear = useMemo(() => {
    const map = new Map<string, JourneyEvent[]>()
    for (const event of filteredEvents) {
      const list = map.get(event.year) ?? []
      list.push(event)
      map.set(event.year, list)
    }
    return Array.from(map.entries()).sort(([a], [b]) => Number(a) - Number(b))
  }, [filteredEvents])

  const legend = (
    <div
      className="journey-filter-row flex flex-wrap items-center justify-center gap-2"
      role="group"
      aria-labelledby="journey-filter-label"
    >
      <span id="journey-filter-label" className="journey-filter-label">
        Filter:
      </span>
      {journeyCategoryOrder.map((cat) => {
        const isActive = activeFilters.has(cat)
        return (
          <button
            key={cat}
            type="button"
            className={`journey-filter-btn journey-badge ${badgeClass[cat]}${isActive ? ' journey-badge--filter-active' : ''}`}
            aria-pressed={isActive}
            onClick={() => toggleFilter(cat)}
          >
            <span className="journey-badge-swatch" aria-hidden="true" />
            {journeyCategoryLabels[cat]}
          </button>
        )
      })}
    </div>
  )

  return (
    <SectionWrapper
      id="journey"
      title="Through the ages"
      subtitle="Tap any card for details. Use the category pills below to filter milestones — select one or more types; leave all unselected to show everything."
      legend={legend}
    >
      <div className="space-y-10">
        {groupedByYear.length === 0 ? (
          <p className="text-center text-[var(--text-muted)]">No milestones match the selected filters.</p>
        ) : (
          groupedByYear.map(([year, events]) => (
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
          ))
        )}
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
            {selected.detail ? (
              <JourneyDetailText spans={selected.detail} category={selected.category} />
            ) : (
              <p className="journey-detail-text">No additional details recorded for this milestone.</p>
            )}
          </>
        )}
      </DetailModal>
    </SectionWrapper>
  )
}
