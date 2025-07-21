import { useEffect, useState } from "react";
import { TbArrowBigUpLineFilled } from "react-icons/tb";


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

//     <button
//   onClick={scrollToTop}
//   className="fixed bottom-6 right-6 z-50 p-3 bg-cyan-600 text-white rounded-full shadow-lg hover:bg-cyan-700 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer group hover:scale-105"
// >
//   <TbArrowBigUpLineFilled
//     size={22}
//     className="transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-12"
//   />
// </button>
    <button
  onClick={scrollToTop}
  className="group fixed bottom-26 right-6 z-50 w-12 h-12 flex items-center justify-center text-blue-200  rounded-full cursor-pointer"
>
  <TbArrowBigUpLineFilled size={22} />

  {/* Circular Border Animation */}
  <span className="absolute inset-0 rounded-full border-3 border-amber-700 scale-125 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 pointer-events-none "></span>
</button>


  )
}

export default ScrollToTopButton;