import missionLogo from "../assets/images/missionLogo.png"; //Adjust path as needed
import { motion } from "framer-motion";

function Mission() {
  return (
    <section className="relative flex flex-col flex-grow justify-center items-center bg-gradient-to-br from-emerald-200 via-blue-100 to-violet-300 py-16 px-2 sm:px-6 pt-32 select-none caret-transparent min-h-screen">
      {/* Decorative background blob */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-200 rounded-full blur-3xl z-0"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-100 rounded-full blur-2xl z-0"
      />
      {/* Logo and Title */}
      <motion.div
        className="relative z-10 text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex justify-center mb-6">
          <div className="bg-white p-4 shadow-md rounded-lg border border-gray-200 text-center">
            <img
              src={missionLogo}
              alt="Higher Education & Research Society Logo"
              className="w-28 sm:w-32 md:w-40 object-contain mx-auto"
            />
            <p className="mt-4 font-semibold text-gray-700">
              Higher Education & Research Society
            </p>
          </div>
        </div>
        <div className="w-20 border-t-2 border-cyan-500 mx-auto mt-6" />
      </motion.div>
      {/* Unified Mission & Vision Card */}
      <motion.div
        className="relative z-10 w-full max-w-3xl bg-white/80 border border-gray-200 shadow-xl rounded-2xl p-10 flex flex-col gap-8 backdrop-blur-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-0 flex items-center gap-3 font-Libre-Baskerville" >
          MISSION
        </h1>
        <p className="text-justify italic text-base leading-relaxed text-gray-700  mb-8 font-['PT_Serif'] ">
          The society is with targeted mission to improve the quality,
          efficiency and effectiveness of education, research and training
          systems in India and across the globe. This will in turn be a vantage
          point for us to encourage and improve Higher Educational Institutions’
          contribution to society and nation. Consequently, it will be a
          stimulating factor to create and foster an Indian area of higher
          education and it will empower the excellence and improve the
          visibility of higher educational activities focused on services to
          society and nation.
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-0 flex items-center gap-3 font-Libre-Baskerville" >
          VISION
        </h2>
        <p className="text-justify italic text-base leading-relaxed text-gray-700 font-['PT_Serif'] ">
          To be one of the best non-governmental organizations across the globe
          making education significantly research oriented and practical in
          learning.
        </p>
      </motion.div>
    </section>
  );
}

export default Mission;
