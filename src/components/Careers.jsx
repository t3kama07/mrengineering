import React from 'react'

export default function Careers() {
  return (
    <section id="careers" className="section alt">
      <div className="container">
        <h2 className="h2" style={{ textAlign: 'center' }}>Current Openings</h2>

        <div className="grid" style={{ marginTop: 32 }}>
          {/* Job Card 1 */}
          <div className="job-card">
            <div className="job-badge">Full-time</div>
            <h3>Site Engineer</h3>
            <p className="subtle">
              Looking for experienced site engineers to oversee construction projects and ensure quality standards.
            </p>
            <p className="subtle" style={{ marginTop: 10 }}>📍 Mumbai, Maharashtra &nbsp; ⏳ 2–4 years &nbsp; 💰 ₹4–7 LPA</p>

            <h4 style={{ marginTop: 16 }}>Requirements:</h4>
            <ul>
              <li>Civil Engineering degree</li>
              <li>2+ years site experience</li>
              <li>Knowledge of construction safety</li>
              <li>AutoCAD proficiency</li>
            </ul>

            <div className="job-footer">
              <a className="btn primary" href="#contact">Apply Now</a>
            </div>
          </div>

          {/* Job Card 2 */}
          <div className="job-card">
            <div className="job-badge">Full-time</div>
            <h3>Project Manager</h3>
            <p className="subtle">
              Lead construction projects from planning to completion, managing teams and ensuring timely delivery.
            </p>
            <p className="subtle" style={{ marginTop: 10 }}>📍 Pune, Maharashtra &nbsp; ⏳ 5–8 years &nbsp; 💰 ₹8–15 LPA</p>

            <h4 style={{ marginTop: 16 }}>Requirements:</h4>
            <ul>
              <li>Engineering degree</li>
              <li>5+ years project management</li>
              <li>PMP certification preferred</li>
              <li>Strong leadership skills</li>
            </ul>

            <div className="job-footer">
              <a className="btn primary" href="#contact">Apply Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
