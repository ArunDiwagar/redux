import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
 
  return (
    <nav>
      <h1>Arun</h1>
      <ul>
        <li>
        <a href=""><Link to="/">Home</Link></a>
          <a href=""><Link to="/user">User</Link></a>
          <a href=""><Link to="/about">About</Link></a>
          <a href=""><Link to="/contact">Contact</Link></a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
