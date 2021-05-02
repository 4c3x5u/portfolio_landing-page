import React from 'react';
import './Contact.sass';

const Contact = () => (
  <section
    id="Contact"
    className="container-fluid bg-dark py-3 border-top border-dark"
  >
    <h4
      className={'Header col-6 offset-3 col-lg-4 offset-lg-4 col-xl-2'
                 + ' offset-xl-5 text-center font-weight-bold mt-0 mb-3'}
    >
      Contact
    </h4>
    <div className="Filler col-xl-4 col-3" />
    <div className="Body col-12 d-flex justify-content-center">
      <a
        href="http://github.com/alicandev"
        target="_blank"
        rel="noreferrer"
        className={'Social btn btn-dark d-flex justify-content-center'
                   + 'align-items-center rounded my-0'}
      >
        <i className="Icon fab fa-github mr-1" />
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/4c3x5u"
        target="_blank"
        rel="noreferrer"
        className={'Social btn btn-dark d-flex justify-content-center'
                   + ' align-items-center rounded my-0'}
      >
        <i className="Icon fab fa-linkedin mr-1" />
        LinkedIn
      </a>
      <a
        href="mailto:alicandev@icloud.com"
        target="_blank"
        rel="noreferrer"
        className={'Social btn btn-dark d-flex justify-content-center'
                   + 'align-items-center rounded my-0'}
      >
        <i className="Icon fas fa-at mr-1" />
        Email
      </a>
    </div>

  </section>
);

export default Contact;
