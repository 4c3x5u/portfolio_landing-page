import React from 'react';
import './Projects.css';
import Project from './Project';
import ProjectsList from './Projects.json';

const Projects = () => {
  return (
    <section id="Projects" className="pt-5 pb-3">
      <div className="SectionContainer container">
        <div className="SectionRow row">
          <div className="Header col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3 text-center mb-4 mt-2">
            <h4 className="Text pb-2 mt-2">My Projects</h4>
          </div>
          <div className="Filler col-md-2 col-xl-3"></div>
          {ProjectsList.map(projectProps => (
            <Project key={projectProps.id} projectProps={projectProps} />
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default Projects;