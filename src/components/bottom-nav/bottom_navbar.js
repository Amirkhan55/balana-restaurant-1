import { ArrowForwardIosOutlined } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import "./bottom_navigation_bar.css";
const BottomNavbar = () => {
  return (
    <div className="bottom_navigatiom_bar">
      <nav className="Nav_Bar">
        <ul>
          <li>
            {" "}
            <NavLink to="/home">
              <ArrowForwardIosOutlined
                fontSize="small"
                sx={{ color: "goldenrod" }}
              />{" "}
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about">
              <ArrowForwardIosOutlined
                fontSize="small"
                sx={{ color: "goldenrod" }}
              />{" "}
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <ArrowForwardIosOutlined
                fontSize="small"
                sx={{ color: "goldenrod" }}
              />{" "}
              Menu
            </NavLink>
          </li>

          <li>
            <NavLink to="/gallery">
              <ArrowForwardIosOutlined
                fontSize="small"
                sx={{ color: "goldenrod" }}
              />
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <ArrowForwardIosOutlined
                fontSize="small"
                sx={{ color: "goldenrod" }}
              />
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNavbar;
