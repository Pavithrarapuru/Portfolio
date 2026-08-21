import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check, Send } from 'lucide-react'
import socialLinks from '../../data/social'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import NeomorphicButton from '../common/NeomorphicButton'
import SocialLinks from '../common/SocialLinks'

function Contact() {
  const [sent, setSent] = useState(false)
  const reduceMotion = useReducedMotion()

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" data-label="Contact" className="mx-auto grid max-w-[1140px] grid-cols-[.9fr_1.1fr] items-start gap-16 px-6 py-16 max-tablet:grid-cols-1 max-tablet:gap-10 max-tablet:px-4 max-tablet:py-12">
      <div>
        <Reveal>
          <SectionHeading
            eyebrow="Have an idea?"
            title="Let&apos;s make something meaningful."
            copy="Whether you have a project in mind, a question, or simply want to say hello, my inbox is open."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <SocialLinks links={socialLinks} />
        </Reveal>
      </div>

      <Reveal className="rounded-xl bg-surface p-8 shadow-raised max-tablet:p-6 neo-transition" delay={0.15}>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex items-center justify-between">
            <span className="text-[16px] font-bold text-ink">Start a conversation</span>
            <div className="neo-inset grid size-9 place-items-center rounded-sm text-accent">
              <Send size={16} />
            </div>
          </div>

          <label className="grid gap-2 font-mono text-[10px] uppercase tracking-wider text-muted font-semibold">
            Name
            <input
              className="neo-inset-deep neo-transition w-full rounded-md px-4 py-3 font-sans text-[14px] text-ink outline-none placeholder:text-faint/70 focus:shadow-[var(--shadow-inset-focus)]"
              required
              type="text"
              placeholder="Your name"
            />
          </label>

          <label className="grid gap-2 font-mono text-[10px] uppercase tracking-wider text-muted font-semibold">
            Email
            <input
              className="neo-inset-deep neo-transition w-full rounded-md px-4 py-3 font-sans text-[14px] text-ink outline-none placeholder:text-faint/70 focus:shadow-[var(--shadow-inset-focus)]"
              required
              type="email"
              placeholder="you@example.com"
            />
          </label>

          <label className="grid gap-2 font-mono text-[10px] uppercase tracking-wider text-muted font-semibold">
            Message
            <textarea
              className="neo-inset-deep neo-transition w-full resize-y rounded-md px-4 py-3 font-sans text-[14px] text-ink outline-none placeholder:text-faint/70 focus:shadow-[var(--shadow-inset-focus)]"
              required
              rows="4"
              placeholder="Tell me a little about your idea..."
            />
          </label>


          <NeomorphicButton className="mt-2 w-full" type="submit">
            {sent ? (
              <>
                Message ready <Check size={17} />
              </>
            ) : (
              <>
                Send message <ArrowUpRight size={17} />
              </>
            )}
          </NeomorphicButton>

          <AnimatePresence>
            {sent && (
              <motion.p
                className="mt-2 text-center font-mono text-[11px] text-accent font-semibold"
                initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                Thanks! Your message is formatted and ready.
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </Reveal>
    </section>
  )
}

export default Contact


