import "./style.css";
import Navbar from "./components/Navbar";

import Home from "./views/home/Home";

function App() {
  return (
    <div className="App">
      <header className="header_nav">
        <Navbar />
      </header>
      <Home />
      {/* <Menu />
      <Delivery />
      <Clients />
      <About /> */}
    </div>
  );
}

export default App;
