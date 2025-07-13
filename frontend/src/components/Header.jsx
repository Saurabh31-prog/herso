import { useState } from "react";
import { FaSearch, FaPhoneSquareAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Add your search logic here
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <header className="bg-gray-900  text-white text-sm w-full">
        {/*hidden lg:flex for hiding in sm scrn */}
        <div className="max-w-screen-xl mx-auto hidden lg:flex items-center justify-between px-4 py-4 md:py-2">
          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 group transition-colors duration-300 hover:text-teal-500">
              <FaPhoneSquareAlt />
              <a href="tel:+919322530571">+91-9322530571</a>
            </span>
            <span className="flex items-center gap-2 group transition-colors duration-300 hover:text-teal-500">
              <IoMail />
              <a href="mailto:sudhirnikam@gmail.com">sudhirnikam@gmail.com</a>
            </span>
          </div>

          {/* Search Icon */}
          <button
            className="z-50 text-white hover:text-teal-400 bg-white/20 active:bg-white/30 transition-all active:scale-95 cursor-pointer p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            onClick={() => setIsSearchOpen(true)}
            aria-label="Open search"
          >
            <FaSearch size={20} />
          </button>
        </div>

        {/* Mobile layout: visible only on small and medium screens */}
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-2 sm:py-3 md:py-2 lg:py-2 lg:hidden">
          <div className="transition-transform  cursor-pointer  active:scale-95 ">
          <HamburgerMenu />
          </div>
          <button
            className="z-50 text-white hover:text-teal-400 bg-white/20 active:bg-white/30 transition-all duration-300 active:scale-95 cursor-pointer p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            onClick={() => setIsSearchOpen(true)}
            aria-label="Open search"
          >
            <FaSearch size={20} />
          </button>
        </div>
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/50 z-60 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md animate-fadeIn">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="select-none caret-transparent text-lg font-semibold text-gray-900">Search</h3>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="text-gray-500  hover:text-gray-700 transition-colors"
                  aria-label="Close search"
                >
                  <IoCloseCircleOutline className="max-w-10" />
                </button>
              </div>
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200"
                  autoFocus
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-500 text-white px-4 py-1 rounded-md hover:bg-teal-600 transition-colors duration-200"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Spacer for fixed header if needed */}
      {/* <div className="h-16"></div> */}

      {/* <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style> */}
    </>
  );
};

export default Header;
