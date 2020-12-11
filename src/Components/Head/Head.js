import React from 'react';
import './Head.css';
import './bg-pageHead.jpg';

const Head = () => ( 
  <section className="Head d-flex justify-content-center align-items-center">
    <article className="Main d-block text-center pb-5">
      <h1 className="FullName text-light d-sm-none d-block mb-0">
          Alican Demirtas
      </h1>
      <h1 className="FullName animated text-light d-none d-sm-block mb-0">
          Alican Demirtas
      </h1>
      <h2 className="Profession d-sm-none d-block text-light mt-0 pb-2">
          .NET Developer
      </h2>
      <h2 className="Profession animated d-none d-sm-block text-light mt-0 pb-2 ">
          .NET Developer
      </h2>
      <a className="AboutButton animated btn btn-outline-light py-2 px-3 d-sm-none" href="#About">
        <span className="Text h3">Who?!</span>
      </a>
      <div className="OuterAboutAnimation mt-5 d-none d-sm-block">
        <div className="InnerAboutAnimation">
          <a className="AboutButton animated btn btn-outline-light py-2 px-3" href="#About">
            <span className="Text h3">Who?!</span>
          </a>
        </div>
      </div>
    </article>
  </section>
 );
 
export default Head;