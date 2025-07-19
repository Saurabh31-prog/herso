// // src/components/SearchModal.jsx
// import { FaSearch } from "react-icons/fa";
// import { IoCloseCircleOutline } from "react-icons/io5";

// export default function SearchModal({ isOpen, onClose, searchQuery, setSearchQuery }) {
//   if (!isOpen) return null;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       // handle search logic here
//       console.log("Searching for:", searchQuery);
//       onClose(); // close modal
//       setSearchQuery("");
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md animate-fadeIn font-IBMPlexSans">
//         <div className="p-6">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-lg font-semibold text-gray-900">Search</h3>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700 transition-colors"
//               aria-label="Close search"
//             >
//               <IoCloseCircleOutline className="w-6 h-6" />
//             </button>
//           </div>
//           <form onSubmit={handleSubmit} className="relative">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Type to search..."
//               className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200 text-sm"
//               autoFocus
//             />
//             <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <button
//               type="submit"
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-500 text-white px-4 py-1 rounded-md hover:bg-teal-600 transition-colors duration-200 text-sm"
//             >
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function SearchModal({ isOpen, onClose, query, setQuery }) {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[9999] flex justify-center items-start pt-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white w-full max-w-3xl rounded-xl p-6 relative shadow-xl"
        initial={{ scale: 0.9, y: -20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
          onClick={onClose}
          aria-label="Close search"
        >
          <IoCloseCircleOutline size={30} />
        </button>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for something..."
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-lg"
        />

        {/* Add search suggestions / results below if needed */}
      </motion.div>
    </motion.div>
  );
}
