import React from 'react';
import './App.css';
import Head from './Components/Head/Head';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';

const App = () => (
  <div className="App">
    <Head />
    <About />
    <Projects />
  </div>
);

export default App;
