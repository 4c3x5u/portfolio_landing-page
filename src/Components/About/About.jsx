import React from 'react';
import './About.css';
import KeySkills from './KeySkills/KeySkills';
import Bio from './Bio/Bio';

const About = () => (
  <section id="About" className="py-5">
    <Bio />
    <KeySkills />
  </section>
);

export default About;
