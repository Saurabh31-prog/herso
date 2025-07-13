import { BsYoutube } from "react-icons/bs";
import { FaSquareXTwitter, FaFacebook } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  return (
    <footer className="mt-auto bg-gray-900 text-base-content text-white px-6 py-10 pb-10 pt-10 select-none caret-transparent">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 w-full">
        {/* Left: Copyright */}
        <aside className="text-center md:text-left">
          <p className="text-xs font-semibold font-sans">
            copyright © {new Date().getFullYear()} Higher Education & Research Society
          </p>
        </aside>

        {/* Center: Social Icons */}
        <nav className="flex justify-center">
          <div className="flex gap-4">
            <a
              href="http://www.youtube.com/@highereducationresearchsoc5058"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube className="text-2xl transition-transform duration-300 hover:-translate-y-1 hover:text-red-600 cursor-pointer" />
            </a>
            <a href="#">
              <FaSquareXTwitter className="text-2xl cursor-pointer hover:text-white transition-transform duration-300 hover:-translate-y-1" />
            </a>
            <a href="#">
              <FaFacebook className="text-2xl cursor-pointer hover:text-blue-400 transition-transform duration-300 hover:-translate-y-1" />
            </a>
          </div>
        </nav>

        {/* Right: Links */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
          <a className="relative inline-block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full  cursor-pointer">
            About us
          </a>
          <a className="relative inline-block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
            Contact
          </a>
          <a className="relative inline-block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
            Feedback
          </a>
          <a className="relative inline-block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
            Disclaimer
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
