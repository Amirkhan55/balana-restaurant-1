import { Apple, CardTravelSharp } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="hero">
      <div className="banner-image">
        <div className="banner__content">
          <div className="container">
            <div className="banner__text">
              <h3> Enjoy Trandiional Food</h3>
              <h1>Balana restaurant</h1>

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
            fill="#fff"
            fill-opacity="1"
            d="M0,224L48,224C96,224,192,224,288,224C384,224,480,224,576,224C672,224,768,224,864,240C960,256,1056,288,1152,277.3C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="about-restaurant">
        <div className="intro_of_restaurant">
          <span>INTRODUCTION OF BALANA RESTAURANT</span>
          <h1>TRADITIONAL AFGHANI FLAVOURS</h1>
          <h1>UNDER ONE ROOF!</h1>
        </div>
        <div className="detail_of_restaurant">
          <div className="item">
            <img src="/img/chickenRost.jpg" alt="chicken pic" />
          </div>
          <div className="item">
            <p>
              A restaurant doesn’t just have to be a place; it has a character.
              Kabul restaurant started in 1983, a good restaurant with a
              pleasing ambience, quality and delicious food. Being one of the
              most famous restaurants in F7 Markaz, Islamabad provides a variety
              of appetizer’s, delicious Afghani food, and signature service with
              a presentation style
            </p>
            <div className="Button-Div">
              <Button variant="contained">Read More</Button>
            </div>
            <br />
            <br />
            <div className="medium-Div">
              <h1>Need info? Call us</h1>
              <h1>(051) 2650953</h1>
            </div>
          </div>
        </div>
        <div className="last-Div">
          <h1>Relax, UNWIND AND ENJOY </h1>
          <p>FOOD design and environment all create a pleasant experiance</p>

          <div className="items-containner">
            <div className="item-1">
              <div className="image-Div">
                <div className="icon-Div">
                  <Apple />
                </div>
              </div>
              <div className="item-containt">
                <h1>Health Food</h1>
                <p>
                  Traditional Afghani food with delicious flavors, with the best
                  ingredients, is something you’ll remember.
                </p>
                <p>
                  Traditional Afghani food with delicious flavors, with the best
                  ingredients, is something you’ll remember.
                </p>
              </div>
            </div>
            <div className="item-2">
              <div className="image-Div">
                <div className="icon-Div">
                  <CardTravelSharp />
                </div>
              </div>
              <div className="item-containt">
                <h1>Health Food</h1>
                <p>
                  Traditional Afghani food with delicious flavors, with the best
                  ingredients, is something you’ll remember.
                </p>
                <p>
                  Traditional Afghani food with delicious flavors, with the best
                  ingredients, is something you’ll remember.
                </p>
              </div>
            </div>
          </div>
          <div className="taste-Div">
            <h1>Follow Your Taste</h1>
            <span>
              A restaurant with a menu that will excite your taste buds.
            </span>
            <div className="taste-items-1">
              <div className="taste-item">
                <img src="/img/chicken-rost.png" alt="meat" />
                <h2>CHICKEN ROAST</h2>
                <Button variant="contained">Show more</Button>
              </div>
              <div className="taste-item">
                <img src="/img/food.jpg" alt="meat" />
                <h2>CHICKen tandoori</h2>
                <Button variant="contained">Show more</Button>
              </div>
              <div className="taste-item">
                <img src="/img/bbq.jpg" alt="meat" />
                <h2>Chicken malai</h2>
                <Button variant="contained">Show more</Button>
              </div>
            </div>
            <div className="taste-items-2">
              <div className="taste-item">
                <img src="/img/rice.jpg" alt="meat" />
                <h2>Chawal </h2>
                <Button variant="contained">Show more</Button>
              </div>
              <div className="taste-item">
                <img src="/img/chickenMalai.jpeg" alt="meat" />
                <h2>Chicken Malai</h2>
                <Button variant="contained">Show more</Button>
              </div>
              <div className="taste-item">
                <img src="/img/rostChicken.jpg" alt="meat" />
                <h2>Chicken malai</h2>
                <Button variant="contained">Show more</Button>
              </div>
            </div>
          </div>
          <div className="btn_color ">
            <Button variant="contained">View Over Full Menu</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
