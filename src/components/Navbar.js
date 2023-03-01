import React from 'react'
import '../assets/styles/Navbar.css'

export default function Navbar({ currentPage, handlePageChange }) {
  const navLinks = ['About', 'Portfolio', 'Resume', 'Contact']
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <a href="https://simmmmo.github.io/sjb-react-portfolio/" className="logo-section">
            <h1>Simon Browne</h1>
          </a>
        </div>
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label>
          <div className="menu">
            {navLinks.map((navLink) => (
              <li className="nav-item" key={navLink}>
                <a
                  href={'#' + navLink.toLowerCase()}
                  onClick={() => handlePageChange(navLink)}
                  className={currentPage === navLink ? 'nav-link active' : 'nav-link'}
                >
                  {navLink}
                </a>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  )
}
