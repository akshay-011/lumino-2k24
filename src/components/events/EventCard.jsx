import React, { useState, useEffect, useRef } from 'react';
import AnimatedCard from '../animatedCard/AnimatedCard';
import "./event.css"

const EventCard = ({  
                      name, 
                      description, 
                      registerLink, 
                      imageName, 
                      handleClick, 
                      isClicked, 
                      index, 
                      regFee, 
                      isMobile, 
                      time 
                    }) => {
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


 

if(!isMobile){
  return(

  <div className={'event-card'}>
      {image && <img src={image} alt={name} />}
       <AnimatedCard time={time} description={description} registerLink={registerLink} regFee={regFee} />
  </div>
  )
}
 return (
    <div className={`event-card ${isClicked ? 'expanded' : ''}`} onClick={() => {
      handleClick(index);
    }}>
      {image && <img src={image} alt={name} />}
      {
       isClicked ? <AnimatedCard time={time} description={description} registerLink={registerLink} regFee={regFee} /> : null
      }
    </div>
 );
};

export default EventCard;