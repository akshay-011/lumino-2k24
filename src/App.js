import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import EventCard from './components/events/EventCard';
import About from './components/about/About';
import DateTimer from './components/dateTimer/DateTimer';
import LoadingAnimation from "./components/loading/LoadingAnimation"

const App = () => {

  const [expandedCard, setExpandedCard] = useState(-1);

  const handleClick = (index) => {
    if(index === expandedCard){
      setExpandedCard(-1);
      return;
    }
    setExpandedCard(index);
  }

 const events = [
    { imageName: 'clashOfCodes', description: 'Where coding prowess meets creativity in a fast-paced competition. Test your skills, solve challenges, and outsmart your opponents in this thrilling coding battle!', registerLink: 'https://forms.gle/WcXuTsYtZov2vRQSA', name:"Clash Of Codes" },
    { imageName: 'jumanji', description: 'Dive into a heart-pounding treasure hunt! Outsmart challenges, uncover secrets, and race against time to claim the ultimate prize. Dare to enter the wild and conquer Jumanji', registerLink: 'https://forms.gle/BrFHQqDwr3L3bB3R9', name:"Jumanji" },
    { imageName: 'typingRush', description: 'Fast fingers, fierce competition. Test your typing speed in a thrilling race to the top!', registerLink: 'https://forms.gle/SaiTfb67BYvnVzMXA', name:"Typing Rush" },
    { imageName: 'wizQuizWhiz', description: 'The ultimate showdown of knowledge and wit! Join the competition, test your smarts, and emerge as the reigning quiz champion!', registerLink: 'https://forms.gle/sY2h1eJ5t6Lad8dw5', name:"Wiz Quiz Whiz" },
    { imageName: 'graphicaForge', description: 'Unleash your creativity! Join the poster design competition where imagination meets skill. Craft stunning visuals and forge your way to artistic greatness.', registerLink: 'https://forms.gle/LeLYy4X1yh3GwygK8', name:"Graphica Forge" },
    { imageName: 'picaPix', description: 'AI creativity at its finest! Generate mesmerizing images and compete for the title of ultimate AI artist in this cutting-edge competition.', registerLink: 'https://forms.gle/ekMq2EKqnEuUgZJc7', name:"Pic A Pix" },
    { imageName: 'webflix', description: 'Craft captivating webpages and showcase your design skills in this thrilling competition. Bring your ideas to life and compete to be the master of web design!', registerLink: 'https://forms.gle/ZN4C1C59uhKnZTnp8', name:"Webflix" },

 ];

 // loading screen
 const [isLoading, setIsLoading] = useState(true);
 useEffect(() => {
  setTimeout(() => {
    setIsLoading(false);
  }, 4000);
 })

 if(isLoading){
  return(
    <LoadingAnimation />
  )
 }
 return (
    <div className="app">
      <Header />
      <About />
      <DateTimer />
      <h1 className='main-events' >Events</h1>
      <main className='main-showcard' >
        {events.map((event, index) => (
          <EventCard 
          key={index} 
          {...event} 
          handleClick={handleClick}
          isClicked={expandedCard === index}
          index={index}
          />
        ))}
      </main>
      <Footer />
    </div>
 );
};

export default App;
