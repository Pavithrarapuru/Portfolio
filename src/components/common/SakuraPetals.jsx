import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

function seededRandom(seed) {
  const x = Math.sin(seed * 9999 + 1) * 10000
  return x - Math.floor(x)
}

function generatePetalConfig(index, total, isMobile, vh) {
  const r1 = seededRandom(index * 13 + 1)
  const r2 = seededRandom(index * 17 + 3)
  const r3 = seededRandom(index * 23 + 7)
  const r4 = seededRandom(index * 31 + 11)
  const dir = index % 2 === 0 ? 1 : -1

  // Spread spawn positions smoothly across the ENTIRE top width (10% to 94%)
  const spawnX = isMobile
    ? 10 + r1 * 82 // 10% to 92% on mobile
    : 12 + r1 * 83 // 12% to 95% on desktop

  // Spawn Y: top branch / viewport level (-40px to 30px)
  const startY = -40 + (index % 6) * 14
  const endY = (vh || 900) + 90
  const distY = endY - startY

  // 5 Matched Y Keyframe Stages
  const yKeyframes = [
    startY,
    startY + distY * 0.25,
    startY + distY * 0.5,
    startY + distY * 0.75,
    endY,
  ]

  // Smooth wind sway keyframes tailored by initial spawn region
  const swayMagnitude = 30 + (index % 5) * 20
  const swayChoice = index % 4
  let xSway

  if (spawnX < 40) {
    // Spawning on left side: gently sways rightwards across page
    xSway = [0, swayMagnitude * 0.6, swayMagnitude * 1.1, swayMagnitude * 1.6, swayMagnitude * 2.1]
  } else if (spawnX > 65) {
    // Spawning on right side: gently sways leftwards towards center
    xSway = [0, -swayMagnitude * 0.6, -swayMagnitude * 1.2, -swayMagnitude * 1.7, -swayMagnitude * 2.2]
  } else if (swayChoice === 0) {
    // Center spawn: S-curve sway right -> left
    xSway = [0, swayMagnitude * dir, swayMagnitude * 0.2 * dir, -swayMagnitude * 0.8 * dir, -swayMagnitude * 0.4 * dir]
  } else {
    // Center spawn: S-curve sway left -> right
    xSway = [0, -swayMagnitude * dir, -swayMagnitude * 0.3 * dir, swayMagnitude * 0.7 * dir, swayMagnitude * 0.3 * dir]
  }

  const rotateKeyframes = [0, 85 * dir, 175 * dir, 265 * dir, 360 * dir]
  const maxOpacity = 0.6 + r3 * 0.35 // 0.6 to 0.95 (Vivid watercolor blue)
  const opacityKeyframes = [0, maxOpacity, maxOpacity, maxOpacity * 0.75, 0]

  // Scale & Dimensions
  const scale = 0.7 + r4 * 0.35
  const width = Math.round(10 + r3 * 6)
  const height = Math.round(14 + r4 * 8)

  const duration = 8.5 + (index % 8) * 1.05 // 8.5s to 15.85s
  // Negative initial delay so petals are distributed down the page immediately
  const delay = -((index % total) / total) * duration

  return {
    id: index,
    width,
    height,
    spawnX,
    yKeyframes,
    xSway,
    rotateKeyframes,
    opacityKeyframes,
    duration,
    delay,
    scale,
  }
}

/** Global Viewport-Wide Procedural Falling Petals Component */
export default function SakuraPetals() {
  const [isMobile, setIsMobile] = useState(false)
  const [viewportHeight, setViewportHeight] = useState(900)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setViewportHeight(window.innerHeight || 900)
    }
    handleResize()
    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const petalCount = isMobile ? 10 : 20

  const petals = useMemo(() => {
    return Array.from({ length: petalCount }, (_, i) =>
      generatePetalConfig(i, petalCount, isMobile, viewportHeight)
    )
  }, [petalCount, isMobile, viewportHeight])

  return (
    <div className="sakura-petal-container pointer-events-none fixed inset-0 z-0 overflow-hidden select-none" aria-hidden="true">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="pointer-events-none absolute flex items-center justify-center"
          style={{
            left: `${petal.spawnX}%`,
            top: 0,
            width: `${petal.width}px`,
            height: `${petal.height}px`,
          }}
          initial={{
            x: 0,
            y: petal.yKeyframes[0],
            rotate: 0,
            scale: petal.scale,
            opacity: 0,
          }}
          animate={{
            y: petal.yKeyframes,
            x: petal.xSway,
            rotate: petal.rotateKeyframes,
            opacity: petal.opacityKeyframes,
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          <span
            className="sakura-petal inline-block size-full"
            style={{
              borderRadius: '65% 35% 70% 30% / 55% 65% 35% 45%',
              background: 'linear-gradient(135deg, #6088ff 0%, #3b5edb 60%, #88abff 100%)',
              boxShadow: 'inset 1px 1px 2px rgba(255, 255, 255, 0.9), 0 2px 8px rgba(59, 94, 219, 0.45)',
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}
