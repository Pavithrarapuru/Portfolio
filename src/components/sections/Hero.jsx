import { ArrowUpRight, ChevronDown, Mail, Sparkles, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import profile from '../../data/profile'
import NeomorphicButton from '../common/NeomorphicButton'
import { SakuraBranch } from '../common/SakuraDecoration'

const HERO_EASE = [0.22, 1, 0.36, 1]

// Staggered variants for left text content column (slowed down for elegant unhurried reveal)
const leftContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: HERO_EASE },
  },
}

const headingLineVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: HERO_EASE },
  },
}

// Right column variants for profile photo assembly and tactile floating cards
const profileAssemblyVariants = {
  hidden: { opacity: 0, x: 55, y: 15 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1.1, delay: 0.4, ease: HERO_EASE },
  },
}

const mindsetBadgeVariants = {
  hidden: { opacity: 0, x: 30, y: -25 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, delay: 1.15, ease: HERO_EASE },
  },
}

const approachBadgeVariants = {
  hidden: { opacity: 0, x: -30, y: 25 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, delay: 1.35, ease: HERO_EASE },
  },
}

function Hero({ onNavigate }) {
  const { hero } = profile

  return (
    <section id="home" data-label="Home" className="relative mx-auto grid min-h-[660px] max-w-[1140px] grid-cols-[1fr_.85fr] items-center gap-[50px] overflow-hidden px-6 pb-[120px] pt-[110px] max-tablet:min-h-0 max-tablet:grid-cols-1 max-tablet:gap-[40px] max-tablet:px-4 max-tablet:pt-[90px]">
      <SakuraBranch />

      {/* Left Column Staggered Content Container */}
      <motion.div
        className="relative z-10"
        initial="hidden"
        animate="visible"
        variants={leftContainerVariants}
      >
        {/* 1. Availability / Status Pill */}
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-accent font-semibold">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_rgba(79,110,247,0.6)] animate-pulse" /> {hero.availability}
          </span>
        </motion.div>

        {/* 2. Line-by-Line Main Heading */}
        <h1 className="my-6 max-w-[680px] text-[clamp(3.1rem,6.5vw,6.2rem)] font-bold leading-[1.02] tracking-tight text-ink">
          <motion.span variants={headingLineVariants} className="block">
            {hero.titleBefore}
            <em className="font-serif font-normal italic text-accent px-1">{hero.titleEmphasis}</em>
          </motion.span>
          <motion.span variants={headingLineVariants} className="block mt-1">
            {hero.titleAfter}
          </motion.span>
        </h1>

        {/* 3. Description Paragraph */}
        <motion.p variants={itemVariants} className="max-w-[480px] text-[16px] text-muted leading-relaxed">
          {hero.description}
        </motion.p>

        {/* 4. Sequential CTA Buttons */}
        <motion.div variants={itemVariants} className="mt-[34px] flex gap-4 max-small:flex-col max-small:items-stretch">
          <NeomorphicButton onClick={() => onNavigate('Projects')}>
            View my work <ArrowUpRight size={17} />
          </NeomorphicButton>
          <NeomorphicButton variant="quiet" onClick={() => onNavigate('Contact')}>
            Let&apos;s connect <Mail size={17} />
          </NeomorphicButton>
        </motion.div>

        {/* 5. Status & Location Footer */}
        <motion.div variants={itemVariants} className="mt-[48px] flex items-center gap-6 font-mono text-[11px] uppercase tracking-wider text-faint max-small:flex-col max-small:items-start max-small:gap-2">
          <span className="inline-flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
            {hero.status}
          </span>
          <span className="text-muted/60">•</span>
          <span>{hero.location}</span>
        </motion.div>
      </motion.div>

      {/* Right Column Profile Assembly Container */}
      <motion.div
        className="relative z-10 flex items-center justify-center max-tablet:mx-auto max-tablet:mt-4 max-tablet:w-full max-tablet:max-w-[440px]"
        initial="hidden"
        animate="visible"
        variants={profileAssemblyVariants}
      >
        {/* Static Neomorphic Profile Picture Assembly */}
        <div className="group relative flex size-[370px] items-center justify-center rounded-full bg-surface shadow-raised-lg max-tablet:size-[310px] max-small:size-[270px]">
          <div className="neo-inset-deep flex size-[320px] items-center justify-center overflow-hidden rounded-full p-3 max-tablet:size-[265px] max-small:size-[230px]">
            <img
              className="size-full rounded-full object-cover object-center shadow-raised-sm"
              src={hero.image}
              alt="Pavithra profile"
            />
          </div>
        </div>

        {/* Floating Mindset Badge (Upper Right) */}
        <motion.div
          className="absolute right-[-10px] top-[-10px] flex items-center gap-3 rounded-md bg-surface px-4 py-3 shadow-raised-sm neo-transition hover:shadow-raised max-tablet:right-[0px] max-tablet:top-[-8px]"
          initial="hidden"
          animate="visible"
          variants={mindsetBadgeVariants}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2, ease: HERO_EASE }}
        >
          <div className="neo-inset grid size-8 place-items-center rounded-sm text-accent">
            <Sparkles size={16} />
          </div>
          <div className="text-[11px] leading-tight">
            <span className="text-muted font-mono block text-[9px] uppercase tracking-wider">Mindset</span>
            <strong className="text-ink font-semibold">Curious by Nature</strong>
          </div>
        </motion.div>

        {/* Floating Approach Badge (Lower Left) */}
        <motion.div
          className="absolute bottom-[-15px] left-[-15px] flex items-center gap-3 rounded-md bg-surface px-4 py-3 shadow-raised-sm neo-transition hover:shadow-raised max-tablet:bottom-[-10px] max-tablet:left-[0px]"
          initial="hidden"
          animate="visible"
          variants={approachBadgeVariants}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2, ease: HERO_EASE }}
        >
          <div className="neo-inset grid size-8 place-items-center rounded-sm text-accent">
            <Target size={16} />
          </div>
          <div className="text-[11px] leading-tight">
            <span className="text-muted font-mono block text-[9px] uppercase tracking-wider">Approach</span>
            <strong className="text-ink font-semibold">Precise with Practice</strong>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-faint max-tablet:hidden"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.7, ease: HERO_EASE }}
      >
        <ChevronDown className="animate-bounce text-accent" size={16} />
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  )
}

export default Hero
