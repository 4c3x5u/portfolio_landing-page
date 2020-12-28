import React from 'react';
import PropTypes from 'prop-types';
import BlogPostBody from './Body/BlogPostBody';

const BlogPost = ({ projectProps }) => {
  const image = (
    <div className="Image col-12 col-xl-5 bg-dark" />
  );
  const body = (
    <BlogPostBody
      title={projectProps.title}
      description={projectProps.description}
      link={projectProps.link}
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

BlogPost.propTypes = {
  projectProps: {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    rightAlign: PropTypes.bool.isRequired,
  }.isRequired,
};

export default BlogPost;
