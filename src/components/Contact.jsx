import { useState } from 'react'

const inquiryTips = [
  'Your business or product type',
  'The goal of the landing page',
  'Preferred deadline and reference links',
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
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

          <form className="contact-form" onSubmit={handleSubmit}>
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
              <label htmlFor="message">Project Brief</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your offer, target audience, deadline, and landing page goal..."
                required
              />
            </div>

            {submitted && (
              <p className="form-success" role="status">
                Brief received locally. Connect this form to Formspree, EmailJS,
                or a backend endpoint before public launch.
              </p>
            )}

            <button type="submit" className="btn btn-primary">
              Send Brief
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
