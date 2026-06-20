import { Link } from 'react-router-dom'
import PortfolioSlider from './PortfolioSlider'

const outcomes = [
  'Conversion-focused page structure',
  'Responsive React implementation',
  'SEO-ready copy and metadata',
]

function Home() {
  return (
    <>
      <section className="page home">
        <div className="container home-content">
          <div className="home-text">
            <div className="home-badge">
              <span className="home-badge-dot" />
              Available for new projects
            </div>

            <h1
              className="home-title"
              aria-label="Landing pages that help clients book more leads on Fiverr and Upwork"
            >
              Landing pages that help clients <em>book more leads</em>
              <br />
              <span>on Fiverr and Upwork</span>
            </h1>

            <p className="home-subtitle">
              K Studio designs and builds fast, responsive, SEO-ready landing
              pages for startups, service businesses, creators, and online
              sellers who need a polished page that is ready to launch.
            </p>

            <div className="home-actions">
              <Link to="/contact" className="btn btn-primary">
                Start a Project
              </Link>
              <Link to="/service" className="btn btn-outline">
                View Services
              </Link>
            </div>

            <ul className="home-outcomes" aria-label="Key service outcomes">
              {outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>

          <div className="home-visual" aria-label="K Studio service snapshot">
            <div className="home-card">
              <div className="home-card-avatar">K</div>
              <p className="home-card-name">K Studio</p>
              <p className="home-card-role">Landing Page Design & Development</p>
              <div className="home-card-stats">
                <div>
                  <div className="home-stat-value">1-3</div>
                  <div className="home-stat-label">Day Start</div>
                </div>
                <div>
                  <div className="home-stat-value">100%</div>
                  <div className="home-stat-label">Responsive</div>
                </div>
                <div>
                  <div className="home-stat-value">SEO</div>
                  <div className="home-stat-label">Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PortfolioSlider />
    </>
  )
}

export default Home
