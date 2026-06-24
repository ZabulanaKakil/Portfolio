import { navShortName, sections, type SectionId } from '../data/portfolio'
import { scrollToSection } from '../hooks/useActiveSection'
import { ThemeToggle } from './ThemeToggle'

interface NavigationProps {
  activeSection: SectionId
}

export function DesktopNav({ activeSection }: NavigationProps) {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 hidden border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-md md:block">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <span className="text-sm font-semibold tracking-wide text-[var(--text)]">
          {navShortName}
        </span>
        <ul className="flex items-center gap-1">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => scrollToSection(id)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === id
                    ? 'bg-google-blue/15 text-google-blue'
                    : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  )
}

export function MobileNav({ activeSection }: NavigationProps) {
  return (
    <>
      <header
        aria-label="Site header"
        className="mobile-top-bar fixed top-0 right-0 left-0 z-[45] border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-md md:hidden"
      >
        <div className="mobile-top-bar__inner flex items-center justify-between gap-3 px-4">
          <span className="min-w-0 truncate text-sm font-semibold tracking-wide text-[var(--text)]">
            {navShortName}
          </span>
          <ThemeToggle className="shrink-0" compact />
        </div>
      </header>
      <nav
        aria-label="Section navigation"
        className="mobile-bottom-nav fixed right-0 bottom-0 left-0 z-40 border-t border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-md md:hidden"
      >
        <ul className="mobile-bottom-nav__list">
          {sections.map(({ id, label }) => (
            <li key={id} className="flex min-w-0 flex-1">
              <button
                type="button"
                onClick={() => scrollToSection(id)}
                aria-current={activeSection === id ? 'page' : undefined}
                className={`flex h-full w-full min-w-0 flex-col items-center justify-center gap-0.5 px-0.5 text-[10px] font-medium transition-colors sm:text-xs ${
                  activeSection === id
                    ? 'text-google-blue'
                    : 'text-[var(--text-muted)]'
                }`}
              >
                <span
                  className={`h-1 w-1 shrink-0 rounded-full ${
                    activeSection === id ? 'bg-google-blue' : 'bg-transparent'
                  }`}
                  aria-hidden="true"
                />
                <span className="truncate">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
