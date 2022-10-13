import React from "react";

const Home = () => {
  return (
    <div className="hero">
      <div className="banner">
        <div className="banner__content">
          <div className="container">
            <div className="banner__text">
              <h3> Enjoy Trandiional Food</h3>
              <h1>Balana restaurant</h1>
              <p>
                Lorem ipsum dolor sit consectetur adipisicing elit. Excepturi
                minus ut militia error molesting quia.
              </p>
              {/* <div className="banner__btn">
                <a href="header" className="btn btn-smart">
                  DELIVERY NOW
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,0L40,10.7C80,21,160,43,240,53.3C320,64,400,64,480,74.7C560,85,640,107,720,128C800,149,880,171,960,160C1040,149,1120,107,1200,74.7C1280,43,1360,21,1400,10.7L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Home;
