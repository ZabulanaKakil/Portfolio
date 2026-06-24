import { useCallback, useRef, type MouseEvent, type ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'

type MotionExtras = Pick<
  HTMLMotionProps<'div'>,
  'initial' | 'whileInView' | 'viewport' | 'transition'
>

interface Card3DProps extends MotionExtras {
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
  initial,
  whileInView,
  viewport,
  transition,
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
    className: `card-3d ${className}`,
    onMouseMove: canTilt ? onMouseMove : undefined,
    onMouseLeave: canTilt ? resetTilt : undefined,
    initial,
    whileInView,
    viewport,
    transition,
  }

  const inner = <div ref={innerRef} className="card-3d-inner">{children}</div>

  if (as === 'article') {
    return <motion.article {...sharedProps}>{inner}</motion.article>
  }

  return (
    <motion.button type="button" onClick={onClick} {...sharedProps}>
      {inner}
    </motion.button>
  )
}
