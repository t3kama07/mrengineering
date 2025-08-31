import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container" style={{padding:'34px 20px'}}>
        <div className="grid">
          <div>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              <span className="badge">MR</span>
              <strong>ENGINEERING</strong>
            </div>
            <p style={{maxWidth:360,opacity:.9}}>
              Building excellence since 2008. MR Engineering is your trusted partner for all construction and housing solutions.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <div style={{display:'grid',gap:6}}>
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#careers">Careers</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <h4>Our Services</h4>
            <div style={{display:'grid',gap:6}}>
              <span>Residential Construction</span>
              <span>Commercial Buildings</span>
              <span>Infrastructure Projects</span>
              <span>Project Management</span>
            </div>
          </div>

          <div>
            <h4>Contact Info</h4>
            <div style={{display:'grid',gap:6}}>
              <span>123 Construction Street, Mumbai</span>
              <a href="tel:+919876543210">+91 98765 43210</a>
              <a href="mailto:info@mrengineering.com">info@mrengineering.com</a>
            </div>
          </div>
        </div>

        <div style={{marginTop:18, borderTop:'1px solid rgba(255,255,255,.2)', paddingTop:12, display:'flex',justifyContent:'space-between',flexWrap:'wrap', gap:8}}>
          <small>© 2025 MR Engineering. All rights reserved.</small>
          <small><a href="#">Privacy Policy</a> · <a href="#">Terms of Service</a></small>
        </div>
      </div>
    </footer>
  )
}
