import { useEffect, useRef, useState } from 'react'
import { Moon, MoonStar, Palette, Sun } from 'lucide-react'
import {
  colorThemeOptions,
  type ColorTheme,
  useTheme,
} from '../hooks/useTheme'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, colorTheme, setTheme, setColorTheme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node
      if (
        panelRef.current?.contains(target) ||
        buttonRef.current?.contains(target)
      ) {
        return
      }
      setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const selectColorTheme = (next: ColorTheme) => {
    setColorTheme(next)
  }

  return (
    <div className={`relative ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label="Open theme settings"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition-colors hover:bg-[var(--surface-elevated)]"
      >
        <Palette size={20} />
      </button>

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Theme settings"
          className="absolute top-[calc(100%+0.5rem)] right-0 z-[60] w-[min(calc(100vw-2rem),18rem)] rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-card)]"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
            Appearance
          </p>

          <div className="mb-4 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setTheme('light')}
              className={`flex min-h-11 items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition-colors ${
                theme === 'light'
                  ? 'border-google-blue bg-google-blue/15 text-google-blue'
                  : 'border-[var(--border)] text-[var(--text-muted)] hover:bg-[var(--surface-elevated)]'
              }`}
            >
              <Sun size={16} />
              Day
            </button>
            <button
              type="button"
              onClick={() => setTheme('dark')}
              className={`flex min-h-11 items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition-colors ${
                theme === 'dark'
                  ? 'border-google-blue bg-google-blue/15 text-google-blue'
                  : 'border-[var(--border)] text-[var(--text-muted)] hover:bg-[var(--surface-elevated)]'
              }`}
            >
              <Moon size={16} />
              Night
            </button>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="mb-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-[var(--border)] px-3 py-2 text-sm font-medium text-[var(--text)] transition-colors hover:bg-[var(--surface-elevated)]"
          >
            {theme === 'dark' ? <Sun size={16} /> : <MoonStar size={16} />}
            Quick toggle mode
          </button>

          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
            Color theme
          </p>
          <div className="grid grid-cols-2 gap-2">
            {colorThemeOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => selectColorTheme(option.id)}
                className={`flex min-h-11 flex-col items-start justify-center gap-1.5 rounded-xl border px-3 py-2 text-left transition-colors ${
                  colorTheme === option.id
                    ? 'border-google-blue bg-google-blue/10'
                    : 'border-[var(--border)] hover:bg-[var(--surface-elevated)]'
                }`}
              >
                <span className="flex gap-1">
                  {option.swatch.map((color) => (
                    <span
                      key={color}
                      className="h-3 w-3 rounded-full border border-[var(--border)]"
                      style={{ backgroundColor: color }}
                      aria-hidden="true"
                    />
                  ))}
                </span>
                <span className="text-sm font-medium text-[var(--text)]">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
