import React from 'react'

export default function Contact(){
  return (
    <div className="container">
      <h2 className="h2">Get In <span style={{color:'var(--accent)'}}>Touch</span></h2>
      <p className="subtle" style={{maxWidth:820}}>
        Ready to start your project? Contact us directly via phone or email.
      </p>

      <div className="grid" style={{marginTop:22}}>
        <div className="card">
          <h3>Office Address</h3>
          <p className="subtle">
            123 Construction Street<br/>
            Mumbai, Maharashtra 400001<br/>
            India
          </p>

          <h3 style={{marginTop:18}}>Phone Numbers</h3>
          <p className="subtle">
            +91 98765 43210<br/>
            +91 22 1234 5678<br/>
            Emergency: +91 98888 88888
          </p>

          <h3 style={{marginTop:18}}>Email</h3>
          <p className="subtle">
            <a href="mailto:info@mrengineering.com">info@mrengineering.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}
