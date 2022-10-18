import React from "react";
import { NavLink } from "react-router-dom";

import { Link } from "react-scroll";
import "./bottom_navigation_bar.css";
const BottomNavbar = () => {
  return (
    <div className="bottom_navigatiom_bar">
      <nav className="Nav_Bar">
        <ul>
          <li> <NavLink to="/home">Home</NavLink></li>

        <li>
          <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>


          <li>
          <NavLink to="/delivery">Delivery</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNavbar;
