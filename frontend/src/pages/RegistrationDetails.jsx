import { motion } from "framer-motion";
import { FaIdCard, FaMapMarkerAlt, FaTags } from "react-icons/fa";


const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.2, duration: 0.7 },
  },
};

function RegistrationDetails() {
  return (
    <section className="relative flex flex-col justify-center items-center bg-gradient-to-br from-emerald-200 via-blue-100 to-violet-300 py-16 px-4 sm:px-6 pt-32 select-none caret-transparent min-h-[20vh]">
      {/* Background Blobs */}
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

      {/* Header */}
      <motion.div
        className="relative z-10 text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold font-Libre-Baskerville text-gray-900 tracking-wide mb-2">
          Registration Details
        </h1>
        <div className="w-20 border-t-2 border-cyan-500 mx-auto mt-6" />
      </motion.div>

      {/* Cards */}
      <div className="relative z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Registration Number */}
        <motion.div
          className="group bg-white/80 border border-gray-200 shadow-xl rounded-2xl p-8 flex flex-col gap-3 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-md"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-3 font-Cactus-Classical-Serif">
            <FaIdCard className="text-cyan-600 group-hover:scale-110 transition-transform duration-300" />
            Registration Info
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            The Society is registered with the Government of Maharashtra,
            <br />
            The Assistant Charity Commissioner, Thane.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-1 flex items-center gap-3 font-Cactus-Classical-Serif">
            <FaTags className="text-cyan-600 group-hover:scale-110 transition-transform duration-300" />
            Registration No.
          </h2>
          <p className="mt-0 font-semibold text-lg text-cyan-700">
            MAHA/651/2013/THANE
          </p>
        </motion.div>

        {/* Official Address */}
        <motion.div
          className="group bg-white/80 border border-gray-200 shadow-xl rounded-2xl p-8 flex flex-col gap-3 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-md"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-3 font-Cactus-Classical-Serif">
            <FaMapMarkerAlt className="text-cyan-600 group-hover:scale-110 transition-transform duration-300" />
            Official Address
          </h2>
          <address className="not-italic text-gray-700 leading-relaxed text-base">
            NL6/5/13, Sector – 10, <br />
            Nerul, Navi Mumbai – 400706 <br />
            Maharashtra, India.
          </address>
        </motion.div>
      </div>
    </section>
  );
}

export default RegistrationDetails;
