import React from "react";
import NAVBAR from "../../components/Navbar";
import "./gallery.css";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import BottomNavbar from "../../components/bottom-nav/bottom_navbar";
const Gallery = () => {
  return (
    <div className="gallery-hero">
      <div className="gallery__content">
        <header className="header_nav">
          <NAVBAR />
        </header>
        <h1>Gallery</h1>
      </div>
      <div className="gallery-cards">
        <div className="card">
          <img src="/img/gallery/1.png" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/2.png" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/3.png" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/4.png" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/5.png" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/6.png" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/7.png" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/8.png" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/9.png" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/10.png" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/11.png" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/12.png" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/13.png" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/14.png" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/99.png" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/15.png" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/5.png" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/15.webp" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/16.png" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/17.webp" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/18.webp" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/19.webp" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/20.webp" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/21.webp" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/22.webp" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/23.webp" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/24.webp" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/25.webp" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/29.png" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/28.png" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/31.webp" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/30.png" alt="" />
        </div>
        <div className="card">
          <img src="/img/gallery/27.png" alt="" />
        </div>
      </div>
      <div className="bottom-navbar">
        <div className="down-Div">
          <div className="logo-Div">
            <img src="/img/wow-balana.png" alt="balana restaurant " />
            <h3 style={{ color: "white" }}>Enjoy Tradional & Health Food</h3>
          </div>
          <div className="nav-bar">
            <h2>Quick Links</h2>
            <BottomNavbar />
          </div>
          <div className="social-link">
            <div className="social-icons">
              <h2> Social Links</h2>
              <Facebook sx={{ color: "goldenrod", marginTop: "10px" }} />

              <Instagram sx={{ color: "goldenrod" }} />

              <WhatsApp sx={{ color: "goldenrod" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
