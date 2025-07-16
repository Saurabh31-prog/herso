import HERSOlogo from "../assets/images/HERSOlogo.jpg";

const HeroLogo = () => {
  return (
    <div className="bg-white px-8 py-8">
      <div className="caret-transparent max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
        {/* Logo with hover spin and glow */}
        <a href="/">
          <img
            src={HERSOlogo}
            alt="HERSO Logo"
            className="w-24 h-24 sm:w-30 sm:h-30 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain 
             transition-transform duration-500 ease-in-out 
             hover:rotate-[2deg] hover:scale-105 hover:drop-shadow-md 
             cursor-pointer"
          />
        </a>

        {/* Text beside logo */}
        <div className="text-center sm:text-left">
          <a href="/">
            <h1
              className="relative inline-block text-center text-gray-900 
             text-xl sm:text-2xl md:text-3xl lg:text-4xl 
             font-semibold font-UoqMunThenKhung transition-all duration-300 ease-in-out 
             hover:text-cyan-700 whitespace-nowrap
             after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
             after:h-[2px] after:w-0 hover:after:w-full 
             after:bg-cyan-700 after:transition-all after:duration-500"
            >
              Higher Education & Research Society
            </h1>
          </a>
          <p
            className="mt-2 text-sm sm:text-base hidden lg:flex
          text-gray-600 dark:text-black-300 max-w-2xl"
          >
            An Education Society registered under the Government of India's
            Societies Registration Act 1860 (Maha/651/2013/Thane) and a Trust
            registered under Bombay Trusts Act 1950 (AF/27205/Thane)
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroLogo;
