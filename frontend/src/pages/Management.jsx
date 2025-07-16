import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const managementData = [
  { sr: 1, name: "Dr. Sudhir Nikam", designation: "President" },
  { sr: 2, name: "Dr. Madhavi Nikam", designation: "Secretary" },
  { sr: 3, name: "Dr. Satyawan Hanegave", designation: "Treasurer" },
  { sr: 4, name: "Shri. Sharad Rankhamb", designation: "Vice-President" },
  { sr: 5, name: "Smt. Supriya Rankhamb", designation: "Jt. Secretary" },
  { sr: 6, name: "Prof. Venkatesh Rankhamb", designation: "Member" },
  { sr: 7, name: "Prin. Umesh Bagal", designation: "Member" },
  { sr: 8, name: "Adv. Chaani Srivastava, NewYork-New Delhi", designation: "Legal Advisor" },
];

function Management() {
  // table responsive code
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    const handleClickOutside = () => setSelectedRow(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleRowClick = (e, index) => {
    e.stopPropagation(); // fixed typo
    setSelectedRow(index === selectedRow ? null : index);
  };

  return (
    <section className="relative flex flex-col flex-grow justify-center items-center bg-gradient-to-br from-emerald-200 via-blue-100 to-violet-300 py-16 px-2 sm:px-6 pt-32 select-none caret-transparent min-h-screen">
      {/* Title */}
      <motion.div
        className="relative z-10 text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide mb-2 text-[#7c0a02] font-UoqMunThenKhung">
          HIGHER EDUCATION AND RESEARCH SOCIETY
        </h1>
        <h3 className="text-2xl md:text-3xl font-black text-purple-950 mt-2 mb-4 font-sans " style={{ fontFamily: 'Roboto, sans-serif', letterSpacing: '0.05em' }}>
          MANAGEMENT
        </h3>
        <div className="w-20 border-t-2 border-purple-400 mx-auto mt-2" />
      </motion.div>
      {/* Table Card */}
      <motion.div
        className="relative z-10 w-full max-w-3xl bg-white/90 border border-gray-200 shadow-2xl rounded-md p-2 sm:p-6 backdrop-blur-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm md:text-base text-left rounded-md overflow-hidden font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <thead>
              <tr className="bg-gray-800 text-white border-b border-gray-300">
                <th className="py-4 px-4 font-bold text-base md:text-lg">Sr. No.</th>
                <th className="py-4 px-4 font-bold text-base md:text-lg">Name</th>
                <th className="py-4 px-4 font-bold text-base md:text-lg">Designation</th>
              </tr>
            </thead>
            <tbody>
              {managementData.map((row, idx) => {
                const isSelected = selectedRow === idx;
                return (
                  <tr
                    key={row.sr}
                    onClick={e => handleRowClick(e, idx)}
                    className={`transition-colors duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-purple-300/60"
                        : idx % 2 === 1
                        ? "bg-purple-100/60"
                        : "bg-white"
                    } hover:bg-pink-100/80`}
                  >
                    <td className="py-3 px-4 align-top rounded-l-xl">{row.sr}</td>
                    <td className="py-3 px-4 align-top">{row.name}</td>
                    <td className="py-3 px-4 align-top rounded-r-xl">{row.designation}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}

export default Management;





