import React, { createRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Profession = ({ profession }) => {
  const animated = createRef();
  useEffect(() => (
    animated.current.classList.add('fadeInRight', 'delay-1s')
  ), []);
  return (
    <>
      <h2 ref={animated} className="Profession d-sm-none d-block text-light mt-0 pb-2">
        {profession}
      </h2>
      <h2 ref={animated} className="Profession animated d-none d-sm-block text-light mt-0 pb-2 ">
        {profession}
      </h2>
    </>
  );
};

Profession.propTypes = {
  profession: PropTypes.string.isRequired,
};

export default Profession;
