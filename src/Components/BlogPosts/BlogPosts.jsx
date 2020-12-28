import React from 'react';
import './BlogPosts.css';
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
      </div>
    </div>
  </section>
);

export default BlogPosts;
