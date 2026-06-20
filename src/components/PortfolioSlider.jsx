import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const PROJECTS_PER_PAGE = 3

function chunkProjects(items, size) {
  const pages = []
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size))
  }
  return pages
}

function PortfolioSlider() {
  const pages = chunkProjects(projects, PROJECTS_PER_PAGE)
  const [currentPage, setCurrentPage] = useState(0)

  const goPrev = () => {
    setCurrentPage((page) => Math.max(page - 1, 0))
  }

  const goNext = () => {
    setCurrentPage((page) => Math.min(page + 1, pages.length - 1))
  }

  return (
    <section className="portfolio-slider" aria-labelledby="featured-work-title">
      <div className="container">
        <div className="portfolio-slider-header">
          <span className="section-label">Portfolio</span>
          <h2 id="featured-work-title" className="section-title">
            Featured Landing Page Types
          </h2>
        </div>

        <div className="portfolio-slider-viewport">
          <button
            type="button"
            className="slider-btn slider-btn-prev"
            aria-label="Previous projects"
            onClick={goPrev}
            disabled={currentPage === 0}
          >
            <span aria-hidden="true">&lt;</span>
          </button>

          <div className="portfolio-slider-track" aria-live="polite">
            <div
              className="portfolio-slider-pages"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {pages.map((pageProjects, pageIndex) => (
                <div key={pageIndex} className="portfolio-slider-page">
                  {pageProjects.map(({ label, title, tags, description }) => (
                    <article key={title} className="portfolio-slider-slide">
                      <div className="portfolio-slider-card">
                        <div className="portfolio-slider-thumb" aria-hidden="true">
                          {label}
                        </div>
                        <div className="portfolio-slider-body">
                          <div className="portfolio-tags">
                            {tags.map((tag) => (
                              <span key={tag} className="portfolio-tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3>{title}</h3>
                          <p>{description}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="slider-btn slider-btn-next"
            aria-label="Next projects"
            onClick={goNext}
            disabled={currentPage === pages.length - 1}
          >
            <span aria-hidden="true">&gt;</span>
          </button>
        </div>

        <div className="portfolio-slider-dots">
          {pages.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`slider-dot${currentPage === index ? ' active' : ''}`}
              aria-label={`Go to page ${index + 1}`}
              aria-current={currentPage === index ? 'true' : undefined}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>

        <div className="portfolio-slider-footer">
          <Link to="/portfolio" className="btn btn-outline">
            View All Examples
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSlider
