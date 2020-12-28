import React from 'react';
import './BlogPosts.sass';
import BlogPost from './BlogPost/BlogPost';
import data from './data.json';

const BlogPosts = () => (
  <section id="BlogPosts" className="pt-5 pb-3">
    <div className="SectionContainer container">
      <div className="SectionRow row">
        <div className="Header col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3 text-center mb-4 mt-2">
          <h4 className="Text pb-2 mt-2">Blog Posts</h4>
        </div>
        <div className="Filler col-md-2 col-xl-3" />
        {data.map((blogPost) => (
          <BlogPost key={blogPost.id} projectProps={{ ...blogPost }} />
        ))}
        <a
          className="ViewAllButton btn btn-dark py-2 px-3 mt-4 mb-5 d-inline-block col-10 offset-1"
          href="https://www.compositional-it.com/news-blog/author/alican/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="Text h5 mb-0">
            <i className="fas fa-eye fa-1x" />
            {'  View All'}
          </span>
        </a>
      </div>
    </div>
  </section>
);

export default BlogPosts;
