// import { useState } from 'react'
import "./App.css";
import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//components
import Footer from "./components/Footer";
import HeroLogo from "./components/HeroLogo";
import ScrollToTopButton from "./components/ScrollToTopButton";
import SecondaryNavbar from "./components/SecondaryNavbar";
import ScrollToTop from "./components/ScrollToTop";
import SidebarWrapper from "./components/Sidebar";

function App() {  
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen no-overscroll">
      <ScrollToTop />
          <SidebarWrapper />

      {/* Navbar always visible */}
      <SecondaryNavbar />

      {/* Show Header and HeroLogo ONLY on Home */}
      {isHome && (
        <>
          <HeroLogo />
        </>
      )}

      {/* Main content area */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <ScrollToTop/>
          <Outlet /> {/* Use Outlet to render nested routes */}
        </AnimatePresence>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
