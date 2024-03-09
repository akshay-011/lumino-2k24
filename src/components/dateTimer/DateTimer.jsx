import React, { useState, useEffect } from 'react';
import "./dateTimer.css"

const DateTimer = () => {
    // date to
 const targetDate = new Date('2024-03-18T09:30:00'); 

 const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
 };

 const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

 useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
 }, []);

 return (
    <div className='timer-container' >
      <p id='time' >
        {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
      </p>
      <div className="explanation">
        <p className="exp">Day</p>
        <p className="exp">Hour</p>
        <p className="exp">Minute</p>
        <p className="exp">Second</p>
      </div>
    </div>
 );
};

export default DateTimer;
