import { Suspense, useEffect, useMemo, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Vector3 } from 'three'
import { FloatingShapes } from './FloatingShapes'
import type { SectionId } from '../data/portfolio'
import { usePageVisibility } from '../hooks/useMedia'

const sectionCamera: Record<SectionId, [number, number, number]> = {
  info: [0, 0, 8],
  journey: [1.5, 0.5, 8],
  achievements: [-1, 1, 7.5],
  contacts: [0, -0.5, 8.5],
}

function CameraController({ activeSection }: { activeSection: SectionId }) {
  const { camera } = useThree()
  const target = useMemo(
    () => new Vector3(...sectionCamera[activeSection]),
    [activeSection],
  )

  useFrame((_, delta) => {
    camera.position.lerp(target, Math.min(delta * 2.5, 1))
    camera.lookAt(0, 0, 0)
  })

  return null
}

interface Scene3DProps {
  activeSection: SectionId
  isMobile: boolean
}

export function Scene3D({ activeSection, isMobile }: Scene3DProps) {
  const pageVisible = usePageVisibility()
  const [frameloop, setFrameloop] = useState<'always' | 'never'>('always')

  useEffect(() => {
    setFrameloop(pageVisible ? 'always' : 'never')
  }, [pageVisible])

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <Canvas
        frameloop={frameloop}
        camera={{ position: sectionCamera.info, fov: 50 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{ antialias: !isMobile, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <CameraController activeSection={activeSection} />
          <FloatingShapes activeSection={activeSection} isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  )
}
