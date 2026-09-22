import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check, Send, Loader2 } from 'lucide-react'
import socialLinks from '../../data/social'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import NeomorphicButton from '../common/NeomorphicButton'
import SocialLinks from '../common/SocialLinks'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: null, message: '' })
  const reduceMotion = useReducedMotion()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { name, email, message } = formData
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all three fields.' })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: null, message: '' })

    try {
      const response = await fetch(
        'https://6yz8yynbe6.execute-api.ap-south-1.amazonaws.com/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
          }),
        }
      )

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        const errorText = await response.text()
        console.error('AWS API Error:', response.status, errorText)
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      console.error('API Request Failed:', error)
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
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
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="neo-inset-deep neo-transition w-full rounded-md px-4 py-3 font-sans text-[14px] text-ink outline-none placeholder:text-faint/70 focus:shadow-[var(--shadow-inset-focus)]"
              required
              type="text"
              placeholder="Your name"
            />
          </label>

          <label className="grid gap-2 font-mono text-[10px] uppercase tracking-wider text-muted font-semibold">
            Email
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="neo-inset-deep neo-transition w-full rounded-md px-4 py-3 font-sans text-[14px] text-ink outline-none placeholder:text-faint/70 focus:shadow-[var(--shadow-inset-focus)]"
              required
              type="email"
              placeholder="you@example.com"
            />
          </label>

          <label className="grid gap-2 font-mono text-[10px] uppercase tracking-wider text-muted font-semibold">
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="neo-inset-deep neo-transition w-full resize-y rounded-md px-4 py-3 font-sans text-[14px] text-ink outline-none placeholder:text-faint/70 focus:shadow-[var(--shadow-inset-focus)]"
              required
              rows="4"
              placeholder="Tell me a little about your idea..."
            />
          </label>

          <NeomorphicButton className="mt-2 w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                Sending... <Loader2 size={17} className="animate-spin" />
              </>
            ) : status.type === 'success' ? (
              <>
                Message sent <Check size={17} />
              </>
            ) : (
              <>
                Send message <ArrowUpRight size={17} />
              </>
            )}
          </NeomorphicButton>

          <AnimatePresence>
            {status.message && (
              <motion.p
                className={`mt-2 text-center font-mono text-[11px] font-semibold ${
                  status.type === 'success' ? 'text-accent' : 'text-red-500'
                }`}
                initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                {status.message}
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </Reveal>
    </section>
  )
}

export default Contact
