import React from "react";
import "./about.css";
import NAVBAR from "../../components/Navbar";
import { Check } from "@mui/icons-material";
import BottomNavbar from "../../components/bottom-nav/bottom_navbar";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
const About = () => {
  return (
    <div className="about">
       <header className="header_nav">
          <NAVBAR />
        </header>
      <div className="about-component">

        <h3>About us</h3>
      </div>
      <div className="about_us">
        <div className="about_us_items">
          <div className="about_us_item">
            <p>INTRODUCTION OF BALANA AFGHAN RESTAURANT</p>
            <h1 style={{ color: "black" }}>
              TRADITIONAL AFGHANI FLAVORS <br /> UNDER ONE ROOF!
            </h1>

            <div className="about_us_pic">
              <img src="/img/bbq.jpg" alt="" />
            </div>
            <div className="Need_info">
              <h2>Need info? Call us</h2>
              <h2>(051) 2650953</h2>
            </div>
          </div>
          <div className="about_us_content">
            <span> About us: </span>
            <p>
              BALANA Afghan offers a full array of succulent Afghan dishes to
              dine out at our restaurant in F8 Markaz, Islamabad and to take
              away. Enjoy the mysteries of Afghanistan's delicately delicious
              mild ground meat sauces including Tikka and Karhahi.
            </p>
            <p>
              Our Afghan-spiced Tikka and kebabs, marinated with herbs and
              spices and lightly seasoned, broiled with onions and peppers, and
              served with Kabulai Pulao (Rice) and salad. Choose from a large
              selection of Vegetarian dishes, all cooked with fresh sauces and
              herbs, served with Rice, salad.
            </p>
            <p>
              BALANA Afghan Restaurant offers a full array of titillating Afghan
              dishes for your dining pleasure
            </p>
            <p>
              Be our guest and Share our gourmet traditional grilled Beep /
              Mutton Tikka and kebabs, our unique Qabli palaw, with traditional
              afghan and you will come back for the mouth-watering Afghan
              cuisine.
            </p>
            <div className="about-feature">
              <p>
                <Check /> Atmosphere: Traditional but elegant
              </p>
              <p>
                <Check />
                Tasty food, at reasonable prices
              </p>
              <p>
                <Check />
                Tasty food, at reasonable prices
              </p>
              <p>
                <Check />
                The facility of Indoor/Outdoor serving
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <h1 style={{ margin: 10 }}>TESTIMONIALS </h1>
        <p style={{ margin: 50 }}>
          We are always keen to serve our clients because they are the source of
          our success.
        </p>
        <div className="testimonials-cards">
          <div className="testimonial-card">
            <p>
              In my opinion, Kabul restaurant is the best Afghan Restaurant in
              Islamabad. The quality, quantity, and taste of the food are
              amazing value for money.
            </p>
            <h3>-Salmaan Saleem</h3>
          </div>
          <div className="testimonial-card">
            <p>
              It was an incredible dinner there. Traditional foods tantalize
              your taste buds. The mesmerizing smoke from the grill adds more
              flavor to your food.
            </p>
            <h3>-Bilal Khan</h3>
          </div>
          <div className="testimonial-card">
            <p>
              If you're in the mood of eating Afghani dishes, rush to The Kabul
              Restaurant. A cozy and comfortable place for dining in with
              friends and family.
            </p>
            <h3>-Romaisa Hasham</h3>
          </div>
        </div>
      </div>

      <div className="bottom-nav">
        <div className="logo-Div">
          <div className="logo-1">
            <img src="/img/wow-balana.png" alt="balana restaurant " />
          </div>
        </div>
        <div className="nav-bar">
          <BottomNavbar />
        </div>
        <div className="social-link">
          <Facebook sx={{ color: "goldenrod" }} />
          <br />
          <Instagram sx={{ color: "goldenrod" }} /> <br />
          <WhatsApp sx={{ color: "goldenrod" }} /> <br />
        </div>
      </div>
    </div>
  );
};

export default About;
