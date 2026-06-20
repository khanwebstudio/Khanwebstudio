import { projects } from '../data/projects'

function Portfolio() {
  return (
    <section className="page section">
      <div className="container">
        <span className="section-label">Portfolio</span>
        <h1 className="section-title">Landing Page Project Concepts</h1>
        <p className="section-desc">
          Example project types I can build for Fiverr and Upwork clients. Each
          page can be adapted to your brand, offer, copy, images, and platform.
        </p>

        <div className="portfolio-grid">
          {projects.map(({ label, title, tags, description }) => (
            <article key={title} className="portfolio-card">
              <div className="portfolio-thumb" aria-hidden="true">
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
