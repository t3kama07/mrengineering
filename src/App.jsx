import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Careers from './components/Careers'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // simple intersection observer to reveal elements on scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('reveal--visible')),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="services" className="section reveal">
          <Services />
        </section>
        <section id="about" className="section alt reveal">
          <About />
        </section>
        <section id="careers" className="section reveal">
          <Careers />
        </section>
        <section id="contact" className="section alt reveal">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}
