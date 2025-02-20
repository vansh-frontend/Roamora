import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";

export const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 to-pink-500 text-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-md bg-white p-8 rounded-lg shadow-xl"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, yoyo: Infinity }}
          className="relative w-40 h-40 mx-auto"
        >
          <div className="absolute inset-0 bg-yellow-300 rounded-full animate-pulse"></div>
          <div className="absolute inset-4 bg-white rounded-full border-4 border-gray-800 flex items-center justify-center shadow-lg">
            <motion.span 
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-7xl"
            >😵</motion.span>
          </div>
        </motion.div>
        <h1 className="text-4xl font-extrabold text-gray-800 mt-6 animate-fadeIn">Oh no! Something went wrong</h1>
        <p className="text-gray-600 mt-3 animate-fadeIn">We can’t find the page you’re looking for, but don’t worry, you can find your way back home.</p>
        <NavLink to="/">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg flex items-center gap-2 hover:bg-blue-700 transition transform shadow-md"
          >
            <FaHome className="animate-bounce" /> Take Me Home
          </motion.button>
        </NavLink>
      </motion.div>
    </div>
  );
};