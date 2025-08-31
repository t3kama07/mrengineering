import React from 'react'

const items = [
  {
    title: 'Residential Construction',
    desc: 'Custom homes, renovations, and residential developments with quality craftsmanship.',
    bullets: ['Custom Home Design','Home Renovations','Extensions & Additions','Interior Finishing'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 10.5L12 3l9 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 9.5V21h14V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 21v-6h4v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Commercial Buildings',
    desc: 'Offices, retail spaces, and complexes built to the highest standards.',
    bullets: ['Office Buildings','Retail Spaces','Warehouses','Mixed-Use Development'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 21h18M6 21V6h6v15M12 21V3h6v18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.5 9H11M8.5 12H11M8.5 15H11M15 6.5h1.5M15 9h1.5M15 11.5h1.5M15 14h1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Infrastructure Projects',
    desc: 'Roads, bridges, and public infrastructure that serve communities for generations.',
    bullets: ['Road Construction','Bridge Building','Public Infrastructure','Urban Planning'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 19h18M4 19l4-12h8l4 12M9 11h6M8 15h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Services(){
  return (
    <div className="container">
      <h2 className="h2">Our <span style={{color:'var(--accent)'}}>Services</span></h2>
      <p className="subtle" style={{maxWidth:760}}>
        From residential homes to large-scale commercial projects, we deliver end-to-end solutions tailored to your needs.
      </p>

      <div className="service-grid" style={{marginTop:22}}>
        {items.map((card, i) => (
          <article
            key={card.title}
            className="card service-card reveal"
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <div className="service-head">
              <div className="icon-badge">{card.icon}</div>
              <h3>{card.title}</h3>
            </div>

            <p className="subtle">{card.desc}</p>

            <ul className="service-list">
              {card.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
{/* 
            <div className="chip">Learn more →</div> */}
          </article>
        ))}
      </div>
    </div>
  )
}
