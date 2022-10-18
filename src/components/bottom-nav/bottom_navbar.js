import React from "react";

import { Link } from "react-scroll";
import "./bottom_navigation_bar.css";
const BottomNavbar = () => {
  return (
    <div className="bottom_navigatiom_bar">
      <nav className="navbar">
        <ul>
          <li to="/home">Home</li>
          <li>
            <Link to="menu">Menu</Link>
          </li>

          <li>
            <Link to="shop">Delivery</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNavbar;
