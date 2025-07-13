// import { useState } from 'react'
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroLogo from "./components/HeroLogo";
import ScrollToTopButton from "./components/ScrollToTopButton";
import SecondaryNavbar from "./components/SecondaryNavbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <HeroLogo></HeroLogo>
      <SecondaryNavbar></SecondaryNavbar>

      <main className="flex-grow">
        <div className="py-20 px-4 bg-gray-800 text-center text-gray-600 space-y-10">
          {[...Array(20)].map((_, i) => (
            <p key={i} className="text-lg">
              This is sample scroll content line #{i + 1}.
            </p>
          ))}
        </div>
      </main>

      <Footer></Footer>
      <ScrollToTopButton/>  
        </div>
  );
}

export default App;
