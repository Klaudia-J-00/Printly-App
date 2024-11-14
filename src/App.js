import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Policy from "./Components/Policy";
import Terms from "./Components/Terms";
import CookieModal from "./Components/CookieModal";
import Services from "./Components/Services";
import Baners from "./Components/Baners";
import Posters from "./Components/Posters";
import Stickers from "./Components/Stickers";
import Aboards from "./Components/Aboards";
import Rollups from "./Components/Rollups";
import Magnets from "./Components/Magnets";
import About from "./Components/About";
import Foil from "./Components/Foil";
import Cookies from "./Components/Cookies";
import ScrollToTop from "./Components/ScrollToTop"; // Import the ScrollToTop component
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MyNavbar />
      <CookieModal />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/services" element={<Services />} />
        <Route path="/baners" element={<Baners />} />
        <Route path="/posters" element={<Posters />} />
        <Route path="/stickers" element={<Stickers />} />
        <Route path="/aboards" element={<Aboards />} />
        <Route path="/rollups" element={<Rollups />} />
        <Route path="/magnets" element={<Magnets />} />
        <Route path="/foil" element={<Foil />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
