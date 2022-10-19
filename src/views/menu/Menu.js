import React from "react";
import NAVBAR from "../../components/Navbar";
import "./menu.css";
const Menus = () => {
  return (
    <div className="menu-hero">
      <div className="menu-components">
        <header className="header_nav">
          <NAVBAR />
        </header>
        <h1>Menu </h1>
      </div>
      <div className="types-of-menu">
        <div className="menu-item">
          <div className="menu-item-pic">
            <img src="/img/bbq.jpg" alt="bbq text" />
          </div>
          <div className="menu-item-content">
            <h1>Maghaz / Chanp</h1>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-item-pic">
            <img src="/img/bbq.jpg" alt="bbq text" />
          </div>
          <div className="menu-item-content">
            <h1>Maghaz / Chanp</h1>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-item-pic">
            <img src="/img/bbq.jpg" alt="bbq text" />
          </div>
          <div className="menu-item-content">
            <h1>Maghaz / Chanp</h1>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-item-pic">
            <img src="/img/bbq.jpg" alt="bbq text" />
          </div>
          <div className="menu-item-content">
            <h1>Maghaz / Chanp</h1>
            <p>Maghaz / Chanp (Per Serving)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;
