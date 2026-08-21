import { useState } from 'react'
import { motion, useMotionValueEvent } from 'framer-motion'
import Reveal from '../common/Reveal'

function TimelineItem({ experience, index, total = 3, smoothProgress }) {
  const { year, role, company, description, tags } = experience
  const isOdd = index % 2 !== 0
  const [isActive, setIsActive] = useState(false)

  // Calculate dynamic activation threshold per item (e.g. index 0 = 0.0, index 1 = 0.45, index 2 = 0.85)
  const activationThreshold = total > 1 ? (index / (total - 1)) * 0.85 : 0

  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    setIsActive(latest >= activationThreshold)
  })

  return (
    <Reveal
      className="relative grid min-h-[220px] grid-cols-[1fr_40px_1fr] items-start pb-8 max-tablet:grid-cols-[30px_1fr] max-tablet:pb-8"
      delay={index * 0.1}
    >
      {/* Date Pill Badge */}
      <div
        className={`pt-1 ${
          isOdd
            ? 'col-start-3 row-start-1 pl-8 max-tablet:col-start-2 max-tablet:row-start-1 max-tablet:pl-4 max-tablet:text-left'
            : 'col-start-1 text-right pr-8 max-tablet:col-start-2 max-tablet:row-start-1 max-tablet:pl-4 max-tablet:text-left'
        }`}
      >
        <motion.span
          className={`neo-transition inline-flex items-center rounded-sm bg-surface px-3 py-1 font-mono text-[10px] font-bold tracking-wider uppercase text-accent shadow-raised-sm ${
            isActive ? 'shadow-[0_0_12px_rgba(79,110,247,0.3)] border border-accent/40' : ''
          }`}
          animate={{
            scale: isActive ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {year}
        </motion.span>
      </div>

      {/* Tactile Physical Node Checkpoint */}
      <div className="relative z-10 mx-auto mt-1 grid size-6 place-items-center max-tablet:col-start-1 max-tablet:row-start-1 max-tablet:mx-0">
        {/* Soft ripple pulse ring on activation */}
        {isActive && (
          <span className="absolute size-9 rounded-full bg-accent/25 animate-ping pointer-events-none" />
        )}

        <motion.div
          className={`relative z-10 grid size-6 place-items-center rounded-full bg-surface neo-transition ${
            isActive
              ? 'shadow-[0_0_14px_rgba(79,110,247,0.6)] border border-accent/60'
              : 'shadow-raised-sm'
          }`}
          animate={{
            scale: isActive ? 1.25 : 1,
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className={`size-2.5 rounded-full transition-all duration-300 ${
              isActive ? 'bg-accent shadow-[0_0_8px_rgba(79,110,247,0.8)] scale-110' : 'neo-inset-sm bg-accent/70'
            }`}
          />
        </motion.div>
      </div>

      {/* Experience Raised Card */}
      <motion.article
        className={`group neo-transition overflow-hidden rounded-lg bg-surface p-6 shadow-raised transition-all duration-300 ${
          isOdd
            ? 'col-start-1 row-start-1 mr-6 text-right max-tablet:col-start-2 max-tablet:row-start-2 max-tablet:ml-4 max-tablet:mr-0 max-tablet:text-left'
            : 'col-start-3 ml-6 max-tablet:col-start-2 max-tablet:row-start-2 max-tablet:ml-4'
        } ${
          isActive
            ? 'border border-accent/35 shadow-[0_4px_20px_rgba(79,110,247,0.18)] -translate-y-1'
            : 'hover:shadow-raised-hover'
        }`}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={`flex items-center gap-2 mb-2 ${isOdd ? 'justify-end max-tablet:justify-start' : 'justify-start'}`}>
          <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">0{index + 1}</span>
          <span className="text-muted/50">•</span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">{company}</span>
        </div>

        <h3 className="my-1.5 text-[18px] font-bold tracking-tight text-ink group-hover:text-accent transition-colors duration-200">{role}</h3>
        <p className="mb-4 text-[13px] leading-relaxed text-muted">{description}</p>

        {/* Tech Chips */}
        <div className={`flex flex-wrap gap-2 ${isOdd ? 'justify-end max-tablet:justify-start' : 'justify-start'}`}>
          {tags.map((tag) => (
            <span
              key={tag}
              className="neo-inset-sm neo-transition rounded-sm px-2.5 py-1 font-mono text-[10px] font-medium text-muted hover:-translate-y-0.5 hover:text-ink"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.article>
    </Reveal>
  )
}

export default TimelineItem
