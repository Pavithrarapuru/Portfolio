
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Code2 } from 'lucide-react'
import Reveal from '../common/Reveal'

function ProjectCard({ project, delay }) {
  const {
    number,
    title,
    type,
    description,
    tags,
    image,
    github,
    demo,
  } = project

  const reduceMotion = useReducedMotion()

  return (
    <Reveal delay={delay}>
      <motion.article
        className="group neo-transition flex h-full flex-col overflow-hidden rounded-lg bg-surface p-3 shadow-raised hover:shadow-raised-hover"
        whileHover={reduceMotion ? undefined : { y: -4 }}
        transition={{
          duration: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Project Image */}
        <div className="neo-inset-deep relative h-[200px] w-full overflow-hidden rounded-md p-2">
          <img
            src={image}
            alt={title}
            className="size-full rounded-sm object-cover shadow-raised-sm transition-transform duration-300 ease-out group-hover:scale-[1.025]"
          />

          {/* Project Number */}
          <span className="absolute left-4 top-4 rounded-sm bg-black/40 px-2 py-0.5 font-mono text-[10px] font-bold text-white shadow-raised-sm backdrop-blur-md">
            {number}
          </span>

          {/* Live Demo Button */}
          <motion.a
  href={github}
  target="_blank"
  rel="noopener noreferrer"
  className="group/github inline-flex items-center gap-2 rounded-md px-2 py-2 font-mono text-[11px] font-bold text-muted transition-all duration-200 hover:bg-surface hover:text-ink"
  aria-label={`View ${title} source code on GitHub`}
  whileHover={reduceMotion ? undefined : { y: -2 }}
>
  <Code2
    size={16}
    className="transition-transform duration-200 group-hover/github:rotate-[-8deg]"
  />

  <span>Source Code</span>

  <ArrowUpRight
    size={13}
    className="opacity-60 transition-transform duration-200 group-hover/github:translate-x-0.5 group-hover/github:-translate-y-0.5"
  />
</motion.a>
        </div>

        {/* Card Content */}
        <div className="flex flex-1 flex-col p-4 pt-5">

          {/* Project Type */}
          <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
            {type}
          </span>

          {/* Project Title */}
          <h3 className="my-2 text-[18px] font-bold tracking-tight text-ink transition-colors duration-200 group-hover:text-accent">
            {title}
          </h3>

          {/* Description */}
          <p className="mb-4 flex-1 text-[13px] leading-relaxed text-muted">
            {description}
          </p>

          {/* Technology Chips */}
          <div className="mb-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="neo-inset-sm neo-transition rounded-sm px-2.5 py-1 font-mono text-[10px] font-medium text-muted hover:-translate-y-0.5 hover:text-ink"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div className="flex items-center justify-between border-t border-black/5 pt-3">

            {/* GitHub */}
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/github inline-flex items-center gap-2 rounded-md px-2 py-2 font-mono text-[11px] font-bold text-muted transition-all duration-200 hover:bg-surface hover:text-ink"
              aria-label={`View ${title} source code on GitHub`}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -2 }
              }
            >
             <Code2
  size={16}
  className="transition-transform duration-200 group-hover/github:rotate-[-8deg]"
/>

              

              <span>Source Code</span>

              <ArrowUpRight
                size={13}
                className="opacity-60 transition-transform duration-200 group-hover/github:translate-x-0.5 group-hover/github:-translate-y-0.5"
              />
            </motion.a>

            {/* Live Demo */}
            <motion.a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group/demo inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-2 font-mono text-[11px] font-bold text-white shadow-raised-sm transition-all duration-200 hover:shadow-raised active:neo-pressed"
              aria-label={`View ${title} live demo`}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -2 }
              }
              whileTap={
                reduceMotion
                  ? undefined
                  : { scale: 0.96 }
              }
            >
              <span>Live Demo</span>

              <ExternalLink
                size={14}
                className="transition-transform duration-200 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5"
              />
            </motion.a>

          </div>
        </div>
      </motion.article>
    </Reveal>
  )
}

export default ProjectCard

