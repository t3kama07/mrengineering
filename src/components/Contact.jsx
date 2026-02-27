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
            Mannerheimintie 10<br/>
            Helsinki 00100<br/>
            Finland
          </p>

          <h3 style={{marginTop:18}}>Phone Numbers</h3>
          <p className="subtle">
            +358 987654321<br/>
            +358 221234567<br/>
            Emergency: +358 98888 8888
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
