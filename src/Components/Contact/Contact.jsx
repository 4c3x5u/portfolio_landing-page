import React from 'react';
import './Contact.css';

const Contact = () => (
  <section id="Contact" className="container-fluid bg-dark py-3 border-top border-dark">
    <h4 className="Header col-6 offset-3 col-lg-4 offset-lg-4 col-xl-2 offset-xl-5 text-center font-weight-bold mt-0 mb-3 pb-1">
      Contact
    </h4>
    <div className="Filler col-xl-4 col-3" />
    <div className="Body col-12 d-flex justify-content-center">
      <a href="http://github.com/4c3x5u" target="_blank" rel="noreferrer" className="Social btn btn-dark d-flex justify-content-center align-items-center rounded my-0">
        <i className="Icon fab fa-github fa-3x" />
      </a>
      <a href="https://www.linkedin.com/in/4c3x5u" target="_blank" rel="noreferrer" className="Social btn btn-dark d-flex justify-content-center align-items-center rounded my-0">
        <i className="Icon fab fa-linkedin-in fa-3x" />
      </a>
      <a href="mailto:4c3x5u@gmail.com" target="_blank" rel="noreferrer" className="Social btn btn-dark d-flex justify-content-center align-items-center rounded my-0">
        <i className="Icon fas fa-at fa-3x" />
      </a>
    </div>

  </section>
);

export default Contact;
