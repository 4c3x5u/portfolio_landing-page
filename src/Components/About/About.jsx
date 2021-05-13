import React from 'react';
import KeySkills from './KeySkills/KeySkills';
import Bio from './Bio/Bio';
import './About.sass';

const About = () => (
  <section id="About" className="py-5">
    <Bio />
    <KeySkills />
  </section>
);

export default About;
