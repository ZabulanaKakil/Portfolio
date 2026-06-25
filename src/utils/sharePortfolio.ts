export const PORTFOLIO_CANONICAL_URL = 'https://zabulanakakil.github.io/Porfolio/'

export function getPortfolioShareUrl(): string {
  if (typeof window === 'undefined') return PORTFOLIO_CANONICAL_URL

  const { hostname, href } = window.location
  if (hostname === 'localhost' || hostname === '127.0.0.1') return href

  return PORTFOLIO_CANONICAL_URL
}

export function getPortfolioShareMessage(url = getPortfolioShareUrl()): string {
  return `Check out Capt Nahian (Retd)'s Portfolio at ${url}`
}

export interface ShareOption {
  id: string
  label: string
  href: string
  external?: boolean
}

export function getPortfolioShareOptions(url = getPortfolioShareUrl()): ShareOption[] {
  const message = getPortfolioShareMessage(url)
  const encodedMessage = encodeURIComponent(message)
  const encodedUrl = encodeURIComponent(url)
  const encodedSubject = encodeURIComponent("Capt Nahian (Retd)'s Portfolio")

  return [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      href: `https://api.whatsapp.com/send?text=${encodedMessage}`,
      external: true,
    },
    {
      id: 'facebook',
      label: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      external: true,
    },
    {
      id: 'twitter',
      label: 'X (Twitter)',
      href: `https://twitter.com/intent/tweet?text=${encodedMessage}`,
      external: true,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      external: true,
    },
    {
      id: 'email',
      label: 'Email',
      href: `mailto:?subject=${encodedSubject}&body=${encodedMessage}`,
    },
  ]
}

export function canUseNativeShare(): boolean {
  return typeof navigator !== 'undefined' && typeof navigator.share === 'function'
}

export async function sharePortfolioNatively(url = getPortfolioShareUrl()): Promise<boolean> {
  if (!canUseNativeShare()) return false

  const message = getPortfolioShareMessage(url)

  try {
    await navigator.share({
      title: "Capt Nahian (Retd)'s Portfolio",
      text: message,
      url,
    })
    return true
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') return true
    return false
  }
}
