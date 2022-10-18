import React from "react";
import NAVBAR from "../../components/Navbar";
const Delivery = () => {
  return (
    <div className="shop">
        <header className="header_nav">
        <NAVBAR/>
      </header>
      <div className="container">
        <div className="shop__text">
          <div>
            <h1>Free Delivery with Small pizza</h1>
            <div className="shop__btn">
              <a href="about" className="btn btn-smart">
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
