import "./style.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Menus from "./views/menu/Menu";
import Delivery from "./views/delivery/Delivery";
import Clients from "./views/clients_Detail/Clients";
import About from "./views/about/About";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menus />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/client" element={<Clients />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
