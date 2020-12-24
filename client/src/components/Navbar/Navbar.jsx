import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className=" Navbar navbar navbar-expand-sm navbar-light bg-light">
        <h1>kay</h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul classNameName="Navbar-links navbar-nav mr-auto">
            <li classNameName="Navbar-link nav-item">
              <Link to="/">
                About Me
              </Link>
            </li>

            <li classNameName="Navbar-link nav-item">
              <Link to="/projects">
                View Projects
              </Link>
            </li>

            <li classNameName="Navbar-link nav-item">
              <Link to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

