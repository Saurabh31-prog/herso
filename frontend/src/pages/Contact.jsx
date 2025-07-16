import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.2, duration: 0.7 } },
};

function Contact() {
  return (
    <section className="relative flex flex-col flex-grow justify-center items-center bg-gradient-to-br from-emerald-200 via-blue-100 to-violet-300 py-16 px-2 sm:px-6 pt-32 select-none caret-transparent ">
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
      <motion.div
        className="relative z-10 text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold font-Libre-Baskerville text-gray-900 tracking-wide mb-2">
          Get in Touch
        </h1>
        <div className="w-20 border-t-2 border-cyan-500 mx-auto mt-6" />
      </motion.div>
      <div className="relative z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Official Address */}
        <motion.div
          className="group bg-white/80 border border-gray-200 shadow-xl rounded-2xl p-8 flex flex-col gap-3 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-md"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-3 font-Cactus-Classical-Serif" >
            <FaMapMarkerAlt className="text-cyan-600 group-hover:scale-110 transition-transform duration-300" />
            Official Address
          </h2>
          <address className="not-italic text-gray-700 leading-relaxed text-base font">
            NL 6/5/13, Sector – 10, <br />
            Nerul, Navi Mumbai – 400706<br />
            Maharashtra, India
          </address>
        </motion.div>
        {/* Correspondence Address */}
        <motion.div
          className="group bg-white/80 border border-gray-200 shadow-xl rounded-2xl p-8 flex flex-col gap-3 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-md"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <FaEnvelope  className="text-cyan-600 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-Cactus-Classical-Serif whitespace-nowrap" >Address for Correspondence</span>
          </h2>
          <address className="not-italic text-gray-700 leading-relaxed text-base">
            Dr. Sudhir Nikam <br />
            A-2, 503, Punyoday Park <br />
            Near Don Bosco School, Adharwadi <br />
            Kalyan (West), Thane – 421 301
          </address>
          <div className="mt-4 space-y-2">
            <p className="flex items-center gap-2 text-gray-800">
              <FaPhoneAlt className="text-cyan-500" />
              <a href="tel:09322530571" className="font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded">
                09322530571
              </a>
            </p>
            <p className="flex items-center gap-2 text-gray-800">
              <FaEnvelope className="text-cyan-500" />
              <a
                href="mailto:sudhirnikam@gmail.com"
                className="hover:underline text-cyan-700 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
              >
                sudhirnikam@gmail.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
      {/* Mobile Action Bar
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex md:hidden gap-4">
        <a
          href="tel:09322530571"
          className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-cyan-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <FaPhoneAlt /> Call
        </a>
        <a
          href="mailto:sudhirnikam@gmail.com"
          className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-cyan-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <FaEnvelope /> Email
        </a>
      </div> */}
    </section>
  );
}

export default Contact;
