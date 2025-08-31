import React from 'react'
import aboutImg from '../assets/about.jpg' // put a nice project/house image here

export default function About() {
  return (
    <section id="about" className="section alt">
      <div className="container">

        {/* Title + subtitle (centered like your screenshot) */}
        <h2 className="h2" style={{ textAlign: 'center' }}>
          About <span style={{ color: 'var(--accent)' }}>MR Engineering</span>
        </h2>
        <p className="subtle" style={{ maxWidth: 920, margin: '8px auto 34px', textAlign: 'center' }}>
          Building dreams since 2008, we are a leading construction company dedicated to delivering exceptional
          residential and commercial projects.
        </p>

        {/* Two-column layout: text left, image right */}
        <div className="about-grid">
          <div className="about-copy">
            <h3 style={{ marginTop: 0 }}>Our Story</h3>
            <p style={{ marginTop: 10 }}>
              Founded in 2008, MR Engineering has grown from a small local contractor into one of the most trusted
              names in construction. Our reputation is built on quality, reliability, and innovation.
              We blend engineering expertise with modern project management to deliver on time, on budget, and above expectations.
            </p>

            <div className="about-cards">
              <div className="about-card">
                <h4>Our Values</h4>
                <ul>
                  <li>Quality &amp; Safety first</li>
                  <li>Transparent communication</li>
                  <li>On-time delivery</li>
                  <li>Long-term client partnerships</li>
                </ul>
              </div>

              <div className="about-card">
                <h4>What We Do</h4>
                <p className="subtle" style={{ marginTop: 6 }}>
                  Design–build, general contracting, and project management across residential, commercial,
                  and infrastructure domains.
                </p>
                <a className="btn primary" href="#contact" style={{ marginTop: 8 }}>Talk to an Expert</a>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img
              src={aboutImg}
              alt="MR Engineering project"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
