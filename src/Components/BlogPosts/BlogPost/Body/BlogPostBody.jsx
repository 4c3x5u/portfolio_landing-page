import React from 'react';
import PropTypes from 'prop-types';

const BlogPostBody = ({
  title, description, link,
}) => (
  <div className="Body col-12 col-xl-7 bg-light py-4 px-3 text-center">
    <h4 className="Name">{title}</h4>
    <p className="Description lead">{description}</p>
    <a className="ViewButton btn btn-dark py-2 px-3 mt-3 mb-2 d-inline-block" href={link} target="_blank" rel="noreferrer">
      <span className="Text h5 mb-0">
        <i className="fas fa-eye" />
        {'  View'}
      </span>
    </a>
  </div>
);

BlogPostBody.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default BlogPostBody;
