import { useState } from 'react'
import { motion, useMotionValueEvent } from 'framer-motion'
import Reveal from '../common/Reveal'

function TimelineItem({
  experience,
  index,
  total = 4,
  smoothProgress,
}) {
  const {
    number,
    year,
    role,
    company,
    description,
    tags,
  } = experience

  const isOdd = index % 2 !== 0
  const [isActive, setIsActive] = useState(false)

  // Calculate activation threshold for each timeline item
  const activationThreshold =
    total > 1 ? (index / (total - 1)) * 0.85 : 0

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
            : 'col-start-1 row-start-1 pr-8 text-right max-tablet:col-start-2 max-tablet:row-start-1 max-tablet:pl-4 max-tablet:text-left'
        }`}
      >
        <motion.span
          className={`neo-transition inline-flex items-center rounded-sm bg-surface px-3 py-1 font-mono text-[10px] font-bold tracking-wider uppercase text-accent shadow-raised-sm ${
            isActive
              ? 'border border-accent/40 shadow-[0_0_12px_rgba(79,110,247,0.3)]'
              : ''
          }`}
          animate={{
            scale: isActive ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {year}
        </motion.span>
      </div>

      {/* Timeline Node */}
      <div className="relative z-10 mx-auto mt-1 grid size-6 place-items-center max-tablet:col-start-1 max-tablet:row-start-1 max-tablet:mx-0">
        {isActive && (
          <span className="pointer-events-none absolute size-9 animate-ping rounded-full bg-accent/25" />
        )}

        <motion.div
          className={`relative z-10 grid size-6 place-items-center rounded-full bg-surface neo-transition ${
            isActive
              ? 'border border-accent/60 shadow-[0_0_14px_rgba(79,110,247,0.6)]'
              : 'shadow-raised-sm'
          }`}
          animate={{
            scale: isActive ? 1.25 : 1,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div
            className={`size-2.5 rounded-full transition-all duration-300 ${
              isActive
                ? 'scale-110 bg-accent shadow-[0_0_8px_rgba(79,110,247,0.8)]'
                : 'neo-inset-sm bg-accent/70'
            }`}
          />
        </motion.div>
      </div>

      {/* Experience Card */}
      <motion.article
        className={`group neo-transition overflow-hidden rounded-lg bg-surface p-6 shadow-raised transition-all duration-300 ${
          isOdd
            ? 'col-start-1 row-start-1 mr-6 text-right max-tablet:col-start-2 max-tablet:row-start-2 max-tablet:ml-4 max-tablet:mr-0 max-tablet:text-left'
            : 'col-start-3 row-start-1 ml-6 max-tablet:col-start-2 max-tablet:row-start-2 max-tablet:ml-4'
        } ${
          isActive
            ? '-translate-y-1 border border-accent/35 shadow-[0_4px_20px_rgba(79,110,247,0.18)]'
            : 'hover:shadow-raised-hover'
        }`}
        whileHover={{ y: -3 }}
        transition={{
          duration: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div
          className={`mb-2 flex items-center gap-2 ${
            isOdd
              ? 'justify-end max-tablet:justify-start'
              : 'justify-start'
          }`}
        >
          {/* Career Progression Number */}
          <span className="font-mono text-[10px] font-semibold tracking-wider text-accent uppercase">
            {number}
          </span>

          <span className="text-muted/50">•</span>

          <span className="font-mono text-[10px] font-semibold tracking-wider text-accent uppercase">
            {company}
          </span>
        </div>

        <h3 className="my-1.5 text-[18px] font-bold tracking-tight text-ink transition-colors duration-200 group-hover:text-accent">
          {role}
        </h3>

        <p className="mb-4 text-[13px] leading-relaxed text-muted">
          {description}
        </p>

        {/* Tech Chips */}
        <div
          className={`flex flex-wrap gap-2 ${
            isOdd
              ? 'justify-end max-tablet:justify-start'
              : 'justify-start'
          }`}
        >
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