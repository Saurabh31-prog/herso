import { useState, useEffect } from "react";
import { FaBars, FaPhoneSquareAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  //close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest("#hamburger-menu")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative lg:hidden" id="hamburger-menu">
      {/* Hamburger Icon */}
      <button
        onClick={(e) => {
          const isClosing = isOpen;
          setIsOpen(!isOpen);
          if (isClosing) {
            e.currentTarget.blur();
          }
        }}
        className="text-white duration-300 hover:text-teal-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
        aria-label="Toggle contact menu"
      >
        <FaBars size={22} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-3 w-60 max-w-[90vw] bg-white text-black font-bold rounded-xl shadow-lg z-50 animate-fadeIn border border-gray-300">
          <div className="p-4 space-y-4">
            <div className="flex items-center gap-3 hover:text-teal-500 transition-colors">
              <FaPhoneSquareAlt />
              <a href="tel:+919322530571" className="text-sm font-medium">
                +91-9322530571
              </a>
            </div>
            <div className="flex items-center gap-3 hover:text-teal-500 transition-colors">
              <IoMail />
              <a
                href="mailto:sudhirnikam@gmail.com"
                className="text-sm font-medium"
              >
                sudhirnikam@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
