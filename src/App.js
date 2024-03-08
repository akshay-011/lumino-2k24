import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import EventCard from './components/events/EventCard';
import About from './components/about/About';


const App = () => {

 const events = [
    { imageName: 'clashOfCodes', description: 'Coding Competition', registerLink: 'https://forms.gle/WcXuTsYtZov2vRQSA', name:"Clash Of Codes" },
    { imageName: 'jumanji', description: 'Treasure Hunt', registerLink: 'https://forms.gle/BrFHQqDwr3L3bB3R9', name:"Jumanji" },
    { imageName: 'typingRush', description: 'Typing Competition', registerLink: 'https://forms.gle/SaiTfb67BYvnVzMXA', name:"Typing Rush" },
    { imageName: 'wizQuizWhiz', description: 'Quiz Competition', registerLink: 'https://forms.gle/your-link-here', name:"Wiz Quiz Whiz" },
    { imageName: 'graphicaForge', description: 'Poster Designing', registerLink: 'https://forms.gle/LeLYy4X1yh3GwygK8', name:"Graphica Forge" },
    { imageName: 'picaPix', description: 'Image Generating Competition', registerLink: 'https://forms.gle/your-link-here', name:"Pica Pix" },
    { imageName: 'webflix', description: 'Webpage Designing Competitiom', registerLink: 'https://forms.gle/ZN4C1C59uhKnZTnp8', name:"Webflix" },

 ]

 return (
    <div className="app">
      <Header />
      <About />
      <h1 className='main-events' >EVENTS</h1>
      <main className='main-showcard' >
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </main>
      <Footer />
    </div>
 );
};

export default App;
