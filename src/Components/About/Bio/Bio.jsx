import React from 'react';

const Bio = () => (
  <article className="Main container">
    <div className="MainRow row text-center my-4">

      <div id="Portrait" className="col-12 mb-5">
        <div className="Image mx-auto rounded-circle" />
      </div>

      <div id="Bio" className="col-10 offset-1 pb-2 pt-1 mt-2 mb-4">
        <span className="Text lead">
          I am a full-stack F# developer – a functional-first, cross-paradigm
          <br />
          programming language from the .NET development stack.
          <br />
          I am looking to move over to the world of Python and JavaScript.
          {' '}
          Ideally, a Django
          <br />
          backend and React/Redux frontend environment, but I am open to a
          {' '}
          variety of tech stacks.
          <br />
          I am a resourceful, attentive, and diligent potential employee,
          <br />
          as well as a dynamic team player who loves working with others.
        </span>
      </div>

    </div>
  </article>
);

export default Bio;
