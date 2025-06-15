import { useState } from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar glass-navbar">
      <div className="navbar-brand">
        <a href="#home" className="brand-text">Mobile App Developer</a>
      </div>
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li style={{ transitionDelay: isMenuOpen ? '0.1s' : '0s' }}><a href="#home">Home</a></li>
        <li style={{ transitionDelay: isMenuOpen ? '0.2s' : '0s' }}><a href="#about">About</a></li>
        <li style={{ transitionDelay: isMenuOpen ? '0.3s' : '0s' }}><a href="#skills">Skills</a></li>
        <li style={{ transitionDelay: isMenuOpen ? '0.4s' : '0s' }}><a href="#projects">Projects</a></li>
        <li style={{ transitionDelay: isMenuOpen ? '0.5s' : '0s' }}><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar 