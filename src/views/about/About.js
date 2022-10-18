import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about">
      <div className="about-component">
        <h1>About</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO Balana Restaurant</h1>
            <p>
              investigation's demonstraverunt lectors leger me li's quod ii
              legume sardius. Caritas est team process's dyaus, quine sequitur
              mutation's consuetudinal lectors.
            </p>
            <div className="about__btn">
              <a href="about" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/bbq.jpg" alt="Barbie queue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
