import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({icon, name, description}) => (  
  <div className="Skill col-6 col-md-4 col-xl-2 text-light">
    <i className={`Icon fa-6x mt-4 px-4 pb-3 rounded-circle ${icon}`}></i>
    <h5 className="Name mb-2">{name}</h5>
    <h6 className="Description">{description}</h6>
  </div>
);

Skill.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
 
export default Skill;