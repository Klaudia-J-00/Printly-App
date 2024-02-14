import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Policy from "./Components/Policy";
import Terms from "./Components/Terms";
import CookieModal from "./Components/CookieModal";
import PriceList from "./Components/PriceList";
import Services from "./Components/Services";
import Baners from "./Components/Baners";
import Cookies from "./Components/Cookies";
import Posters from "./Components/Posters";
import Stickers from "./Components/Stickers";
import Aboards from "./Components/Aboards";
import Rollups from "./Components/Rollups";
import Magnets from "./Components/Magnets";
import "./App.css";

function App() {
  return (
    <Router>
      <MyNavbar />
      <CookieModal />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/price-list" element={<PriceList />} />
        <Route path="/services" element={<Services />} />
        <Route path="/baners" element={<Baners />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/posters" element={<Posters />} />
        <Route path="/stickers" element={<Stickers />} />
        <Route path="/aboards" element={<Aboards />} />
        <Route path="/rollups" element={<Rollups />} />
        <Route path="/magnets" element={<Magnets />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
