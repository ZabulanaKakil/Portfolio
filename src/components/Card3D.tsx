import { useCallback, useRef, type MouseEvent, type ReactNode } from 'react'

interface Card3DProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  as?: 'button' | 'article'
}

function tiltFromEvent(
  rect: DOMRect,
  clientX: number,
  clientY: number,
  maxTilt = 10,
): { rotateX: number; rotateY: number } {
  const x = (clientX - rect.left) / rect.width - 0.5
  const y = (clientY - rect.top) / rect.height - 0.5
  return {
    rotateY: x * maxTilt * 2,
    rotateX: -y * maxTilt * 2,
  }
}

export function Card3D({
  children,
  onClick,
  className = '',
  as = 'button',
}: Card3DProps) {
  const innerRef = useRef<HTMLDivElement>(null)
  const canTilt = typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches

  const resetTilt = useCallback(() => {
    const inner = innerRef.current
    if (!inner || !canTilt) return
    inner.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)'
  }, [canTilt])

  const applyTilt = useCallback(
    (clientX: number, clientY: number) => {
      if (!canTilt) return
      const inner = innerRef.current
      if (!inner) return
      const rect = inner.getBoundingClientRect()
      const { rotateX, rotateY } = tiltFromEvent(rect, clientX, clientY)
      inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`
    },
    [canTilt],
  )

  const onMouseMove = (e: MouseEvent) => {
    applyTilt(e.clientX, e.clientY)
  }

  const sharedProps = {
    className: 'card-3d',
    onMouseMove: canTilt ? onMouseMove : undefined,
    onMouseLeave: canTilt ? resetTilt : undefined,
  }

  const inner = (
    <div ref={innerRef} className={`card-3d-inner ${className}`}>
      {children}
    </div>
  )

  if (as === 'article') {
    return <article {...sharedProps}>{inner}</article>
  }

  return (
    <button type="button" onClick={onClick} {...sharedProps}>
      {inner}
    </button>
  )
}
