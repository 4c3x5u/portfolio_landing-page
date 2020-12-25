import React from 'react';
import FullName from './FullName/FullName';
import Profession from './Profession/Profession';
import Who from './Who/Who';

import './Head.css';

const Head = () => (
  <section id="Head" className="d-flex justify-content-center align-items-center">
    <article className="Main d-block text-center pb-5">
      <FullName fullName="Alican Demirtas" />
      <Profession profession="Full-Stack Developer" />
      <Who />
    </article>
  </section>
);

export default Head;
