import React from 'react';

const Bio = () => (  
  <article className="Main container">
    <div className="MainRow row text-center my-4">

      <div id="Portrait" className="col-12 mb-5">
        <div className="Image mx-auto rounded-circle"></div>
      </div>

      <div id="Bio" className="col-10 offset-1 pb-2 pt-1 mt-2 mb-4">
        <span className="Text lead">
          I am a self-taught web developer with more than a year of experience developing software.<br />
          I finally feel ready to look for a job in the field, and I am looking for a company<br />
          that will provide a challenging environment in which I may be able to learn and grow.<br />
          Despite my lack of commercial experience,<br/> I am a resourceful, attentive and diligent potential employee. <br />
        </span>
      </div>

    </div>
  </article>
);
 
export default Bio;