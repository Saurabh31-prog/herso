import { useLocation } from "react-router-dom";
import {
  useAnimation,
  motion,
  MotionConfig,
  AnimatePresence,
} from "framer-motion";

import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";
//message icon
import { BiMessage } from "react-icons/bi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoCloseCircleOutline, IoMail } from "react-icons/io5";
import { PiMagnifyingGlassBold } from "react-icons/pi";

import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

import SearchModal from "./SearchModal"; // path based on your folder structure

function SecondaryNavbar() {
  //for the search icon animation...
  const [hovered, setHovered] = useState(false);

  const iconVariants = {
    initial: { y: 0, opacity: 1 },
    hover: { y: -10, opacity: 0 },
  };

  const textVariants = {
    initial: { y: 10, opacity: 0 },
    hover: { y: 0, opacity: 1 },
    transition: { delay: 0.2, duration: 0.3 },
  };

  //hammenu code
  const variants = {
    top: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        top: ["35%", "50%", "50%"],
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        top: ["50%", "50%", "35%"],
      },
    },
    middle: {
      open: {
        rotate: ["0deg", "0deg", "-45deg"],
      },
      closed: {
        rotate: ["-45deg", "0deg", "0deg"],
      },
    },
    bottom: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        bottom: ["35%", "50%", "50%"],
        left: "50%",
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        bottom: ["50%", "50%", "35%"],
        left: "50%",
      },
    },
  };

  //mobile view hamburgermenu items animation
  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

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
      scrolled && window.innerWidth >= 768
        ? "bg-white/30 backdrop-blur-lg shadow-lg fixed top-4 left-0 right-0 mx-6 rounded-lg border border-gray-500 text-black"
        : "text-white"
    }
    bg-[#2f4f4f] fixed top-0 left-0 w-full z-50 transition-all duration-500
    py-2 px-4 sm:py-4 sm:px-6 select-none caret-transparent
  `}
        style={
          scrolled && window.innerWidth >= 768
            ? {
                maxWidth: "calc(100vw - 3rem)",
                marginLeft: "auto",
                marginRight: "auto",
              }
            : {}
        }
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* leftmost section ---------Contact Tooltip */}
          <div className="hidden md:block">
            <ContactTooltip scrolled={scrolled} />
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

          {/* Right section search Icon and everything-------------- */}
          {/* Search Icon */}
          <div className="flex-shrink-0 hidden md:block">
            <div
              className="relative h-8 w-16 flex items-center justify-center overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search"
            >
              {/* Icon */}
              <motion.div
                variants={iconVariants}
                animate={hovered ? "hover" : "initial"}
                transition={{ duration: 0.1, ease: "easeOut" }}
                className={`absolute top-1/4 left-1/2 -translate-x-1/2 text-base ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                <PiMagnifyingGlassBold size={20} />
              </motion.div>

              {/* Text */}
              <motion.div
                variants={textVariants}
                animate={hovered ? "hover" : "initial"}
                transition={{ duration: 0.1, ease: "linear" }}
                className={`absolute top-1/5 left-1/2 -translate-x-1/2 text-sm font-medium font-IBMPlexSans ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                SEARCH
              </motion.div>
            </div>
          </div>
        </div>

        {/************************************************************************ MOBILE VIEW  DOWN ********************************************************/}

        {/* new menu down  */}

        {/* -----MOBILE VIEW  WITH  left hammenu and right search icon  ----- */}

        <div className="flex justify-between items-center md:hidden">
          {/* Hamburger Menu */}
          {/* <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`${
              scrolled ? "text-black" : "text-white"
            } text-2xl focus:outline-none transition-transform duration-300`}
            aria-label="Toggle navigation"
          >
            {isMobileOpen ? <FiX size={28} /> : <FaBars size={24} />}
          </button> */}
          <AnimatedHamburgerButton
            variants={variants}
            isActive={isMobileOpen}
            onToggle={() => setIsMobileOpen((prev) => !prev)}
          />

          <div className="flex-shrink-0">
            <div
              className="relative h-8 w-16 flex items-center justify-center overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search"
            >
              {/* Icon */}
              <motion.div
                variants={iconVariants}
                animate={hovered ? "hover" : "initial"}
                transition={{ duration: 0.1, ease: "easeOut" }}
                className={`absolute top-1/4 left-1/2 -translate-x-1/2 text-base ${
                  scrolled ? "text-white" : "text-white"
                }`}
              >
                <PiMagnifyingGlassBold size={20} />
              </motion.div>

              {/* Text */}
              <motion.div
                variants={textVariants}
                animate={hovered ? "hover" : "initial"}
                transition={{ duration: 0.1, ease: "linear" }}
                className={`absolute top-1/5 left-1/2 -translate-x-1/2 text-sm font-medium font-IBMPlexSans ${
                  scrolled ? "text-white" : "text-white"
                }`}
              >
                SEARCH
              </motion.div>
            </div>
          </div>
        </div>

        {/* -----MOBILE MENU CONTENT ----- */}

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              key="mobileMenu"
              variants={menuVariants}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-[#2f4f4f] text-white px-6 py-4 rounded-lg mt-4 space-y-4"
            >
              <motion.div variants={itemVariants}>
                <Link
                  to="/"
                  className="block uppercase text-sm hover:text-cyan-400 font-IBMPlexSans font-light"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Home
                </Link>
              </motion.div>

              {/* About Society collapsible */}
              <details className="group">
                <summary className="flex items-center justify-between text-sm uppercase cursor-pointer hover:text-cyan-400 font-IBMPlexSans font-light">
                  About Society
                  <FiChevronDown className="transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="pl-4 mt-2 space-y-2 text-white/90">
                  <Link
                    to="about/society-at-glance"
                    className="block text-sm hover:text-cyan-400 font-IBMPlexSans font-light"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    SOCIETY AT GLANCE
                  </Link>
                  <Link
                    to="about/objectives"
                    className="block text-sm hover:text-cyan-400 font-IBMPlexSans font-light"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    OBJECTIVES
                  </Link>
                  <Link
                    to="about/registration-details"
                    className="block text-sm hover:text-cyan-400 font-IBMPlexSans font-light"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    REGISTRATION DETAILS
                  </Link>
                </div>
              </details>

              <motion.div variants={itemVariants}>
                <Link
                  to="/management"
                  className="block uppercase text-sm hover:text-cyan-400 font-IBMPlexSans font-light  text-white"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Management
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  to="/mission"
                  className="block uppercase text-sm hover:text-cyan-400 font-IBMPlexSans font-light"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Mission
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  to="/online-journal"
                  className="block uppercase text-sm hover:text-cyan-400 font-IBMPlexSans font-light"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Online Journal
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  to="/print-journal"
                  className="block uppercase text-sm hover:text-cyan-400 font-IBMPlexSans font-light"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Print Journal
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  to="/photo-gallery"
                  className="block uppercase text-sm hover:text-cyan-400 font-IBMPlexSans font-light"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Photo Gallery
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  to="/contact"
                  className="block uppercase text-sm hover:text-cyan-400 font-IBMPlexSans font-light"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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

{
  /** Left navbar section contact info  */
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

//animated hamburger menu

const AnimatedHamburgerButton = ({ variants, onToggle, isActive }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={isActive ? "open" : "closed"}
        onClick={onToggle}
        className="relative h-10 w-10 rounded-md bg-transparent"
      >
        <motion.span
          variants={variants.top}
          className="absolute h-0.5 w-6 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={variants.middle}
          className="absolute h-0.5 w-6 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={variants.bottom}
          className="absolute h-0.5 w-6 bg-white"
          style={{ y: "50%", left: "50%", x: "-50%", bottom: "35%" }}
        />
      </motion.button>
    </MotionConfig>
  );
};

export default SecondaryNavbar;
