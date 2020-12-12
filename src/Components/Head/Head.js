import React from 'react';
import './Head.css';
import './bg-pageHead.jpg';
import FullName from './FullName';
import Profession from './Profession';
import Who from './Who';

const Head = () => { 
  return (
    <section id="Head" className="d-flex justify-content-center align-items-center">
      <article className="Main d-block text-center pb-5">
        <FullName fullName="Alican Demirtas" />
        <Profession profession="Functional Programmer" />
        <Who />
      </article>
    </section>
  );
};
 
export default Head;