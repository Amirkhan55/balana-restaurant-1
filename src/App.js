import "./style.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Menus from "./views/menu/Menu";

import Clients from "./views/clients_Detail/Clients";
import About from "./views/about/About";
import Gallery from "./views/Gallery/gallery";
import Contact from "./views/contact/contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menus />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/client" element={<Clients />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
