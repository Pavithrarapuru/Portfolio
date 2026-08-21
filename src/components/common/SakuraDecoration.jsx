import { motion, useReducedMotion } from 'framer-motion'
import branchImg from '../../assets/blossoms/screen.png'
import SakuraPetals from './SakuraPetals'

/** Static Sakura Branch Component (Rendered inside Hero) */
export function SakuraBranch() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="pointer-events-none absolute right-0 top-0 z-0 h-[280px] w-full max-w-[700px] overflow-hidden select-none" aria-hidden="true">
      <motion.img
        src={branchImg}
        alt=""
        className="pointer-events-none absolute -right-24 -top-20 w-[320px] max-w-none opacity-85 select-none sm:-right-24 sm:-top-22 sm:w-[460px] md:-right-20 md:-top-24 md:w-[580px] lg:-right-16 lg:-top-26 lg:w-[680px]"
        initial={reduceMotion ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 0.85, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Soft right-edge gradient mask to seamlessly dissolve abrupt branch ending */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-bg via-bg/80 to-transparent z-10" />
    </div>
  )
}


export { SakuraPetals }

export default function SakuraDecoration() {
  return <SakuraPetals />
}
