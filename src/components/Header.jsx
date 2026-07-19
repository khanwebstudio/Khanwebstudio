import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { path: '/about', label: 'About' },
  { path: '/service', label: 'Service' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          Khan<span>Studio</span>
        </Link>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="site-navigation"
          className={`nav ${menuOpen ? 'open' : ''}`}
          aria-label="Primary navigation"
        >
          <div className="nav-glass">
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' active' : ''}`
                }
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
