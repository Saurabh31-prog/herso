import { motion } from "framer-motion";

//image navigation icons
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import img from "../assets/images/img.jpg"; // ✅ include extension
import img1 from "../assets/images/img1.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import president from "../assets/images/president.jpg";

//slideshow
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules"; // ✅ for autoplay
import "swiper/css";
import "swiper/css/navigation"; // ✅ Required for navigation arrows

// const images = [img, img1, img3, img4];

// function Home() {
//   return (
//     <motion.main
//       className="flex-grow"
//       initial={{ opacity: 0, y: 0 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -30 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//     >
//       {/* Hero Section */}
//       <section className="bg-hero-bg bg-gradient-to-br from-emerald-200 via-blue-100 to-violet-300  px-6 py-0 lg:py-24">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-7 items-center">
//             {/* Left Content */}
//             <div className="space-y-10 self-start">
//               <div className="inline-flex items-center gap-2 bg-badge-bg text-badge-text px-1 py-0 rounded-full text-sm font-medium">
//                 Welcome To
//               </div>
//               <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-hero-text leading-tight font-semibold font-UoqMunThenKhung transition-all duration-300 ease-in-out whitespace-nowrap">
//                 Higher Education &
//                 <br />
//                 Research Society
//               </h1>
//             </div>

//             {/* Right Content Image slideshow */}
//             <div className="relative group w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-md flex items-center justify-center select-none caret-transparent">
//               {/* Slideshow / Image Gallery Placeholder */}
//               <Swiper
//                 modules={[Autoplay, Navigation]}
//                 slidesPerView={1}
//                 autoplay={{ delay: 2000, disableOnInteraction: false }}
//                 loop={true}
//                 speed={1000}
//                 navigation={{
//                   nextEl: ".custom-next",
//                   prevEl: ".custom-prev",
//                 }}
//                 className="w-full h-full rounded-md overflow-hidden"
//               >
//                 {images.map((img, i) => (
//                   <SwiperSlide key={i}>
//                     <img
//                       src={img}
//                       alt={`Slide ${i + 1}`}
//                       className="w-full h-96 object-cover rounded-md"
//                     />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//               {/* Custom Left Button */}
//               <button
//                 className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-80 "
//                 aria-label="Previous Slide"
//               >
//                 <FaChevronCircleLeft size={25} className="hover:text-blue-400  cursor-pointer" />
//               </button>

//               {/* Custom Right Button */}
//               <button
//                 className="custom-next absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-80"
//                 aria-label="Next Slide"
//               >
//                 <FaChevronCircleRight size={25} className="hover:text-blue-400 cursor-pointer" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//         {/*Another seciton ----------------------------------------*/ }

//       <section className="bg-section-dark px-6 py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="space-y-8">
//               <div className="w-16 h-16 bg-highlight rounded-full flex items-center justify-center">
//                 <div className="text-2xl font-bold text-primary">D</div>
//               </div>

//               <h2 className="text-3xl lg:text-4xl font-bold text-white">
//                 Find Best Course: Connecting
//                 <br />
//                 Mentor With <span className="text-highlight">Opportunity.</span>
//               </h2>
//             </div>

//             {/* Right Content */}
//             <div className="relative">
//               {/* Placeholder for mentor images */}
//               <div className="w-full h-64 bg-white/10 rounded-lg flex items-center justify-center">
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center"></div>
//                   <p className="text-white/70">Mentor Image Placeholder</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Search Form */}
//           <div className="mt-16 bg-white rounded-lg p-6 shadow-xl">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-foreground">
//                   Search For Job
//                 </label>
//                 {/* <Input placeholder="Search For Job" className="h-12" /> */}
//               </div>

//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-foreground">
//                   Location
//                 </label>
//               </div>

//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-foreground">
//                   Job Level
//                 </label>
//               </div>

//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-foreground">
//                   Department
//                 </label>
//               </div>
//             </div>

//             <div className="mt-6 flex justify-center">
//               {/* <Button className="bg-highlight hover:bg-highlight/90 text-primary px-12 py-3 text-base font-medium">
//                 Search
//               </Button> */}
//             </div>
//           </div>
//         </div>
//       </section>
//     </motion.main>
//   );
// }

const images = [img, img1, img3, img4];

function Home() {
  return (
    <motion.main
      className="flex-grow"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <section className="bg-hero-bg bg-gradient-to-br from-emerald-200 via-blue-100 to-violet-300 px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-10 self-start text-center sm:text-left">
              <div className="inline-flex items-center gap-2 bg-badge-bg text-badge-text px-2  rounded-full text-xs sm:text-sm font-medium mx-auto sm:mx-0 font-Inter">
                Welcome To<span className="animate-dots"/>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-hero-text leading-tight font-semibold font-Cactus-Classical-Serif transition-all duration-300 ease-in-out">
                Higher Education &<br/>
                Research Society
              </h1>
            </div>

            {/* Right Content Image slideshow */}
            <div className="relative group w-full h-72 sm:h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-md flex items-center justify-center select-none caret-transparent">
              <Swiper
                modules={[Autoplay, Navigation]}
                slidesPerView={1}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                speed={1000}
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                className="w-full h-full rounded-md overflow-hidden"
              >
                {images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`Slide ${i + 1}`}
                      className="w-full h-72 sm:h-96 object-cover rounded-md"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Left Button */}
              <button
                className="custom-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50"
                aria-label="Previous Slide"
              >
                <FaChevronCircleLeft
                  size={28}
                  className="hover:text-blue-400 cursor-pointer  rounded-full p-1"
                />
              </button>

              {/* Custom Right Button */}
              <button
                className="custom-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50"
                aria-label="Next Slide"
              >
                <FaChevronCircleRight
                  size={28}
                  className="hover:text-blue-400 cursor-pointer rounded-full p-1"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 ------------------------------------------------------------- */}

      <section className="bg-section-dark bg-emerald-400 px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto lg:mx-0">
                <div className="text-xl sm:text-2xl font-bold text-white">
                  D
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Find Best Course: Connecting
                <br />
                Mentor With{" "}
                <span className="text-yellow-300">Opportunity.</span>
              </h2>
            </div>

            {/* Right Content: President's Desk */}
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="bg-gray-800 text-white px-6 py-3 text-lg font-medium">
                From President’s Desk
              </div>
              <div className="p-6 lg:flex gap-6 items-start">
                <img
                  src={president} // Replace with actual path
                  alt="President"
                  className="w-[229px] h-[220px] object-cover  shadow-md mx-auto lg:mx-0"
                />
                <div className="mt-4 lg:mt-0 text-gray-700 text-sm leading-relaxed">
                  <p className="mb-4">
                    <strong>‘Higher Education and Research Society’</strong> is
                    a magnifying step with the targeted mission to enhance the
                    quality and effectiveness of higher education, research and
                    training system in India and across the globe encouraging
                    Higher Educational Institutions’, Academicians, Researchers’
                    and Professionals’ contribution to society and nation.
                  </p>
                  <p className="font-semibold text-gray-900">
                    – Dr. Sudhir Nikam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default Home;
