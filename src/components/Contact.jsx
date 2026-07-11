import { useState } from 'react'

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID
const CONTACT_FORM_ENDPOINT =
  import.meta.env.VITE_CONTACT_FORM_ENDPOINT ||
  (FORMSPREE_FORM_ID
    ? `https://formspree.io/f/${FORMSPREE_FORM_ID}`
    : 'https://formspree.io/f/mrewzajz')
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const inquiryTips = [
  'Your business or product type',
  'The goal of the landing page',
  'Preferred deadline and reference links',
]

function Contact() {
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const userMessage = String(formData.get('message') || '').trim()

    if (!name || !email || !userMessage) {
      setStatus('error')
      setMessage('Please fill in all required fields.')
      return
    }

    if (!emailPattern.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    if (!CONTACT_FORM_ENDPOINT) {
      setStatus('error')
      setMessage('Contact form is not configured yet. Please use the email link instead.')
      return
    }

    setStatus('sending')
    setMessage('')

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        const result = await response.json().catch(() => null)
        const errorMessage = result?.errors?.[0]?.message || 'Form submission failed'
        throw new Error(errorMessage)
      }

      form.reset()
      setStatus('success')
      setMessage('Thank you! Your message has been sent.')
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please use the email link or try again later.')
    }
  }

  return (
    <section className="page section">
      <div className="container">
        <span className="section-label">Contact</span>
        <h1 className="section-title">Start your landing page project</h1>
        <p className="section-desc">
          Send a short brief and I will help shape it into a landing page plan.
          For paid orders, please contact me through Fiverr or Upwork so the
          project is protected by the platform workflow.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <h2>Best way to reach me</h2>
            <p>
              Share your offer, audience, and desired outcome. I usually reply
              within 24 hours with next steps, scope questions, and a practical
              recommendation.
            </p>

            <div className="contact-links">
              <a
                href="https://www.fiverr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Fiverr Profile
                <span aria-hidden="true">-&gt;</span>
              </a>
              <a
                href="https://www.upwork.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Upwork Profile
                <span aria-hidden="true">-&gt;</span>
              </a>
              <a href="mailto:hello@kstudio.dev" className="contact-link">
                hello@kstudio.dev
              </a>
            </div>

            <div className="brief-card">
              <h2>Helpful brief details</h2>
              <ul>
                {inquiryTips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>

          <form
            className="contact-form"
            action={CONTACT_FORM_ENDPOINT || undefined}
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value="New K Studio brief" />
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your offer, target audience, deadline, and landing page goal..."
                required
              />
            </div>

            {message && (
              <p
                className="form-success"
                role={status === 'error' ? 'alert' : 'status'}
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Brief'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
