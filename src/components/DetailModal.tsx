import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

interface DetailModalProps {
  title: string
  open: boolean
  onClose: () => void
  children: ReactNode
}

export function DetailModal({ title, open, onClose, children }: DetailModalProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="detail-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div className="card-glass relative z-10 max-h-[85vh] w-full max-w-lg overflow-y-auto p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-google-red/15 text-google-red transition-colors hover:bg-google-red/25"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <h3 id="detail-modal-title" className="pr-12 text-center text-xl font-bold text-[var(--text)]">
          {title}
        </h3>
        <div className="mt-4 text-center text-sm leading-relaxed text-[var(--text-muted)]">{children}</div>
      </div>
    </div>,
    document.body,
  )
}
