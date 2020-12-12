import React from 'react';
import Skill from './Skill';

const KeySkills = () => (
  <article id="Skills" className="text-center pt-1 pb-5">
    <div className="SectionContainer container">
      <div className="Main pt-4">

        <h4 className="Header col-4 offset-4 display-5 mt-0 pb-2 pt-0 mb-0 text-center font-weight-bold">
            Key Skills
        </h4>
        <div className="Filler col-4"></div>

        <div className="SkillsRow row mb-5 pb-3">
          <Skill icon="far fa-window-restore" name="HTML / CSS / JS" description="Web Development Fundamentals" />
          <Skill icon="fas fa-code" name="C# .NET" description="Object Oriented Programming" />
          <Skill icon="fas fa-laptop-code" name="ASP.NET MVC 5" description="Model-View-Controller" />
          <Skill icon="fas fa-server" name="SQL Server 2016" description="Relational Database Development" />
          <Skill icon="fab fa-etsy" name="Entity Framework" description="Object Relational Mapping (LINQ)" />
          <Skill icon="fab fa-bootstrap" name="Bootstrap" description="Mobile-First Responsive Design" />
        </div>

        <a id="ProjectsButton" href="#Projects" className="btn btn-outline-light py-2 px-3 mt-3 mb-2 mx-2 d-inline-block">
          <span className="Text h3 mb-0">See Projects</span>
        </a>
        <a id="CvButton" className="btn btn-dark py-2 px-3 mt-3 mb-2 mx-2 mx-2" href="~/Images/DemirtasResume.pdf" download>
          <span className="Text h3 mb-0">Download CV</span>
        </a>

      </div>
    </div>
  </article>
);
 
export default KeySkills;