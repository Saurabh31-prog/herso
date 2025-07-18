// import { useState } from 'react'
import "./App.css";
import { Routes, Route, useLocation,Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//components
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroLogo from "./components/HeroLogo";
import ScrollToTopButton from "./components/ScrollToTopButton";
import SecondaryNavbar from "./components/SecondaryNavbar";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
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
          <Outlet />  {/* Use Outlet to render nested routes */}
        </AnimatePresence>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
