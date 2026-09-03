import { BriefcaseBusiness, GraduationCap, Heart } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import profile from '../../data/profile'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'

function About() {
  const { about } = profile
  const reduceMotion = useReducedMotion()

 const highlights = [
  {
    icon: GraduationCap,
    label: 'Curiosity',
    title: 'Exploring what AI can make possible',
  },
  {
    icon: BriefcaseBusiness,
    label: 'Approach',
    title: 'Think clearly. Solve deeply. Design to scale.',
  },
  {
    icon: Heart,
    label: 'Purpose',
    title: 'Building technology that feels useful',
  },
]

  return (
    <section id="about" data-label="About" className="mx-auto max-w-[1140px] px-6 py-16 max-tablet:px-4 max-tablet:py-12">
      <Reveal>
        <SectionHeading eyebrow={about.eyebrow} title={about.title} copy={about.copy} />
      </Reveal>

      <div className="grid grid-cols-[1.1fr_.9fr] items-center gap-16 max-tablet:grid-cols-1 max-tablet:gap-10">
        <Reveal className="max-w-[620px]" delay={0.08}>
          <p className="text-[24px] font-semibold leading-relaxed tracking-tight text-ink max-tablet:text-[20px]">
            {about.lead}
          </p>
          <p className="mt-4 max-w-[490px] text-[15px] leading-relaxed text-muted">{about.detail}</p>
          <div className="mt-8 font-signature text-[42px] font-semibold text-accent">
            Pavithra<span className="ml-2 font-mono text-[12px] not-italic text-faint">/</span>
          </div>
        </Reveal>

        <Reveal className="flex w-full flex-col gap-4" delay={0.16}>
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                className="group neo-transition flex items-center gap-4 rounded-md bg-surface p-4 shadow-raised-sm hover:shadow-raised"
                initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="neo-inset grid size-12 shrink-0 place-items-center rounded-sm text-accent transition-transform duration-200 group-hover:scale-105">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <div className="grid gap-0.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-faint font-semibold">{item.label}</span>
                  <strong className="text-[15px] font-bold text-ink group-hover:text-accent transition-colors duration-200">{item.title}</strong>
                </div>
              </motion.div>
            )
          })}
        </Reveal>


      </div>
    </section>
  )
}

export default About

