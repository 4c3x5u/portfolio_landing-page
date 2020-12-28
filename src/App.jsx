import React from 'react';

import PageHead from './Components/Head/Head';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import BlogPosts from './Components/BlogPosts/BlogPosts';
import Contact from './Components/Contact/Contact';
import Sidebar from './Components/Sidebar/Sidebar';

import './App.sass';

const App = () => (
  <article className="App">
    <PageHead />
    <About />
    <Projects />
    <BlogPosts />
    <Contact />
    <Sidebar />
  </article>
);

export default App;
