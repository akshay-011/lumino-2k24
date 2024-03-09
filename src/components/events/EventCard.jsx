import React, { useState, useEffect } from 'react';
import AnimatedCard from '../animatedCard/AnimatedCard';
import "./event.css"

const EventCard = ({ name, description, registerLink, imageName, handleClick, isClicked, index }) => {
 const [image, setImage] = useState(null);

 useEffect(() => {
    const loadImage = async () => {
      try {
        const module = await import(`./assets/${imageName}.png`);
        setImage(module.default);
      } catch (error) {
        console.error("Failed to load image:", error);
      }
    };

    loadImage();
 }, [imageName]);

 // check desktop or not
 const [isMobile, setIsMobile] = useState(false);

 useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth <= 768;
      setIsMobile(isMobile);
    };

    // Check on initial load
    checkMobile();

    // Check on window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', checkMobile);
 }, []);

if(!isMobile){
  return(

  <div className={'event-card'}>
      {image && <img src={image} alt={name} />}
       <AnimatedCard description={description} registerLink={registerLink} />
  </div>
  )
}
 return (
    <div className={`event-card ${isClicked ? 'expanded' : ''}`} onClick={() => {
      handleClick(index)
    }}>
      {image && <img src={image} alt={name} />}
      {
       isClicked ? <AnimatedCard description={description} registerLink={registerLink} /> : null
      }
    </div>
 );
};

export default EventCard;