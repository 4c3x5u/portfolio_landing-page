import React from 'react';
import './App.css';
import HeadSection from './Components/Head/HeadSection';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Sidebar from './Components/Sidebar/Sidebar';

const App = () => (
  <div className="App">
    <HeadSection />
    <About />
    <Projects />
    <Contact />
    <Sidebar />
  </div>
);

export default App;
