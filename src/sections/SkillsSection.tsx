import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { portfolio, type SkillItem } from '../data/portfolio'
import { SectionWrapper } from '../components/SectionWrapper'
import { DetailModal } from '../components/DetailModal'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating ${rating} out of 5`}>
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
        {portfolio.skillCategories.map((group, groupIndex) => (
          <div key={group.category}>
            <h3 className="mb-4 text-lg font-semibold text-[var(--text)]">{group.category}</h3>
            <div className="skills-grid">
              {group.items.map((item, index) => (
                <motion.button
                  key={item.name}
                  type="button"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ delay: groupIndex * 0.05 + index * 0.04 }}
                  onClick={() => setSelected(item)}
                  className="card-glass flex min-h-11 flex-col gap-2 p-4 text-left transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="font-semibold text-[var(--text)]">{item.name}</span>
                  <StarRating rating={item.rating} />
                </motion.button>
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
          </>
        )}
      </DetailModal>
    </SectionWrapper>
  )
}
