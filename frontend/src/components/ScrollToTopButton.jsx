import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";


function ScrollToTopButton() {
  
  const[isVisible, setIsVisible] = useState(false);

  //Detect Scroll and Toggle Button Visibility
  useEffect(()=>{
    const handleScroll = () =>{
      console.log(window.scrollY);
      setIsVisible(window.scrollY > 115);
      
    };

    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll);
  }, []);


  //Scroll to Top Handler
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  if(!isVisible) return null;

  return (
    <button
  onClick={scrollToTop}
  className="group fixed bottom-26 right-6 z-50 w-12 h-12 flex items-center justify-center text-amber-700 rounded-full cursor-pointer select-none caret-transparent"
>
  <FaAngleDoubleUp size={22} />

  {/* Circular Border Animation */}
  <span className="absolute inset-0 rounded-full border-3 border-amber-700 scale-125 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 pointer-events-none "></span>
</button>


  )
}

export default ScrollToTopButton;