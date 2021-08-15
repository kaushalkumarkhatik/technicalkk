import React from 'react';
import { Link } from "react-router-dom";


const Menu = () => {
  return (
    <>
       <input type="checkbox" id="active" />
      <label for="active" className="menu-btn"><span></span></label>
      <label for="active" className="close"></label>
      <div className="wrapper">

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

      </div>
    < />

  );
}


export default Menu;