import React from 'react';
import './Projects.css';

const Projects = () => (
  <section id="Projects" className="pt-5 pb-3">
    <div className="SectionContainer container">
      <div className="SectionRow row">

        <div className="Header col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3 text-center mb-4 mt-2">
          <h4 className="Text pb-2 mt-2">My Projects</h4>
        </div>
        <div className="Filler col-md-2 col-xl-3"></div>

        <article id="ProjectOne" className="col-10 offset-1 mt-4">
          <div className="Project row">
            <div className="Image col-12 col-xl-5 bg-dark"></div>
            <div className="Body col-12 col-xl-7 bg-light py-4 px-3 text-center">
              <h4 className="Name">Blazin Pizza CO.</h4>
              <p className="Description lead">
                An interactive and responsive Pizza Store application that grants members points
                for the money they spend. The user can later use these points to redeem a free medium pizza.
                Also has a <em>guest</em> option where the point system is not utilized.
              </p>
              <a className="LiveButton btn btn-dark py-2 px-3 mt-3 mb-2 d-inline-block" href="http://www.blazinpizza.co.uk/" target="_blank" rel="noreferrer">
                <span className="Text h5 mb-0"><i className="fas fa-globe"></i> See Live</span>
              </a>
              <a className="CodeButton btn btn-dark py-2 px-3 mt-3 mb-2 d-inline-block" href="https://github.com/demirtasdev/blazinpizzaco" target="_blank" rel="noreferrer">
                <span className="Text h5 mb-0"><i className="fab fa-github"></i> See Code</span>
              </a>
            </div>
          </div>
        </article>

        <article id="ProjectTwo" className="col-10 offset-1 mt-4">
          <div className="Project row">
            <div className="Image col-12 d-xl-none bg-dark"></div>

            <div className="Body col-12 col-xl-7 bg-light py-4 px-3 text-center">
              <h4 className="Name">Konney TM</h4>
              <p className="Description lead">
                An event manager app that lets the user to set up and keep track of events.
                It has an interface for creating people, venues and setting up events that are
                based on a certain venue and has certain people invited to them.
              </p>
              <a className="LiveButton btn btn-dark py-2 px-3 mt-3 mb-2 d-inline-block" href="http://www.konneytm.online/" target="_blank" rel="noreferrer">
                <span className="Text h5 mb-0"><i className="fas fa-globe"></i> See Live</span>
              </a>
              <a className="CodeButton btn btn-dark py-2 px-3 mt-3 mb-2 d-inline-block" href="https://github.com/demirtasdev/konneytm" target="_blank"  rel="noreferrer">
                <span className="Text h5 mb-0"><i className="fab fa-github"></i> See Code</span>
              </a>
            </div>

            <div className="Image d-none d-xl-inline-block col-xl-5"></div>
          </div>
        </article>

        <article id="ProjectThree" className="col-10 offset-1 mt-4">
          <div className="Project row">
            <div className="Image col-12 col-xl-5 bg-dark"></div>
            <div className="Body col-12 col-xl-7 bg-light py-4 px-3 text-center">
              <h4 className="Name">Seneca Bookstore</h4>
              <p className="Description lead">
                An interactive, native-app-like bookstore that allows you to search books by title and sort
                them in a chosen order. It has all the books categorized under authors and genres, which the
                user may navigate through the UI.
              </p>
              <a className="LiveButton btn btn-dark py-2 px-3 mt-3 mb-2 d-inline-block" href="http://www.senecabooks.store" target="_blank" rel="noreferrer">
                <span className="Text h5 mb-0"><i className="fas fa-globe"></i> See Live</span>
              </a>
              <a className="CodeButton btn btn-dark py-2 px-3 mt-3 mb-2 d-inline-block" href="https://github.com/demirtasdev/senecabookstore" target="_blank" rel="noreferrer">
                <span className="Text h5 mb-0"><i className="fab fa-github"></i> See Code</span>
              </a>
            </div>
          </div>
        </article>
            
        {/* <article id="ProjectFour" className="col-10 offset-1 mt-4 mb-5">
          <div className="Project row">
            <div className="Image col-12 d-xl-none bg-dark"></div>
            <div className="Body col-12 col-xl-8 bg-light py-4 px-3 text-center">
              <h4 className="Name">Lorem Ipsum Lorem Ipsum</h4>
              <p className="Description lead">
                            Lorem ipsum lorem ipsum loremlorem ipsum lorem.Lorem ipsum lorem ipsum loremlorem ipsum lorem.
                            Lorem ipsum lorem ipsum loremlorem ipsum lorem.Lorem ipsum lorem ipsum loremlorem ipsum lorem.
                            Lorem ipsum lorem ipsum loremlorem ipsum lorem.
              </p>
              <a className="LiveButton btn btn-dark py-2 px-3 mt-3 mb-2 d-inline-block" href="###" target="_blank">
                <span className="Text h5 mb-0"><i className="fas fa-globe"></i> See Live</span>
              </a>
              <a className="CodeButton btn btn-dark py-2 px-3 mt-3 mb-2 d-inline-block" href="###" target="_blank">
                <span className="Text h5 mb-0"><i className="fab fa-github"></i> See Code</span>
              </a>
            </div>
            <div className="Image d-none d-xl-inline-block col-12 col-xl-4 bg-dark"></div>
          </div>
        </article> */}
      </div>
    </div>
  </section>
);
 
export default Projects;