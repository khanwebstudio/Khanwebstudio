function About() {
  const skills = [
    'React',
    'JavaScript',
    'HTML / CSS',
    'UI Design',
    'Responsive Web',
    'SEO Basics',
    'Accessibility',
    'Figma',
  ]

  const highlights = [
    {
      title: 'Conversion First',
      text: 'Every section is planned around the visitor journey: problem, value, proof, offer, and action.',
    },
    {
      title: 'Clear Communication',
      text: 'You get practical updates, organized questions, and quick feedback cycles throughout the project.',
    },
    {
      title: 'Launch Ready',
      text: 'The final result is built for real use with responsive layout, clean code, and deployment guidance.',
    },
  ]

  return (
    <section className="page section">
      <div className="container">
        <span className="section-label">About</span>
        <h1 className="section-title">A focused studio for landing pages</h1>
        <p className="section-desc">
          Khan Studio helps online businesses present their offer clearly and
          professionally, especially when they need a landing page that can be
          launched quickly through Fiverr or Upwork.
        </p>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Many small businesses do not need a huge website first. They need
              one sharp page that explains the offer, handles objections, and
              makes the next step obvious. That is the kind of page I build.
            </p>
            <p>
              My process combines message structure, UI design, React
              development, SEO basics, and responsive QA so the final page feels
              professional on both desktop and mobile.
            </p>

            <div className="about-skills" aria-label="Skills and tools">
              {skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="about-highlights">
            {highlights.map(({ title, text }) => (
              <article key={title} className="highlight-card">
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
