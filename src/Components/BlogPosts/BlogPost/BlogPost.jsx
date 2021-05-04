import React from 'react';
import PropTypes from 'prop-types';
import BlogPostBody from './Body/BlogPostBody';

const BlogPost = ({
  id, title, description, link, rightAlign,
}) => {
  const image = (
    <div className="Image col-12 col-xl-5 bg-dark" />
  );
  const body = (
    <BlogPostBody
      title={title}
      description={description}
      link={link}
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

BlogPost.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  rightAlign: PropTypes.bool.isRequired,
};

export default BlogPost;
