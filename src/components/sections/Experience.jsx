import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import experiences from '../../data/experience'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import TimelineItem from '../experience/TimelineItem'

function Experience() {
  const containerRef = useRef(null)

  // Track scroll progress across the experience timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 30%'],
  })

  // Smooth out scroll progress using Framer Motion springs for 60fps fluidity
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 28,
    restDelta: 0.001,
  })

  // Vertical position for the moving light dot along the timeline (0% to 100%)
  const dotTopPercent = useTransform(smoothProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience" data-label="Experience" className="mx-auto max-w-[1140px] px-6 py-16 max-tablet:px-4 max-tablet:py-12">
      <Reveal>
        <SectionHeading
          eyebrow="The journey so far"
          title="Experience & growth."
          copy="A timeline for the chapters that have shaped the way I think, build, and keep learning."
        />
      </Reveal>

      <div ref={containerRef} className="relative mx-auto mt-12 max-w-[920px] max-tablet:ml-0 max-tablet:mt-8">
        {/* Layer 1: Base Carved Inset Timeline Groove */}
        <div className="neo-inset-deep absolute bottom-2 left-1/2 top-2 w-2.5 -translate-x-1/2 rounded-full max-tablet:left-[13px]" />

        {/* Layer 2: Animated Periwinkle Blue Progress Line Overlay */}
        <motion.div
          className="absolute bottom-2 left-1/2 top-2 w-2.5 -translate-x-1/2 origin-top rounded-full bg-gradient-to-b from-[#789bff] via-[#4f6ef7] to-[#6088ff] shadow-[0_0_10px_rgba(79,110,247,0.45)] max-tablet:left-[13px]"
          style={{ scaleY: smoothProgress }}
        />

        {/* Layer 3: Moving Blue Light Dot Indicator with Soft Energy Glow */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-2 z-20 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_rgba(79,110,247,0.9),0_0_20px_rgba(120,155,255,0.6)] max-tablet:left-[13px]"
          style={{ top: dotTopPercent }}
        >
          {/* Soft subtle pulse trail behind moving light dot */}
          <span className="absolute -inset-1 rounded-full bg-accent/40 blur-[2px] animate-pulse" />
        </motion.div>

        {experiences.map((experience, index) => (
          <TimelineItem
            key={experience.year}
            experience={experience}
            index={index}
            total={experiences.length}
            smoothProgress={smoothProgress}
          />
        ))}
      </div>
    </section>
  )
}

export default Experience
