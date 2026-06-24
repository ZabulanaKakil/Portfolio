import { sections, type SectionId } from '../data/portfolio'
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
          Capt Nahian
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
      <div className="fixed top-0 right-0 z-50 p-4 md:hidden">
        <ThemeToggle />
      </div>
      <nav
        className="fixed right-0 bottom-0 left-0 z-50 border-t border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-md md:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <ul className="flex items-stretch justify-around">
          {sections.map(({ id, label }) => (
            <li key={id} className="flex-1">
              <button
                type="button"
                onClick={() => scrollToSection(id)}
                aria-current={activeSection === id ? 'page' : undefined}
                className={`flex min-h-11 w-full flex-col items-center justify-center gap-0.5 px-2 py-2 text-xs font-medium transition-colors ${
                  activeSection === id
                    ? 'text-google-blue'
                    : 'text-[var(--text-muted)]'
                }`}
              >
                <span
                  className={`h-1 w-1 rounded-full ${
                    activeSection === id ? 'bg-google-blue' : 'bg-transparent'
                  }`}
                />
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
