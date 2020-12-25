import React from 'react';
import PropTypes from 'prop-types';
import ProjectBody from './Body/ProjectBody';

const Project = ({ projectProps }) => {
  const image = (
    <div className="Image col-12 col-xl-5 bg-dark" />
  );
  const body = (
    <ProjectBody
      title={projectProps.title}
      description={projectProps.description}
      liveLink={projectProps.liveLink}
      codeLink={projectProps.codeLink}
    />
  );
  return (
    <article id={projectProps.id} className="col-10 offset-1 mt-4">
      <div className="Project row">
        {
          (projectProps.rightAlign)
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
  projectProps: {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    liveLink: PropTypes.string.isRequired,
    codeLink: PropTypes.string.isRequired,
    rightAlign: PropTypes.bool.isRequired,
  }.isRequired,
};

export default Project;
