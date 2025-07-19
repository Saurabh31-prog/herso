import { useLocation } from "react-router-dom";

import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

//framer
import { motion } from "framer-motion";

function SecondaryNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  //for dropdown to close when clicked anywhere in page
  const dropdownRef = useRef(null);

  //setup for scrolldetection for glass-effect
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      // console.log("Scroll position:", window.scrollY);
      setScrolled(window.scrollY > 261.7475891113281); // 👈 should trigger only after 1000px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]); // 👈 make sure `isHome` is in dependency array

  //for dropdown to close when clicked anywhere in page
  useEffect(() => {
    const handleClickOutside = (even) => {
      if (dropdownRef.current && !dropdownRef.current.contains(even.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const dropdownTimeout = useRef(null);

  return (
    <motion.nav
      className={`
        ${
          scrolled
            ? "bg-white/30 backdrop-blur-lg shadow-lg text-gray-900 fixed top-4 left-0 right-0 mx-6 rounded-lg z-50 transition-all duration-500 border border-gray-500"
            : isHome
            ? "bg-[#2f4f4f] text-white sticky top-0 w-full z-50 transition-all duration-500"
            : "bg-[#2f4f4f] text-white fixed top-0 left-0 w-full z-50 transition-all duration-500"
        } py-2 px-4 sm:py-4 sm:px-6
 select-none caret-transparent`}
      style={
        scrolled
          ? {
              maxWidth: "calc(100vw - 3rem)",
              marginLeft: "auto",
              marginRight: "auto",
            }
          : {}
      }
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        {/* Toggle Button for Mobile  hamburger menu and close button*/}
        <div className="md:hidden flex-1">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="text-white text-2xl focus:outline-none relative w-8 h-8"
          >
            <span
              className={`absolute inset-0 flex items-center justify-center leading-none transition-all duration-300 ease-in-out transform ${
                isMobileOpen
                  ? "opacity-0 scale-90 rotate-45"
                  : "opacity-100 scale-100 rotate-0"
              }`}
            >
              <FaBars size={24} />
            </span>

            <span
              className={`absolute inset-0 flex items-center justify-center leading-none transition-all duration-300 ease-in-out transform ${
                isMobileOpen
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-90 -rotate-45"
              }`}
            >
              <FiX size={28} />
            </span>
          </button>
        </div>

        {/* Desktop{full-screen} Nav Links */}
        <ul className="hidden md:flex space-x-6 uppercase text-sm font-semibold tracking-wide">
          <li className="relative group cursor-pointer">
            <span className="relative inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-105 hover:text-cyan-400">
              <Link className="font-IBMPlexSans font-light" to="/">
                Home
              </Link>
              <span className="absolute bottom-0 left-0 h-[1px] w-full scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left bg-cyan-400 transition-transform duration-300 ease-in-out" />
            </span>
          </li>

          {/*about society and dropdown */}
          <li className="relative group cursor-pointer" ref={dropdownRef}>
            <div
              onMouseEnter={() => {
                clearTimeout(dropdownTimeout.current);
                setIsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                dropdownTimeout.current = setTimeout(
                  () => setIsDropdownOpen(false),
                  300
                );
              }}
              className="relative inline-flex items-center gap-1 cursor-pointer transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-105 hover:text-cyan-400"
            >
              <span className="relative font-IBMPlexSans font-light">
                About Society
                <span className="absolute bottom-0 left-0 h-[1px] w-full scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left bg-cyan-400 transition-transform duration-300 ease-in-out" />
              </span>

              <FiChevronDown
                size={16}
                className={` text-2xl transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Dropdown */}
            <div
              onMouseEnter={() => {
                clearTimeout(dropdownTimeout.current);
                setIsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                dropdownTimeout.current = setTimeout(
                  () => setIsDropdownOpen(false),
                  10
                );
              }}
              className={`absolute top-full left-[-10] mt-3 bg-white text-black rounded-lg border border-gray-500 shadow-lg z-50 min-w-[250px] transition-all duration-300 ease-in-out transform
    ${
      isDropdownOpen
        ? "opacity-100 scale-100 pointer-events-auto"
        : "opacity-0 scale-95 pointer-events-none"
    }`}
            >
              <Link
                to="about/society-at-glance"
                className="block px-6 py-3 hover:bg-cyan-200 hover:text-black rounded-t-lg text-sm transition-colors duration-300 font-IBMPlexSans font-light"
              >
                Society at Glance
              </Link>
              <Link
                to="about/objectives"
                className="block px-6 py-3 hover:bg-cyan-200 hover:text-black  text-sm font-IBMPlexSans font-light transition-colors duration-300"
              >
                Objectives
              </Link>
              <Link
                to="about/registration-details"
                className="block px-6 py-3 hover:bg-cyan-200 hover:text-black rounded-b-lg text-sm font-IBMPlexSans font-light transition-colors duration-300"
              >
                Registration Details
              </Link>
            </div>
          </li>

          <li className="relative group cursor-pointer">
            <span className="relative inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-105 hover:text-cyan-400">
              <Link className="font-IBMPlexSans font-light" to="/management">
                Management
              </Link>
              <span className="absolute bottom-0 left-0 h-[1px] w-full scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left bg-cyan-400 transition-transform duration-300 ease-in-out" />
            </span>
          </li>

          <li className="relative group cursor-pointer">
            <span className="relative inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-105 hover:text-cyan-400">
              <Link className="font-IBMPlexSans font-light" to="/mission">
                Mission
              </Link>

              <span className="absolute bottom-0 left-0 h-[1px] w-full scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left bg-cyan-400 transition-transform duration-300 ease-in-out" />
            </span>
          </li>

          <li className="relative group cursor-pointer">
            <span className="relative inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-105 hover:text-cyan-400">
              <Link
                className="font-IBMPlexSans font-light"
                to="/online-journal"
              >
                Online Journal
              </Link>
              <span className="absolute bottom-0 left-0 h-[1px] w-full scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left bg-cyan-400 transition-transform duration-300 ease-in-out" />
            </span>
          </li>

          <li className="relative group cursor-pointer">
            <span className="relative inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-105 hover:text-cyan-400">
              <Link className="font-IBMPlexSans font-light" to="/print-journal">
                Print Journal
              </Link>
              <span className="absolute bottom-0 left-0 h-[1px] w-full scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left bg-cyan-400 transition-transform duration-300 ease-in-out" />
            </span>
          </li>

          <li className="relative group cursor-pointer">
            <span className="relative inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-105 hover:text-cyan-400">
              <Link className="font-IBMPlexSans font-light" to="/photo-gallery">
                Photo Gallery
              </Link>
              <span className="absolute bottom-0 left-0 h-[1px] w-full scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left bg-cyan-400 transition-transform duration-300 ease-in-out" />
            </span>
          </li>

          <li className="relative group cursor-pointer">
            <span className="relative inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-105 hover:text-cyan-400">
              <Link className="font-IBMPlexSans font-light" to="/contact">
                Contact
              </Link>
              <span className="absolute bottom-0 left-0 h-[1px] w-full scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left bg-cyan-400 transition-transform duration-300 ease-in-out" />
            </span>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {isMobileOpen && (
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col space-y-4 mt-4 text-sm font-semilight uppercase tracking-wide px-4">
            <li>
              <Link to="/" className="hover:text-cyan-400">
                Home
              </Link>
            </li>
            <li>
              <details className="group cursor-pointer">
                <summary className="flex justify-between items-center hover:text-cyan-400">
                  About Society
                  <FiChevronDown className=" ml-1 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="overflow-hidden max-h-0 group-open:max-h-40 transition-all duration-500 ease-in-out ml-4 mt-2 space-y-2 text-white/80">
                  <Link
                    to="about/society-at-glance"
                    className="block hover:text-cyan-400"
                  >
                    Society at Glance
                  </Link>
                  <Link
                    to="about/objectives"
                    className="block hover:text-cyan-400"
                  >
                    Objectives
                  </Link>
                  <Link
                    to="about/registration-details"
                    className="block hover:text-cyan-400"
                  >
                    Registration Details
                  </Link>
                </div>
              </details>
            </li>
            <li>
              <Link to="/management" className="hover:text-cyan-400">
                Management
              </Link>
            </li>
            <li>
              <Link to="/mission" className="hover:text-cyan-400">
                Mission
              </Link>
            </li>
            <li>
              <Link to="/online-journal" className="hover:text-cyan-400">
                Online Journal
              </Link>
            </li>
            <li>
              <Link to="/print-journal" className="hover:text-cyan-400">
                Print Journal
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-cyan-400">
                Photo Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-cyan-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
}

export default SecondaryNavbar;
