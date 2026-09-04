import { useState, useMemo } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import skills from '../../data/skills'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import SkillCard from '../skills/SkillCard'

function Skills() {
  const reduceMotion = useReducedMotion()

  // Extract unique categories and compute counts
  const { categories, categoryCounts } = useMemo(() => {
    const counts = { All: skills.length }
    const catList = []

    skills.forEach((skill) => {
      if (!counts[skill.category]) {
        counts[skill.category] = 0
        catList.push(skill.category)
      }
      counts[skill.category] += 1
    })

    return {
      categories: ['All', ...catList],
      categoryCounts: counts,
    }
  }, [])

  const [activeCategory, setActiveCategory] = useState('All')

  // Filter skills by selected category
  const filteredSkills = useMemo(() => {
    if (activeCategory === 'All') {
      return skills
    }
    return skills.filter((s) => s.category === activeCategory)
  }, [activeCategory])

  return (
    <section
      id="skills"
      data-label="Skills"
      className="mx-auto max-w-[1140px] px-6 py-16 max-tablet:px-4 max-tablet:py-12"
    >
      <Reveal>
        <SectionHeading
          eyebrow="The toolkit"
          title="Tools I reach for."
          copy="A growing set of technologies I use to move from a first sketch to something people can use."
        />
      </Reveal>

      {/* Category Navigation Bar */}
      <Reveal delay={0.1}>
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2.5 pt-1 text-sm max-w-full">
          {categories.map((cat) => {
            const isActive = activeCategory === cat
            const count = categoryCounts[cat]

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold transition-colors duration-200 focus-visible:outline-none ${
                  isActive
                    ? 'text-white font-bold'
                    : 'neo-inset-sm text-muted hover:text-ink hover:shadow-raised-sm'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 rounded-full bg-accent shadow-accent-raised"
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
                <span className="relative z-10 whitespace-nowrap">{cat}</span>
                <span
                  className={`relative z-10 rounded-full px-2 py-0.5 text-[10px] font-mono font-bold transition-colors ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'neo-inset text-faint'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </Reveal>

      {/* Filtered Skills Display Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-4 gap-3.5 max-tablet:grid-cols-3 max-small:grid-cols-1"
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={`${skill.name}-${skill.category}-${index}`}
              skill={skill}
              delay={reduceMotion ? 0 : Math.min(index * 0.025, 0.2)}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default Skills