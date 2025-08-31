import React from 'react'
import mainImage from '../assets/main.jpg'   // keep your image in src/assets/

export default function Hero(){
  return (
    <section
      className="hero"
      style={{
        // single overlay + image handled inline
       backgroundImage: `linear-gradient(180deg, rgba(180,31,31,.95), rgba(180,31,31,.85)), url(${mainImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="wrap container">
        <div className="badge-pill" style={{ marginBottom: 14 }}>
          Building excellence since 2008
        </div>

        <h1 className="title">
          Building Your <span className="accent">Dream Spaces</span>
        </h1>

        <p>
          MR Engineering — your trusted partner in construction and housing solutions.
          We bring quality, innovation, and excellence to every project.
        </p>

        <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
          <a className="btn primary" href="#services">Our Services →</a>
          <a className="btn ghost" href="#contact">Get a Quote</a>
        </div>
      </div>
    </section>
  )
}
