// import { useState } from 'react'
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          {/* Add more routes here as needed */}
        </Routes>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;