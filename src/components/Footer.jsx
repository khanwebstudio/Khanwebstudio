import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">(c) {year} Khan Studio. All rights reserved.</p>
        <div className="footer-links" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/service">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
