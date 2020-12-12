import React from 'react';
import './App.css';
import Head from './Components/Head/Head';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Sidebar from './Components/Sidebar/Sidebar';

const App = () => (
  <div className="App">
    <Head />
    <About />
    <Projects />
    <Contact />
    <Sidebar />
  </div>
);

export default App;
