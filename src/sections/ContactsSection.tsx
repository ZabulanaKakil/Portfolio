import { useCallback, useState, type ComponentType } from 'react'
import {
  Copy,
  Download,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ExternalLink,
} from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { SectionWrapper } from '../components/SectionWrapper'

function FacebookIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function GitHubIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function LinkedInIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function DiscordIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  )
}

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  Email: Mail,
  WhatsApp: MessageCircle,
  Phone: Phone,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  Discord: DiscordIcon,
}

const colorMap: Record<string, string> = {
  Email: 'text-google-red',
  WhatsApp: 'text-google-green',
  Phone: 'text-google-blue',
  Facebook: 'text-google-blue',
  Instagram: 'text-google-red',
  LinkedIn: 'text-google-blue',
  GitHub: 'text-theme',
  Discord: 'text-[#5865F2]',
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
      subtitle="Tap a card to open your mail app, phone dialer, or website. Use the copy button to save details."
    >
      <div className="space-y-6">
        <div className="card-glass contacts-location-card flex w-full min-w-0 items-center justify-center gap-2 overflow-hidden p-3 sm:p-4 md:p-5">
          <MapPin size={20} className="shrink-0 text-google-green" />
          <span className="text-theme-muted">{portfolio.contacts.location}</span>
        </div>

        <a
          href={portfolio.contacts.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contacts-cv-download"
        >
          <Download size={18} aria-hidden="true" />
          Download CV (PDF)
        </a>

        {copied && (
          <p className="rounded-lg bg-google-green/15 px-3 py-2 text-center text-sm text-google-green">
            Copied {copied} to clipboard
          </p>
        )}

        <div className="contacts-grid">
          {portfolio.contacts.links.map((link) => {
            const { label, href, copyValue, external, numbers } = link
            const Icon = iconMap[label] ?? ExternalLink
            const isExternal = external ?? href.startsWith('http')

            if (numbers?.length) {
              return (
                <article key={label} className="card-glass contact-card contact-card--phones min-w-0 overflow-hidden">
                  <span className="contact-card-title block font-semibold text-theme">{label}</span>
                  <div className="contact-phone-list w-full min-w-0">
                    {numbers.map((entry) => (
                      <div key={entry.copyValue} className="contact-card-actions min-w-0">
                        <a href={entry.href} className="contact-card-link min-w-0 flex-1 overflow-hidden">
                          <span
                            className={`contact-icon-wrap ${colorMap[label] ?? 'text-theme'}`}
                          >
                            <Icon size={20} />
                          </span>
                          <span className="min-w-0 flex-1 overflow-hidden text-left">
                            <span className="block text-xs font-medium uppercase tracking-wide text-theme-muted">
                              {entry.label}
                            </span>
                            <span className="block truncate text-sm text-theme-muted">
                              {entry.copyValue}
                            </span>
                          </span>
                        </a>
                        <button
                          type="button"
                          onClick={() => void copyToClipboard(entry.copyValue, `${label} (${entry.label})`)}
                          className="contact-copy-btn shrink-0"
                          aria-label={`Copy ${entry.label} ${label}`}
                        >
                          <Copy size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                </article>
              )
            }

            return (
              <article key={label} className="card-glass contact-card min-w-0 overflow-hidden">
                <span className="block font-semibold text-theme">{label}</span>
                <div className="contact-card-actions min-w-0">
                  <a
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="contact-card-link min-w-0 flex-1 overflow-hidden"
                  >
                    <span
                      className={`contact-icon-wrap ${colorMap[label] ?? 'text-theme'}`}
                    >
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0 flex-1 overflow-hidden text-center">
                      <span className="block truncate text-sm text-theme-muted">{copyValue}</span>
                    </span>
                    {isExternal && (
                      <ExternalLink size={16} className="shrink-0 text-theme-muted" aria-hidden="true" />
                    )}
                  </a>
                  <button
                    type="button"
                    onClick={() => void copyToClipboard(copyValue, label)}
                    className="contact-copy-btn shrink-0"
                    aria-label={`Copy ${label}`}
                  >
                    <Copy size={18} />
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
