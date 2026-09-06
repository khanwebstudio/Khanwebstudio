import { projects } from '../data/projects'

function Portfolio() {
  return (
    <section className="page section">
      <div className="container">
        <span className="section-label">Portfolio</span>
        <h1 className="section-title">Selected Web Projects</h1>
        <p className="section-desc">
          Explore live product experiences and focused landing page concepts.
          Every project is shaped around a clear audience and business goal.
        </p>

        <div className="portfolio-grid">
          {projects.map(({ label, title, tags, description, url, theme }) => (
            <article key={title} className="portfolio-card">
              <div className={`portfolio-thumb ${theme || ''}`} aria-hidden="true">
                {label}
              </div>
              <div className="portfolio-body">
                <div className="portfolio-tags" aria-label={`${title} tags`}>
                  {tags.map((tag) => (
                    <span key={tag} className="portfolio-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
                {url && (
                  <a className="project-live-link" href={url} target="_blank" rel="noreferrer">
                    View Live Project <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
