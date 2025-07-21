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

const images = [img, img1, img3, img4];

const sectionVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 1.2,
    },
  },
};


function Home() {
  return (
    <motion.main
      className="flex-grow"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <section className="bg-hero-bg bg-gradient-to-br from-emerald-200 via-blue-100 to-violet-300 px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-6 sm:space-y-10 self-start text-center sm:text-left"
              variants={sectionVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-badge-bg text-badge-text px-2  rounded-full text-xs sm:text-sm font-medium mx-auto sm:mx-0 font-Inter">
                Welcome To
                <span className="animate-dots" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-hero-text leading-tight font-semibold font-Cactus-Classical-Serif transition-all duration-300 ease-in-out">
                Higher Education &<br />
                Research Society
              </h1>
            </motion.div>

            {/* Right Content Image slideshow--------------------- */}
            <motion.div
              variants={sectionVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.4 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 ------------------------------------------------------------- */}

      <section className="bg-section-dark bg-gradient-to-br from-emerald-200 via-blue-100 to-violet-300 px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Right Content: President's Desk */}
            <motion.div
              className="bg-white shadow-xl  rounded-lg overflow-hidden"
              variants={sectionVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default Home;
