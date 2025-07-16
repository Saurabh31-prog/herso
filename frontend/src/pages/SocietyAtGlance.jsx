import { motion } from "framer-motion";

export default function SocietyAtGlance() {
  return (
    <section className="relative flex flex-col justify-center items-center bg-gradient-to-br from-emerald-200 via-blue-100 to-violet-300 py-16 px-2 sm:px-6 pt-32 select-none caret-transparent pattern-dots">
      {/* Decorative Background Blobs */}
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

      {/* Content Card */}
      <motion.div
        className="relative z-10 w-full max-w-4xl bg-white/80 border border-gray-200 shadow-xl rounded-2xl p-10 flex flex-col gap-6 backdrop-blur-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-Libre-Baskerville text-center">
          SOCIETY AT A GLANCE
        </h1>
        <p className="text-justify text-base leading-relaxed text-gray-700 font-['PT_Serif']">
          The Higher Education and Research Society is a New Mumbai-based international learned society concerned to advance understanding of higher education, especially through the insights, perspectives and knowledge offered by systematic research and scholarship. It is a registered society with the Government of Maharashtra, Assistant Charity Commissioner, Thane District, Maharashtra. The Society aims to be the leading international society in the field, as to both the support and the dissemination of research and higher education. We aim to commit to sustainable development and focus on the solutions to the climate change, social inequality, awareness of literature and language, spread of scientific attitude in academicians and citizens, practical and solution based approach to the higher education in general, introduction of applied education and many more…
        </p>
        <p className="text-justify text-base leading-relaxed text-gray-700 font-['PT_Serif']">
          The society aims to attain the sustainable development in the field of higher education and research through constant support to research and higher learning activities through various means available. This role is especially pronounced in the realm of higher education and research society because at these level students are being prepared to enter the skilled human resource market and emerge with skills to contribute to the intellectual property and they will act as harbingers of ideas. The sustainable development that we wish is not only an economic process but also an academic process. It enables the pattern of resources meeting the needs of the present as well as to enhance the ability of future generations to meet their own intellectual needs. In order to preserve the standard of natural world, economic, social, environmental and academic world, it is essential to consider and harmonise the intellectual factors. Formal and informal learning, through raising awareness and influencing behaviour, has a pivotal function, if sustainable development is to be achieved.
        </p>
        <p className="text-justify text-base leading-relaxed text-gray-700 font-['PT_Serif']">
          Progressively, universities and other higher education institutions have been incorporating sustainable development values and practices into their core activities like teaching and research, institutional management and operational systems. However, the debate still persists primarily on the rationale and reasoning for why sustainable development needs broad adoption. The international discussion, however, has failed to specify the various actions that higher education needs to adopt.
        </p>
        <p className="text-justify text-base leading-relaxed text-gray-700 font-['PT_Serif']">
          Therefore, the work the society intended to undertake is to identify and communicate good practice case studies in teaching and research, community relations and institutional management. It will surely help to develop visions of higher education and to optimise its contribution to sustainable development and also, to look at areas where policy solutions may be needed to support higher educations’ contribution to sustainable development.
        </p>
        <p className="text-justify text-base leading-relaxed text-gray-700 font-['PT_Serif']">
          Hence, with a vigour and vitality in our ideas and dreams to undertake a herculean task of spreading applied as well as conceptual higher education and research to boost the knowledge and economy.
        </p>
      </motion.div>
    </section>
  );
}
