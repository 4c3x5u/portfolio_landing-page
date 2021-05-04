import React from 'react';
import PropTypes from 'prop-types';
import ProjectBody from './Body/ProjectBody';

const Project = ({
  id, title, description, liveLink, codeLink, rightAlign,
}) => {
  const image = (
    <div className="Image col-12 col-xl-5 bg-light" />
  );
  const body = (
    <ProjectBody
      title={title}
      description={description}
      liveLink={id !== 'LandingPage' ? liveLink : ''}
      codeLink={codeLink}
    />
  );
  return (
    <article id={id} className="col-10 offset-1 mt-4">
      <div className="Project row">
        {
          (rightAlign)
            ? (
              <>
                {' '}
                {image}
                {' '}
                {body}
                {' '}
              </>
            )
            : (
              <>
                {' '}
                {body}
                {' '}
                {image}
                {' '}
              </>
            )
        }
      </div>
    </article>
  );
};

Project.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  codeLink: PropTypes.string.isRequired,
  rightAlign: PropTypes.bool.isRequired,
};

export default Project;
