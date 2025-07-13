import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";


function SecondaryNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  //for dropdown to close when clicked anywhere in page
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (even) => {
      if (dropdownRef.current && !dropdownRef.current.contains(even.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <nav className="bg-[#2f4f4f] text-white py-3 px-6 sticky top-0 z-50 select-none caret-transparent">
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
              <a href="/">Home</a>
              <span className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left bg-cyan-400 transition-transform duration-300 ease-in-out" />
            </span>
          </li>

                {/*about society and dropdown */}
          <li className="relative group cursor-pointer" ref={dropdownRef}>
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="relative inline-flex items-center gap-1 cursor-pointer transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-105 hover:text-cyan-400"
            >
              <span className="relative">
                About Society
                <span className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left bg-cyan-400 transition-transform duration-300 ease-in-out" />
              </span>

              <FiChevronDown
                size={20}
                className={`text-white text-2xl transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                } group-hover:text-cyan-400`}
              />
            </div>

            {/* Dropdown */}
            <ul
              className={`absolute top-full left-[-10] mt-3 bg-white text-black rounded-sm shadow-lg z-50 min-w-[250px] py-2 transition-all duration-300 ease-in-out transform
    ${
      isDropdownOpen
        ? "opacity-100 scale-100 pointer-events-auto"
        : "opacity-0 scale-95 pointer-events-none"
    }`}
            >
              <li>
                <a
                  href="/society-at-glance"
                  className="block px-6 py-3 hover:bg-cyan-100 text-sm font-medium transition-colors duration-300"
                >
                  Society at Glance
                </a>
              </li>
              <li>
                <a
                  href="/objectives"
                  className="block px-6 py-3 hover:bg-cyan-100 text-sm font-medium transition-colors duration-300"
                >
                  Objectives
                </a>
              </li>
              <li>
                <a
                  href="/registration-details"
                  className="block px-6 py-3 hover:bg-cyan-100 text-sm font-medium transition-colors duration-300"
                >
                  Registration Details
                </a>
              </li>
            </ul>
          </li>

          <li className="relative group cursor-pointer">
            <span className="relative inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-105 hover:text-cyan-400">
              <a href="/management">Management</a>
              <span className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left bg-cyan-400 transition-transform duration-300 ease-in-out" />
            </span>
          </li>

          <li className="relative group cursor-pointer">
            <span className="relative inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-105 hover:text-cyan-400">
              <Link to="/mission">Mission</Link>

              <span className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left bg-cyan-400 transition-transform duration-300 ease-in-out" />
            </span>
          </li>

          <li className="relative group cursor-pointer">
            <span className="relative inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-105 hover:text-cyan-400">
              <a href="/online-journal">Online Journal</a>
              <span className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left bg-cyan-400 transition-transform duration-300 ease-in-out" />
            </span>
          </li>

          <li className="relative group cursor-pointer">
            <span className="relative inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-105 hover:text-cyan-400">
              <a href="/print-journal">Print Journal</a>
              <span className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left bg-cyan-400 transition-transform duration-300 ease-in-out" />
            </span>
          </li>

          <li className="relative group cursor-pointer">
            <span className="relative inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-105 hover:text-cyan-400">
              <a href="/photo-gallery">Photo Gallery</a>
              <span className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left bg-cyan-400 transition-transform duration-300 ease-in-out" />
            </span>
          </li>

          <li className="relative group cursor-pointer">
            <span className="relative inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-105 hover:text-cyan-400">
              <a href="/contact">Contact</a>
              <span className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left bg-cyan-400 transition-transform duration-300 ease-in-out" />
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
          <ul className="flex flex-col space-y-4 mt-4 text-sm font-semibold uppercase tracking-wide px-4">
            <li>
              <a href="/" className="hover:text-cyan-400">
                Home
              </a>
            </li>
            <li>
              <details className="group cursor-pointer">
                <summary className="flex justify-between items-center hover:text-cyan-400">
                  About Society
                  <FiChevronDown className=" ml-1 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="overflow-hidden max-h-0 group-open:max-h-40 transition-all duration-500 ease-in-out ml-4 mt-2 space-y-2 text-white/80">
                  <a href="/history" className="block hover:text-cyan-400">
                    Society at Glance
                  </a>
                  <a href="/vision" className="block hover:text-cyan-400">
                    Objectives
                  </a>
                  <a href="/team" className="block hover:text-cyan-400">
                    Registration Details
                  </a>
                </div>
              </details>
            </li>
            <li>
              <a href="/management" className="hover:text-cyan-400">
                Management
              </a>
            </li>
            <li>
              <a href="/mission" className="hover:text-cyan-400">
                Mission
              </a>
            </li>
            <li>
              <a href="/online-journal" className="hover:text-cyan-400">
                Online Journal
              </a>
            </li>
            <li>
              <a href="/print-journal" className="hover:text-cyan-400">
                Print Journal
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-cyan-400">
                Photo Gallery
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-cyan-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default SecondaryNavbar;
