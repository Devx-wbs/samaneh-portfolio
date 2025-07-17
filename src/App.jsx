// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import About from "./pages/about";
import Footer from "./components/footer";
import Keysight_pwma from "./pages/projects/Keysight_pwma";
import DarkPatterns from "./pages/DarkPatterns";
import TraverlLink from "./pages/TraverlLink";
import Uxlerator from "./pages/projects/Uxlerator";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* ✅ Smooth scroll on every route change */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/Keysight_pwma" element={<Keysight_pwma />} />
        <Route path="/projects/Dark_Patterns" element={<DarkPatterns />} />
        <Route path="/projects/Travel_Link" element={<TraverlLink />} />
        <Route path="/projects/Uxlerator" element={<Uxlerator />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
