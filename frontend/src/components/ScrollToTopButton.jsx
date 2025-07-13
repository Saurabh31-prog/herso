import { useEffect, useState } from "react";
import { TbArrowBigUpLineFilled } from "react-icons/tb";


function ScrollToTopButton() {
  
  const[isVisible, setIsVisible] = useState(false);

  //Detect Scroll and Toggle Button Visibility
  useEffect(()=>{
    const handleScroll = () =>{
      setIsVisible(window.scrollY > 700);
      
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
      className="fixed bottom-4 right-4 mb-30 z-50 p-3 bg-cyan-600 text-white rounded-full shadow-lg hover:bg-cyan-950 hover:outline-4 hover:outline-white transition duration-300 cursor-pointer group"
    >
    <TbArrowBigUpLineFilled size={20}
    className="transform transition-transform duration-800 group-hover:-rotate-360"
    />
    </button>
  )
}

export default ScrollToTopButton;