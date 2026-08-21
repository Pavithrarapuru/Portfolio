import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import profile from '../../data/profile'
import { scrollToSection } from '../../utils/navigation'

function Footer() {
  const [showBackTop, setShowBackTop] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => setShowBackTop(window.scrollY > 350)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className="mx-auto flex max-w-[1140px] items-end justify-between px-6 pb-12 pt-16 max-tablet:flex-col max-tablet:items-start max-tablet:gap-6 max-tablet:px-4">
      <div>
        <button
          className="group inline-flex items-center gap-3 bg-transparent text-[15px] font-extrabold tracking-tight text-ink"
          onClick={() => scrollToSection('Home')}
        >
          <span className="grid size-9 place-items-center rounded-sm bg-surface text-accent shadow-raised-sm transition-transform duration-200 group-hover:scale-105">
            <span className="font-serif text-xl italic font-bold">P</span>
          </span>
          <span className="text-[16px]">
            Pavithra<span className="text-accent">.</span>
          </span>
        </button>
        <p className="mt-3 font-mono text-[11px] text-faint">{profile.footer}</p>
      </div>

      <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-wider text-faint">
        <span>© 2026 Pavithra</span>
        <AnimatePresence initial={false}>
          {showBackTop && (
            <motion.button
              className="neo-transition grid size-10 place-items-center rounded-sm bg-surface text-accent shadow-raised-sm hover:shadow-raised active:neo-pressed"
              onClick={() => scrollToSection('Home')}
              aria-label="Back to top"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.8 }}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.94 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <ArrowUpRight className="-rotate-45" size={18} />
            </motion.button>
          )}

        </AnimatePresence>
      </div>
    </footer>
  )
}

export default Footer


