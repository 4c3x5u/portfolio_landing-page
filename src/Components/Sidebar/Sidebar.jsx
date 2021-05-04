import React, { useState, useEffect, createRef } from 'react';
import './Sidebar.sass';
import NavigationLink from './NavigationLink/NavigationLink';

const Sidebar = () => {
  const toggler = createRef();
  const nav = createRef();
  useEffect(() => {
    toggler.current.classList.add('animated', 'wobble', 'delay-2s');
  }, []);

  const navLinkNames = ['Head', 'About', 'Projects', 'BlogPosts', 'Contact'];
  const [activeLink, setActiveLink] = useState('');
  // eslint-disable-next-line no-undef
  window.onscroll = () => setActiveLink('');

  const toggleNav = () => {
    toggler.current.classList.toggle('on');
    nav.current.classList.toggle('on');
    // eslint-disable-next-line no-undef
    document.body.classList.toggle('on');
  };
  return (
    <div id="Sidebar">
      <button
        type="button"
        ref={toggler}
        className="Toggler btn btn-dark"
        onClick={toggleNav}
      >
        <i className="Icon far fa-compass fa-3x" />
      </button>
      <div ref={nav} className="Nav d-flex align-items-center text-center">
        <div className="Links d-block w-100">
          {navLinkNames.map((name) => (
            <NavigationLink
              text={name}
              href={`#${name}`}
              active={activeLink === name}
              setActive={() => setTimeout(() => setActiveLink(name), 1000)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
