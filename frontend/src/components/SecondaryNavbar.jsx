import { useLocation } from "react-router-dom";
import { useAnimation } from "framer-motion";

import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";
//message icon
import { BiMessage } from "react-icons/bi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoCloseCircleOutline, IoMail } from "react-icons/io5";
import { PiMagnifyingGlassBold } from "react-icons/pi";

import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

//framer
import { motion } from "framer-motion";

import SearchModal from "./SearchModal"; // path based on your folder structure

function SecondaryNavbar() {

  {
    /* for the  search bar */
  }
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
      console.log("Scroll position:", window.scrollY);
      setScrolled(window.scrollY > 55); // 👈 should trigger only after 1000px
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
    <>
      <motion.nav
        className={`
        ${
          scrolled
            ? "bg-white/30 backdrop-blur-lg shadow-lg text-gray-900 fixed top-4 left-0 right-0 mx-6 rounded-lg z-999 transition-all duration-500 border border-gray-500"
            : isHome
            ? "bg-[#2f4f4f] text-white fixed top-0 left-0 w-full z-50 transition-all duration-500"
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
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* leftmost section ---------Contact Tooltip */}
          <ContactTooltip scrolled={scrolled} />

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

          {/* Desktop visible {full-screen} Nav Links */}
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
                className="relative inline-flex items-center gap-1 cursor-pointer transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-105 hover:text-cyan-400 "
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

              {/* aabout society --- Dropdown */}
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
                <Link
                  className="font-IBMPlexSans font-light"
                  to="/print-journal"
                >
                  Print Journal
                </Link>
                <span className="absolute bottom-0 left-0 h-[1px] w-full scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left bg-cyan-400 transition-transform duration-300 ease-in-out" />
              </span>
            </li>

            <li className="relative group cursor-pointer">
              <span className="relative inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-105 hover:text-cyan-400">
                <Link
                  className="font-IBMPlexSans font-light"
                  to="/photo-gallery"
                >
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

          {/*search Icon and everything-------------- */}
          {/* Search Icon */}
          <div className="flex-shrink-0">
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`transition-colors duration-300 p-2 rounded-md focus:outline-none ${
                scrolled
                  ? "text-black hover:text-teal-600"
                  : "text-white hover:text-teal-400"
              }`}
              aria-label="Open search"
            >
          <motion.div
  className="cursor-pointer"
  whileHover={{
    y: ["0%", "-60%", "60%", "0%"],  // Up out of view, then instantly below, then back to original
    opacity: [1, 0, 0, 1],           // Invisible offscreen, fade in as it returns
  }}
  transition={{
    times: [0, 0.3, 0.7, 1],
    duration: 0.7,
    ease: "easeInOut",
  }}
>
  <PiMagnifyingGlassBold className="cursor-pointer" size={20} />
</motion.div>


            </button>
          </div>
        </div>

        {/* Mobile Dropdown --------------------------------------------------------------*/}
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

      {/*search overlay screen---------------------- */}
      {
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          query={searchQuery}
          setQuery={setSearchQuery}
        />
      }
    </>
  );
}

const ContactTooltip = ({ scrolled }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const tooltipRef = useRef(null);
  const timeoutRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
        setIsTooltipOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative mr-4"
      ref={tooltipRef}
      onMouseEnter={() => {
        clearTimeout(timeoutRef.current);
        setIsTooltipOpen(true);
      }}
      onMouseLeave={() => {
        timeoutRef.current = setTimeout(() => {
          setIsTooltipOpen(false);
        }, 300);
      }}
    >
      {/* Message Icon */}
      <BiMessage
        size={24}
        className={`cursor-pointer h-5 w-5 transition-colors duration-300 ${
          scrolled ? "text-black" : "text-white"
        }`}
      />

      {/* Tooltip Dropdown */}
      {/* <div
        className={`absolute top-full  rounded-lg border border-gray-500 shadow-lg left-25 transform -translate-x-1/2 mt-3 w-64 max-w-[90vw] bg-white text-black font-bold  z-50 space-y-0 transition-all duration-300 ease-in-out ${
    isTooltipOpen
      ? "opacity-100 scale-100 pointer-events-auto"
      : "opacity-0 scale-95 pointer-events-none"
  }`}
      >
        <div className="block px-6 py-3 hover:bg-cyan-200 hover:text-black rounded-t-lg text-sm transition-colors duration-300 font-IBMPlexSans font-light">
          <FaPhoneSquareAlt />
          <a href="tel:+919322530571" className="text-sm font-IBMPlexSans font-light">
            +91-9322530571
          </a>
        </div>
        <div className="block px-6 py-3 hover:bg-cyan-200 hover:text-black rounded-b-lg text-sm transition-colors duration-300 font-IBMPlexSans font-light">
          <IoMail />
          <a
            href="mailto:sudhirnikam@gmail.com"
            className="text-sm font-IBMPlexSans font-light"
          >
            sudhirnikam@gmail.com
          </a>
        </div>
      </div> */}

      {/* Tooltip Dropdown */}
      <div
        className={`absolute top-full rounded-lg border border-gray-500 shadow-lg left-25 transform -translate-x-1/2 mt-3 w-64 max-w-[90vw] bg-white text-black font-bold z-50 space-y-0 transition-all duration-300 ease-in-out ${
          isTooltipOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-x-2 px-6 py-3 hover:bg-cyan-200 hover:text-black rounded-t-lg text-sm transition-colors duration-300 font-IBMPlexSans font-light">
          <FaPhoneSquareAlt />
          <a
            href="tel:+919322530571"
            className="text-sm font-IBMPlexSans font-light"
          >
            +91-9322530571
          </a>
        </div>
        <div className="flex items-center gap-x-2 px-6 py-3 hover:bg-cyan-200 hover:text-black rounded-b-lg text-sm transition-colors duration-300 font-IBMPlexSans font-light">
          <IoMail />
          <a
            href="mailto:sudhirnikam@gmail.com"
            className="text-sm font-IBMPlexSans font-light"
          >
            sudhirnikam@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
