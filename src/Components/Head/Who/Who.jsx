import React, { createRef, useEffect } from 'react';

const Who = () => {
  const animatedOuter = createRef();
  const animatedInner = createRef();
  useEffect(() => {
    animatedOuter.current.classList.add('animated', 'fadeInUp', 'delay-2s');
    animatedInner.current.classList.add('animated', 'fadeIn', 'delay-3s');
  }, []);
  return (
    <>
      <a className="AboutButton animated btn btn-outline-light py-2 px-3 d-sm-none" href="#About">
        <span className="Text h3">Who?!</span>
      </a>
      <div ref={animatedOuter} className="OuterAboutAnimation mt-5 d-none d-sm-block">
        <div ref={animatedInner} className="InnerAboutAnimation">
          <a className="AboutButton animated btn btn-outline-light py-2 px-3" href="#About">
            <span className="Text h3">Who?!</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Who;
