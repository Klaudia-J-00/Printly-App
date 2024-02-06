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
        {/* Dodaj tutaj inne trasy */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
