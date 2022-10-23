import React from "react";
import { NavLink } from "react-router-dom";

const NAVBAR = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/wow-balana.png" alt="logo" style={{height:120,width:120}} />
        </div>
        <ul className="navbar__ul">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>

          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          {/* <li>
            <Link activeClass="active" smooth spy to="">
              Contact
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default NAVBAR;
