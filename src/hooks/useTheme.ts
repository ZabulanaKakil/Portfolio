import { useCallback, useEffect, useState } from 'react'

const THEME_STORAGE_KEY = 'portfolio-theme'
const COLOR_THEME_STORAGE_KEY = 'portfolio-color-theme'

export type Theme = 'light' | 'dark'
export type ColorTheme = 'google' | 'army' | 'tech' | 'youtube'

export const colorThemeOptions: { id: ColorTheme; label: string; swatch: string[] }[] = [
  { id: 'google', label: 'Google', swatch: ['#4285f4', '#ea4335', '#fbbc05', '#34a853'] },
  { id: 'army', label: 'Army', swatch: ['#6b7c3f', '#c4a574', '#3d4a2a', '#8b6914'] },
  { id: 'tech', label: 'Tech', swatch: ['#06b6d4', '#a855f7', '#22c55e', '#eab308'] },
  { id: 'youtube', label: 'YouTube', swatch: ['#ff0000', '#282828', '#ffffff', '#606060'] },
]

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getStoredTheme(): Theme | null {
  const stored = localStorage.getItem(THEME_STORAGE_KEY)
  return stored === 'dark' || stored === 'light' ? stored : null
}

function getStoredColorTheme(): ColorTheme | null {
  const stored = localStorage.getItem(COLOR_THEME_STORAGE_KEY)
  if (stored === 'google' || stored === 'army' || stored === 'tech' || stored === 'youtube') {
    return stored
  }
  return null
}

function themeColorMeta(theme: Theme, colorTheme: ColorTheme): string {
  if (colorTheme === 'youtube') {
    return theme === 'dark' ? '#0f0f0f' : '#ffffff'
  }
  if (colorTheme === 'army') {
    return theme === 'dark' ? '#1a1f14' : '#f5f0e6'
  }
  if (colorTheme === 'tech') {
    return theme === 'dark' ? '#0f172a' : '#f1f5f9'
  }
  return theme === 'dark' ? '#0f1117' : '#f4f6fb'
}

export function applyTheme(theme: Theme, colorTheme: ColorTheme) {
  document.documentElement.setAttribute('data-theme', theme)
  document.documentElement.setAttribute('data-color-theme', colorTheme)
  document.documentElement.classList.toggle('dark', theme === 'dark')
  const meta = document.querySelector('meta[name="theme-color"]:not([media])')
  if (meta) {
    meta.setAttribute('content', themeColorMeta(theme, colorTheme))
  }
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => getStoredTheme() ?? getSystemTheme())
  const [colorTheme, setColorThemeState] = useState<ColorTheme>(
    () => getStoredColorTheme() ?? 'google',
  )

  useEffect(() => {
    applyTheme(theme, colorTheme)
  }, [theme, colorTheme])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      if (!getStoredTheme()) {
        setThemeState(getSystemTheme())
      }
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const setTheme = useCallback((next: Theme) => {
    localStorage.setItem(THEME_STORAGE_KEY, next)
    setThemeState(next)
  }, [])

  const setColorTheme = useCallback((next: ColorTheme) => {
    localStorage.setItem(COLOR_THEME_STORAGE_KEY, next)
    setColorThemeState(next)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  return { theme, colorTheme, setTheme, setColorTheme, toggleTheme }
}
