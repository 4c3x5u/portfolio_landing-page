import React from 'react';
import Project from './Project/Project';

import data from './data';

import './Projects.sass';

const Projects = () => (
  <section id="Projects" className="pt-5 pb-3">
    <div className="SectionContainer container">
      <div className="SectionRow row mb-5">
        <div
          className={'Header col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3'
                     + ' text-center mb-4 mt-2'}
        >
          <h4 className="Text pb-0 pt-1">My Projects</h4>
        </div>
        <div className="Filler col-md-2 col-xl-3" />
        {data.map((project) => (
          <Project key={project.id} projectProps={{ ...project }} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
