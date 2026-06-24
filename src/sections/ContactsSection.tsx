import { motion } from 'framer-motion'
import { GitBranch, Link2, Mail, MapPin } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { SectionWrapper } from '../components/SectionWrapper'

const socialLinks = [
  {
    label: 'Email',
    href: `mailto:${portfolio.contacts.email}`,
    icon: Mail,
    color: 'text-google-red',
  },
  {
    label: 'GitHub',
    href: portfolio.contacts.github,
    icon: GitBranch,
    color: 'text-[var(--text)]',
  },
  {
    label: 'LinkedIn',
    href: portfolio.contacts.linkedin,
    icon: Link2,
    color: 'text-google-blue',
  },
]

export function ContactsSection() {
  return (
    <SectionWrapper
      id="contacts"
      title="Contacts"
      subtitle="Reach out for mentorship, speaking engagements, or veteran community initiatives."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card-glass max-w-xl p-8"
      >
        <div className="mb-6 flex items-center gap-2 text-[var(--text-muted)]">
          <MapPin size={18} className="text-google-green" />
          <span>{portfolio.contacts.location}</span>
        </div>
        <ul className="space-y-3">
          {socialLinks.map(({ label, href, icon: Icon, color }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="flex min-h-11 items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-[var(--surface-elevated)]"
              >
                <Icon size={20} className={color} />
                <span className="font-medium text-[var(--text)]">{label}</span>
                <span className="ml-auto truncate text-sm text-[var(--text-muted)]">
                  {href.replace('mailto:', '').replace('https://', '')}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </SectionWrapper>
  )
}
