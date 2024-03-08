import React, { useState, useEffect } from 'react';
import AnimatedCard from '../animatedCard/AnimatedCard';
import "./event.css"

const EventCard = ({ name, description, registerLink, imageName }) => {
 const [image, setImage] = useState(null);
 const [isClicked, setIsClicked] = useState(false); // State to manage the click

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

 const handleClick = () => {
    setIsClicked(!isClicked); 
 };

 return (
    <div className={`event-card ${isClicked ? 'expanded' : ''}`} onClick={handleClick}>
      {image && <img src={image} alt={name} />}
      {
       isClicked? <AnimatedCard description={description} registerLink={registerLink} /> : null
      }
    </div>
 );
};

export default EventCard;