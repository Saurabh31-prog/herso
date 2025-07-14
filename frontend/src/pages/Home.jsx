import { motion } from "framer-motion";



// function Home() {
//   return (
//     <>
//       <main className="flex-grow">
//         <div className="py-20 px-4 bg-gray-800 text-center text-gray-600 space-y-10">
//           {[...Array(20)].map((_, i) => (
//             <p key={i} className="text-lg">
//               This is sample scroll content line #{i + 1}.
//             </p>
//           ))}
//         </div>
//       </main>
//     </>
//   );
// }

function Home() {
  return (
    <motion.main
      className="flex-grow"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="py-20 px-4 bg-gray-800 text-center text-gray-600 space-y-10">
        {[...Array(20)].map((_, i) => (
          <p key={i} className="text-lg">
            This is sample scroll content line #{i + 1}.
          </p>
        ))}
      </div>
    </motion.main>
  );
}

export default Home;
