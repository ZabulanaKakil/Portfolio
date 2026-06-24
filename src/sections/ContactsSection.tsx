import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Download,
  Globe,
  Link2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  User,
} from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { SectionWrapper } from '../components/SectionWrapper'

const iconMap: Record<string, typeof Mail> = {
  Email: Mail,
  WhatsApp: MessageCircle,
  Phone: Phone,
  'Alt. Phone': Phone,
  Facebook: Share2,
  Instagram: Globe,
  LinkedIn: Link2,
  GitHub: User,
  Discord: MessageCircle,
}

const colorMap: Record<string, string> = {
  Email: 'text-google-red',
  WhatsApp: 'text-google-green',
  Phone: 'text-google-blue',
  'Alt. Phone': 'text-google-blue',
  Facebook: 'text-google-blue',
  Instagram: 'text-google-red',
  LinkedIn: 'text-google-blue',
  GitHub: 'text-[var(--text)]',
  Discord: 'text-google-yellow',
}

export function ContactsSection() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = useCallback(async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(label)
      window.setTimeout(() => setCopied(null), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }, [])

  return (
    <SectionWrapper
      id="contacts"
      title="Where to find me"
      subtitle="Tap to open. Long-press or right-click to copy."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card-glass max-w-xl p-6 md:p-8"
      >
        <div className="mb-6 flex items-center gap-2 text-[var(--text-muted)]">
          <MapPin size={18} className="text-google-green" />
          <span>{portfolio.contacts.location}</span>
        </div>

        {copied && (
          <p className="mb-4 rounded-lg bg-google-green/15 px-3 py-2 text-sm text-google-green">
            Copied {copied} to clipboard
          </p>
        )}

        <ul className="space-y-2">
          {portfolio.contacts.links.map(({ label, href, copyValue, external }) => {
            const Icon = iconMap[label] ?? Link2
            return (
              <li key={label}>
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  onContextMenu={(e) => {
                    e.preventDefault()
                    void copyToClipboard(copyValue, label)
                  }}
                  onTouchStart={(e) => {
                    const target = e.currentTarget
                    const timer = window.setTimeout(() => {
                      void copyToClipboard(copyValue, label)
                    }, 500)
                    const clear = () => {
                      window.clearTimeout(timer)
                      target.removeEventListener('touchend', clear)
                      target.removeEventListener('touchmove', clear)
                    }
                    target.addEventListener('touchend', clear)
                    target.addEventListener('touchmove', clear)
                  }}
                  className="flex min-h-11 items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-[var(--surface-elevated)] active:bg-[var(--surface-elevated)]"
                >
                  <Icon size={20} className={colorMap[label] ?? 'text-[var(--text)]'} />
                  <span className="font-medium text-[var(--text)]">{label}</span>
                  <span className="ml-auto truncate text-sm text-[var(--text-muted)]">
                    {copyValue}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href={portfolio.contacts.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex min-h-11 items-center justify-center gap-2 rounded-lg bg-google-blue px-4 py-3 font-semibold text-white transition-opacity hover:opacity-90"
        >
          <Download size={18} />
          Download CV (PDF)
        </a>
      </motion.div>
    </SectionWrapper>
  )
}
