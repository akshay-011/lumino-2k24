import React, { useState, useEffect } from 'react';
import './sponsors.css'; 
import img from "./assets/sponsors.png"


const Sponsers = ({ isMobile }) => {  

 return (
    <div className="sponsor-container">
      <p>Sposored By</p>
      <section className="sponsor">
        <img src={img} alt="sponsores" />
      </section>
    </div>
 );
};

export default Sponsers;