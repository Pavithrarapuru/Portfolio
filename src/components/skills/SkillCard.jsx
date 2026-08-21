import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '../common/Reveal'

function SkillCard({ skill, delay }) {
  const { name, category, icon: Icon } = skill
  const reduceMotion = useReducedMotion()

  return (
    <Reveal delay={delay}>
      <motion.div
        className="group neo-transition flex items-center gap-4 rounded-md bg-surface p-4 shadow-raised-sm hover:shadow-raised active:neo-pressed"
        whileHover={reduceMotion ? undefined : { y: -2 }}
        whileTap={reduceMotion ? undefined : { scale: 0.985 }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="neo-inset grid size-11 shrink-0 place-items-center rounded-sm text-accent transition-transform duration-200 group-hover:scale-105">
          <Icon size={20} strokeWidth={1.8} />
        </div>
        <div className="grid gap-0.5">
          <strong className="text-[14px] font-bold text-ink group-hover:text-accent transition-colors duration-200">
            {name}
          </strong>
          <span className="neo-inset-sm w-fit rounded-sm px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-faint">
            {category}
          </span>
        </div>

        <ArrowUpRight className="ml-auto text-faint transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" size={16} />
      </motion.div>
    </Reveal>
  )
}

export default SkillCard



