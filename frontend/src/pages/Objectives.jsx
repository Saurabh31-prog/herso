import { motion } from "framer-motion";

function Objectives() {
  const objectives = [
    "To promote and propagate education of every kind in the society as a whole.",
    "To establish and open study centers like research center, Education center, and science center, libraries where higher education can be given.",
    "To promote research in and the advancement of knowledge and understanding.",
    "To disseminate knowledge and the results of research.",
    "To encourage the exchange of ideas and the application of the results of research.",
    "To support the education and training of students, teachers and researchers.",
    "To provide resources in the areas of education, research, business, industry, government and public policy.",
    "To ensure that its scientific journals are regularly published, widely read and circulated, have high impact and attract an adequate supply of high-quality papers from an international range of authors.",
    "To organize Conferences ensuring that those provide an excellent forum for both general lectures and more specialised presentations.",
    "To provide younger members with adequate support to enable them to undertake and disseminate their research, attend conferences and workshops and enhance their professional skills.",
    "To establish publication units such as book publication, periodical publication like journals, magazines, and newspapers in print and electronic form.",
    "To confer awards and rewards to individuals and institutions for various achievements in higher education including social, cultural, political and literary activities.",
    "To provide financial help to publications like books, journals and periodicals.",
    "To conduct seminars, conferences, workshops, symposiums etc.",
    "To establish and open educational institutions to cater to the applied and concept based education within the framework of the existing regulating bodies in state as well as center."
  ];

  return (
    <section className="relative flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-violet-100 to-emerald-100 py-20 px-4 pt-32 select-none caret-transparent">
      {/* Background Decorative Blobs */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-200 rounded-full blur-3xl z-0"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100 rounded-full blur-2xl z-0"
      />

      {/* Title and Content */}
      <motion.div
        className="relative z-10 w-full max-w-4xl bg-white/80 border border-gray-200 shadow-xl rounded-2xl p-10 backdrop-blur-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center font-Libre-Baskerville">
          OBJECTIVES
        </h1>
        <ul className="list-disc pl-6 space-y-4 text-justify text-gray-700 text-base leading-relaxed font-['PT_Serif']">
          {objectives.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

export default Objectives;
