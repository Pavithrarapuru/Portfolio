import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '../common/Reveal'

function SkillCard({ skill, delay = 0 }) {
  const { name, category, subcategory, icon: Icon } = skill
  const reduceMotion = useReducedMotion()

  const badgeText = subcategory || category

  return (
    <Reveal delay={delay}>
      <motion.div
        className="group neo-transition flex items-center gap-3.5 rounded-md bg-surface p-4 shadow-raised-sm hover:shadow-raised active:neo-pressed h-full"
        whileHover={reduceMotion ? undefined : { y: -2 }}
        whileTap={reduceMotion ? undefined : { scale: 0.985 }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="neo-inset grid size-11 shrink-0 place-items-center rounded-sm text-accent transition-transform duration-200 group-hover:scale-105">
          {Icon && <Icon size={20} strokeWidth={1.8} />}
        </div>
        <div className="grid gap-0.5 min-w-0 flex-1">
          <strong className="text-[14px] font-bold text-ink group-hover:text-accent transition-colors duration-200 truncate">
            {name}
          </strong>
          {badgeText ? (
            <span className="neo-inset-sm w-fit rounded-sm px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-faint truncate max-w-full">
              {badgeText}
            </span>
          ) : null}
        </div>

        <ArrowUpRight className="ml-auto shrink-0 text-faint transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" size={16} />
      </motion.div>
    </Reveal>
  )
}

export default SkillCard
