import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id="header">
      <div id="top-menu-wrapper">
        <div className="container">
          <div className="top-menu">
            <div className="top-menu-left">Some content here</div>
            <div className="top-menu-right">Login</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="menu-bar">
          <div className="menu-left">
            <Link to="/">
              <div className="logo">LOGO HERE</div>
            </Link>
          </div>
          <div className="menu-right">
            <div id="menu-list" className="menu-left">
              <Link to="/admission">
                <div>Admission</div>
              </Link>
              <Link to="/programs">
                <div>Programs</div>
              </Link>
              <Link to="/news-and-events">
                <div>News & Events</div>
              </Link>
              <Link to="/gallery">
                <div>Gallery</div>
              </Link>
              <Link to="/testimonial">
                <div>Testimonial</div>
              </Link>
              <Link to="/contact">
                <div>Contact</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
