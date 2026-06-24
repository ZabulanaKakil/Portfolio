import { useState } from 'react'
import { Star } from 'lucide-react'
import { portfolio, type SkillItem } from '../data/portfolio'
import { SectionWrapper } from '../components/SectionWrapper'
import { DetailModal } from '../components/DetailModal'
import { Card3D } from '../components/Card3D'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center justify-center gap-0.5" aria-label={`Rating ${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < Math.floor(rating)
              ? 'fill-google-yellow text-google-yellow'
              : i < rating
                ? 'fill-google-yellow/50 text-google-yellow'
                : 'text-[var(--border)]'
          }
        />
      ))}
      <span className="ml-1 text-xs font-semibold text-[var(--text-muted)]">{rating.toFixed(1)}</span>
    </div>
  )
}

export function SkillsSection() {
  const [selected, setSelected] = useState<SkillItem | null>(null)

  return (
    <SectionWrapper
      id="skills"
      title="My skills"
      subtitle="Tap any card to read more. Star ratings reflect self-assessed proficiency."
    >
      <div className="space-y-10">
        {portfolio.skillCategories.map((group) => (
          <div key={group.category}>
            <h3 className="mb-4 text-center text-lg font-semibold text-[var(--text)]">{group.category}</h3>
            <div className="skills-grid">
              {group.items.map((item) => (
                <Card3D
                  key={item.name}
                  onClick={() => setSelected(item)}
                  className="card-glass skill-card min-h-11 gap-2 p-4"
                >
                  <span className="font-semibold text-[var(--text)]">{item.name}</span>
                  <StarRating rating={item.rating} />
                  <span className="mt-auto text-xs text-[var(--text-muted)]">Tap for details</span>
                </Card3D>
              ))}
            </div>
          </div>
        ))}
      </div>

      <DetailModal
        title={selected?.name ?? ''}
        open={selected !== null}
        onClose={() => setSelected(null)}
      >
        {selected && (
          <>
            <StarRating rating={selected.rating} />
            <p className="mt-4">{selected.detail}</p>
            {selected.tools && selected.tools.length > 0 && (
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                  Tools & technologies
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selected.tools.map((tool) => (
                    <span key={tool} className="skill-chip text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </DetailModal>
    </SectionWrapper>
  )
}
