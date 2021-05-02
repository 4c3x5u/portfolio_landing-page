import React, { createRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const FullName = ({ fullName }) => {
  const animated = createRef();
  useEffect(() => (
    animated.current.classList.add('fadeInLeft', 'delay-1s')
  ), []);
  return (
    <>
      <h1
        ref={animated}
        className="FullName text-light d-sm-none d-block mb-0"
      >
        {fullName}
      </h1>
      <h1
        ref={animated}
        className="FullName animated text-light d-none d-sm-block mb-0"
      >
        {fullName}
      </h1>
    </>
  );
};

FullName.propTypes = {
  fullName: PropTypes.string.isRequired,
};

export default FullName;
