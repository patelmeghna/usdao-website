import "./style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Governance from "./Governance/Governance";
import Asset from "./Asset-Token/Asset";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/gov" element={<Governance />} />
  
        <Route path="/asset" element={<Asset />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
