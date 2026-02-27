import React, { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [language, setLanguage] = useState('EN')

  const closeMenu = () => setOpen(false)

  return (
    <header className="header">
      <nav className="nav">
        {/* Brand */}
        <div className="brand">
          <span className="badge">MR</span>
          <span>ENGINEERING</span>
        </div>

        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#careers">Careers</a>
          <div className="lang-switch" role="group" aria-label="Language switch">
            <button
              type="button"
              className={`lang-btn ${language === 'EN' ? 'active' : ''}`}
              onClick={() => setLanguage('EN')}
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-btn ${language === 'FI' ? 'active' : ''}`}
              onClick={() => setLanguage('FI')}
            >
              FI
            </button>
          </div>
          <a href="#contact" className="cta">Contact Us</a>
        </div>

        {/* Hamburger Button */}
        <button
          className={`mobile-toggle ${open ? 'open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${open ? 'show' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#careers" onClick={closeMenu}>Careers</a>
        <div className="lang-switch mobile" role="group" aria-label="Language switch">
          <button
            type="button"
            className={`lang-btn ${language === 'EN' ? 'active' : ''}`}
            onClick={() => setLanguage('EN')}
          >
            EN
          </button>
          <button
            type="button"
            className={`lang-btn ${language === 'FI' ? 'active' : ''}`}
            onClick={() => setLanguage('FI')}
          >
            FI
          </button>
        </div>
        <a href="#contact" className="cta" onClick={closeMenu}>Contact Us</a>
      </div>
    </header>
  )
}
