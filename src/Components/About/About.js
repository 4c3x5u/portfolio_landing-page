import React from 'react';
import './About.css';

const About = () => (
  <section id="About" className="py-5">

    <article className="Main container">
      <div className="MainRow row text-center my-4">

        <div id="Portrait" className="col-12 mb-5">
          <div className="Image mx-auto rounded-circle"></div>
        </div>

        <div id="Bio" className="col-10 offset-1 pb-2 pt-1 mt-2 mb-4">
          <span className="Text lead">
            I am a self-taught web developer with more than a year of experience developing software.<br />
            I finally feel ready to look for a job in the field, and I am looking for a company<br />
            that will provide a challenging environment in which I may be able to learn and grow.<br />
            Despite my lack of commercial experience,<br/> I am a resourceful, attentive and diligent potential employee. <br />
          </span>
        </div>

      </div>
    </article>

    <article id="Skills" className="text-center pt-1 pb-5">
      <div className="SectionContainer container">
        <div className="Main pt-4">

          <h4 className="Header col-4 offset-4 display-5 mt-0 pb-2 pt-0 mb-0 text-center font-weight-bold">
              Key Skills
          </h4>
          <div className="Filler col-4"></div>

          <div className="SkillsRow row mb-5 pb-3">

            <div className="Skill col-6 col-md-4 col-xl-2 text-light">
              <i className="Icon far fa-window-restore fa-6x mt-4 px-4 pb-3 rounded-circle "></i>
              <h5 className="Name mb-2">HTML / CSS / JS</h5>
              <h6 className="Description">Web Development Fundamentals</h6>
            </div>

            <div className="Skill col-6 col-md-4 col-xl-2 text-light">
              <i className="Icon fas fa-code fa-6x mt-4 px-4 pb-3 rounded-circle "></i>
              <h5 className="Name mb-1">C# .NET</h5>
              <h6 className="Description">Object Oriented Programming</h6>
            </div>

            <div className="Skill col-6 col-md-4 col-xl-2 text-light">
              <i className="Icon fas fa-laptop-code fa-6x mt-4 px-4 pb-3 rounded-circle"></i>
              <h5 className="Name mb-1">ASP.NET MVC 5</h5>
              <h6 className="Description">Model-View-Controller</h6>
            </div>

            <div className="Skill col-6 col-md-4 col-xl-2 text-light">
              <i className="Icon fas fa-server fa-6x mt-4 px-4 pb-3 rounded-circle"></i>
              <h5 className="Name mb-1">SQL Server 2016</h5>
              <h6 className="Description">Relational Database Development</h6>
            </div>

            <div className="Skill col-6 col-md-4 col-xl-2 text-light">
              <i className="Icon fab fa-etsy fa-6x mt-4 px-4 pb-3 rounded-circle"></i>
              <h5 className="Name mb-1">Entity Framework</h5>
              <h6 className="Description">Object Relational Mapping (LINQ)</h6>
            </div>

            <div className="Skill col-6 col-md-4 col-xl-2 text-light">
              <i className="Icon fab fa-bootstrap fa-6x mt-4 px-4 pb-3 rounded-circle"></i>
              <h5 className="Name mb-1">Bootstrap</h5>
              <h6 className="Description">Mobile-First Responsive Design</h6>
            </div>

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

  </section>
);
 
export default About;