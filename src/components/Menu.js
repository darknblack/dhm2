import React from 'react';
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div id="menu">
      <Link to="/"><div>Home</div></Link>
      <Link to="/programs"><div>Programs</div></Link>
      <Link to="/about"><div>About</div></Link>
      <Link to="/about"><div>Events</div></Link>
      <Link to="/about"><div>Admission</div></Link>
      <Link to="/about"><div>Contact Us</div></Link>
    </div>
  )
}

export default Menu;