import React from 'react';
import PropTypes from 'prop-types';

const NavigationLink = ({
  href, text, active, setActive,
}) => (
  <a href={href} onClick={setActive}>
    <div className={`Item ${active && 'Active'}`}>{text}</div>
  </a>
);

NavigationLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default NavigationLink;
