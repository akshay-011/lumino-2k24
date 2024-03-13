import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import EventCard from './components/events/EventCard';
import About from './components/about/About';
import DateTimer from './components/dateTimer/DateTimer';
import LoadingAnimation from "./components/loading/LoadingAnimation"
import Sponsores from './components/sponsores/Sponsores';
import bgImg from "./assets/main-bg4.png" ;
import events from './events';


const App = () => {
  const [expandedCard, setExpandedCard] = useState(-1);
  const [zoomed, setZoomed] = useState(false);

  const handleClick = (index) => {
    if(index === expandedCard){
      setExpandedCard(-1);
      return;
    }
    setExpandedCard(index);
    setZoomed(index === expandedCard);
  }


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


 // loading screen
 const [isLoading, setIsLoading] = useState(true);
 useEffect(() => {
  setTimeout(() => {
    setIsLoading(false);
  }, 4000);
 });




 if(isLoading){
  return(
    <LoadingAnimation />
  )
 }
 return (
  <main className='app-container' >
    <img 
      onLoad={() => { 
        setIsLoading(false);
       }}
      src={bgImg} 
      className={`image-container app-container ${zoomed ? 'zoomed-in' : ""}`} 
     />
    <div className="app">
      <Header />
      <About />
      <section>
        <DateTimer />
      </section>
      <p className='main-events' >Events</p>
      <main className='main-showcard' >
        {events.map((event, index) => (
          <EventCard 
          key={index} 
          {...event} 
          handleClick={handleClick}
          isClicked={expandedCard === index}
          index={index}
          isMobile={isMobile}
          />
        ))}
      </main>
      <Sponsores isMobile={isMobile} />
      <Footer />
    </div>

  </main>
 );
};

export default App;
