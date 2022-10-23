import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import About from "../../views/about/About";
import Clients from "../../views/clients_Detail/Clients";

import Menus from "../../views/menu/Menu";
import Home from "../../views/home/Home";
import Gallery from "../../views/Gallery/gallery";

const localRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menus />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/client" element={<Clients />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default localRoute;
