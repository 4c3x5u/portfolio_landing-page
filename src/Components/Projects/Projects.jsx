import React from 'react';
import './Projects.css';
import Project from './Project/Project';
import ProjectsList from './data';

const Projects = () => (
  <section id="Projects" className="pt-5 pb-3">
    <div className="SectionContainer container">
      <div className="SectionRow row">
        <div className="Header col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3 text-center mb-4 mt-2">
          <h4 className="Text pb-2 mt-2">My Projects</h4>
        </div>
        <div className="Filler col-md-2 col-xl-3" />
        {ProjectsList.map((projectProps) => (
          <Project key={projectProps.id} projectProps={projectProps} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
