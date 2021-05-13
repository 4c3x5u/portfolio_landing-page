import React, { createRef, useEffect } from 'react';

const Who = () => {
  const animatedInner = createRef();
  useEffect(() => {
    animatedInner.current.classList.add('animated', 'fadeInUp', 'delay-1s');
  }, []);
  return (
    <div ref={animatedInner} className="InnerAboutAnimation mt-3">
      <a
        className="AboutButton animated btn btn-outline-light py-2 px-3"
        href="#About"
      >
        <span className="Text h3">Who?!</span>
      </a>
    </div>
  );
};

export default Who;
