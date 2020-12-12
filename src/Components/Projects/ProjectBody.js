import React from 'react';
import PropTypes from 'prop-types';

const ProjectBody = ({title, description, liveLink, codeLink}) => (
  <div className="Body col-12 col-xl-7 bg-light py-4 px-3 text-center">
    <h4 className="Name">{title}</h4>
    <p className="Description lead">{description}</p>
    <a className="LiveButton btn btn-dark py-2 px-3 mt-3 mb-2 d-inline-block" href={liveLink} target="_blank" rel="noreferrer">
      <span className="Text h5 mb-0"><i className="fas fa-globe"></i> See Live</span>
    </a>
    <a className="CodeButton btn btn-dark py-2 px-3 mt-3 mb-2 d-inline-block" href={codeLink} target="_blank" rel="noreferrer">
      <span className="Text h5 mb-0"><i className="fab fa-github"></i> See Code</span>
    </a>
  </div>
);

ProjectBody.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired, 
  codeLink: PropTypes.string.isRequired, 
};
 
export default ProjectBody;