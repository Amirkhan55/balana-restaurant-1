import "./style.css";
import Navbar from "./components/Navbar";
import Clients from "./views/clients_Detail/Clients";

import About from "./views/about/About";
import Home from "./views/home/Home";
import Menu from "./views/menu/Menu";
import Delivery from "./views/delivery/Delivery";
function App() {
  return (
    <div className="App">
      <header className="header_nav">
        <Navbar />
      </header>

      <Home />

      <Menu />
      <Delivery />
      <Clients />
      <Menu />
      <About />
    </div>
  );
}

export default App;
