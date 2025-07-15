// import { useState } from 'react'
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";


//components
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroLogo from "./components/HeroLogo";
import ScrollToTopButton from "./components/ScrollToTopButton";
import SecondaryNavbar from "./components/SecondaryNavbar";
import ScrollToTop from "./components/ScrollToTop";


//import Secondary navbar links
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Contact from "./pages/Contact";
import Management from "./pages/Management";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop/>
      {/* Show Header and HeroLogo ONLY on Home */}
      {isHome && (
        <>
          <Header />
          <HeroLogo />
        </>
      )}

      {/* Navbar always visible */}
      <SecondaryNavbar />

        {/* Main content area */}
      <main className="flex-grow">
  <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/management" element={<Management />} />
    </Routes>
  </AnimatePresence>
</main>


      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;