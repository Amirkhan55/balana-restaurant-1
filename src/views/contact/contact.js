import React from "react";
import NAVBAR from "../../components/Navbar";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contact-hero">
      <div className="contact-content">
        <header className="header_nav">
          <NAVBAR />
        </header>
        <h1>Contact</h1>
      </div>
      <div className="form-data">
        <div className="item-1"></div>
        <div className="item-2"></div>
      </div>
    </div>
  );
};

export default Contact;
