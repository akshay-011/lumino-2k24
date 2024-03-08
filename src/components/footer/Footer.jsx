import React from 'react'
import "./footer.css"

import image from "./assets/instagram.png"
import map from "./assets/google-map.png"

const Footer = () => {
  return (
    <footer className='footer' >
      <div className="contact">
        <h4 className='heading'>Contact</h4>
        <p><span>Akash Chem J : </span>+91 95623 88758</p>
        <p><span>Nikhil Venu : </span>+91 98465 61896</p>
        <p><span>Abijith K S : </span>+91 91881 43295</p>
        <p><span>Akhiyaar Muhammad : </span>+91 89434 59195</p> 
      </div>

      <div className="socials contact">
        <h4 className="heading">Socials</h4>
        <section className='content'>
          <img height={20}  src={image} alt="instagram logo" />
          <a href='https://www.instagram.com/hash.includers/' target='_blank'>Instagram</a>
        </section>
        <div className="content">
          <img height={20} src={map} alt="google map logo" />
          <a target="_blank" rel='noopener noreferrer' href="https://maps.app.goo.gl/h4FZZzpvcapYwRoDA">Google Map</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer