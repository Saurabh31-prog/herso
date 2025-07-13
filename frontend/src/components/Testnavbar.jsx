import { useState, useEffect } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";
import { FaBars } from "react-icons/fa";

function SecondaryNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full sticky top-0 z-50 select-none caret-transparent transition-all duration-300 ${
        isScrolled
          ? "bg-[#2f4f4f]/80 backdrop-blur-md py-2 shadow-md"
          : "bg-[#2f4f4f] py-4"
      } animate-fadeIn`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="text-white text-2xl relative w-8 h-8 focus:outline-none"
          >
            <span
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 transform ${
                isMobileOpen ? "opacity-0 scale-90 rotate-45" : "opacity-100"
              }`}
            >
              <FaBars size={24} />
            </span>
            <span
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 transform ${
                isMobileOpen ? "opacity-100" : "opacity-0 scale-90 -rotate-45"
              }`}
            >
              <FiX size={28} />
            </span>
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 uppercase text-sm font-semibold tracking-wide">
          <li className="hover:text-cyan-400 relative group cursor-pointer">
            <a href="/">Home</a>
            <div className="h-[2px] w-0 group-hover:w-full bg-cyan-400 transition-all duration-300 absolute bottom-0 left-0"></div>
          </li>

          <li className="relative group">
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 cursor-pointer hover:text-cyan-400 transition-colors duration-300"
            >
              About Society
              <FiChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180 text-cyan-400" : ""
                }`}
              />
            </div>
            {/* Dropdown */}
            <ul
              className={`absolute top-full mt-2 left-0 bg-white text-black shadow-md text-xs rounded-md py-2 px-4 min-w-[180px] z-50 transform transition-all duration-300 ease-in-out ${
                isDropdownOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <li className="py-1 hover:text-cyan-700">
                <a href="/history">Society at Glance</a>
              </li>
              <li className="py-1 hover:text-cyan-700">
                <a href="/vision">Objectives</a>
              </li>
              <li className="py-1 hover:text-cyan-700">
                <a href="/team">Registration Details</a>
              </li>
            </ul>
          </li>

          <li className="hover:text-cyan-400">
            <a href="/management">Management</a>
          </li>
          <li className="hover:text-cyan-400">
            <a href="/mission">Mission</a>
          </li>
          <li className="hover:text-cyan-400">
            <a href="/online-journal">Online Journal</a>
          </li>
          <li className="hover:text-cyan-400">
            <a href="/print-journal">Print Journal</a>
          </li>
          <li className="hover:text-cyan-400">
            <a href="/gallery">Photo Gallery</a>
          </li>
          <li className="hover:text-cyan-400">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Mobile Nav */}
      {isMobileOpen && (
        <div className="md:hidden transition-all duration-500 overflow-hidden">
          <ul className="flex flex-col space-y-4 mt-4 text-sm font-semibold uppercase tracking-wide px-6 pb-4">
            <li>
              <a href="/" className="hover:text-cyan-400">
                Home
              </a>
            </li>
            <li>
              <details className="group cursor-pointer">
                <summary className="flex justify-between items-center hover:text-cyan-400">
                  About Society
                  <FiChevronDown className="ml-1 transition-transform duration-300 group-open:rotate-180" />
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
