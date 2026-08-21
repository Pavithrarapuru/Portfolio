import { motion, useReducedMotion } from 'framer-motion'

function NeomorphicButton({ children, variant = 'primary', onClick, type = 'button', className = '' }) {
  const reduceMotion = useReducedMotion()

  const variantStyles = variant === 'primary'
    ? 'bg-accent text-white shadow-[var(--shadow-accent-raised)] hover:bg-accent-dark active:shadow-[var(--shadow-accent-pressed)]'
    : 'bg-surface text-ink shadow-raised-sm hover:shadow-raised active:neo-pressed'

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`neo-transition inline-flex min-h-[46px] items-center justify-center gap-2.5 rounded-md px-5 text-[13px] font-bold tracking-tight ${variantStyles} ${className}`}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { y: 1, scale: 0.985 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.button>
  )
}

export default NeomorphicButton



