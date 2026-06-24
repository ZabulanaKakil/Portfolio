import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import type { Mesh } from 'three'
import type { SectionId } from '../data/portfolio'

const GOOGLE_COLORS = ['#4285F4', '#EA4335', '#FBBC05', '#34A853']

const sectionColorIndex: Record<SectionId, number> = {
  info: 0,
  journey: 3,
  skills: 2,
  achievements: 1,
  contacts: 0,
}

interface ShapeProps {
  position: [number, number, number]
  color: string
  geometry: 'box' | 'sphere' | 'torus' | 'octahedron'
  scale?: number
  speed?: number
}

function FloatingShape({ position, color, geometry, scale = 1, speed = 1 }: ShapeProps) {
  const ref = useRef<Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * 0.15 * speed
    ref.current.rotation.y = state.clock.elapsedTime * 0.2 * speed
  })

  return (
    <Float speed={1.5 * speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref} position={position} scale={scale}>
        {geometry === 'box' && <boxGeometry args={[1, 1, 1]} />}
        {geometry === 'sphere' && <icosahedronGeometry args={[0.6, 0]} />}
        {geometry === 'torus' && <torusGeometry args={[0.5, 0.18, 12, 24]} />}
        {geometry === 'octahedron' && <octahedronGeometry args={[0.55, 0]} />}
        <meshStandardMaterial color={color} roughness={0.35} metalness={0.15} transparent opacity={0.85} />
      </mesh>
    </Float>
  )
}

interface FloatingShapesProps {
  activeSection: SectionId
  isMobile: boolean
}

export function FloatingShapes({ activeSection, isMobile }: FloatingShapesProps) {
  const accent = GOOGLE_COLORS[sectionColorIndex[activeSection]]

  const shapes: ShapeProps[] = isMobile
    ? [
        { position: [-3, 1.5, -4], color: GOOGLE_COLORS[0], geometry: 'sphere', scale: 0.9 },
        { position: [3.5, -1, -5], color: GOOGLE_COLORS[1], geometry: 'box', scale: 0.7 },
        { position: [0, 2.5, -6], color: accent, geometry: 'octahedron', scale: 0.8 },
      ]
    : [
        { position: [-4, 2, -5], color: GOOGLE_COLORS[0], geometry: 'sphere', scale: 1.1 },
        { position: [4, -1.5, -6], color: GOOGLE_COLORS[1], geometry: 'torus', scale: 1 },
        { position: [-2, -2.5, -4], color: GOOGLE_COLORS[2], geometry: 'box', scale: 0.8 },
        { position: [2.5, 3, -7], color: GOOGLE_COLORS[3], geometry: 'octahedron', scale: 0.9 },
        { position: [0, 0, -8], color: accent, geometry: 'sphere', scale: 1.2, speed: 0.7 },
        { position: [-5, 0, -6], color: GOOGLE_COLORS[2], geometry: 'torus', scale: 0.7, speed: 1.2 },
      ]

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={0.8} />
      <pointLight position={[-5, -3, 2]} intensity={0.4} color={accent} />
      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} />
      ))}
    </>
  )
}
