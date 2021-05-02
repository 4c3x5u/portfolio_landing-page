import React from 'react';
import PropTypes from 'prop-types';

const NavigationLink = ({ href, text }) => (
  <a href={href}>
    <div className="Item">{text}</div>
  </a>
);

NavigationLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavigationLink;
