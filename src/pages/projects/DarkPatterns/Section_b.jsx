import React from 'react';
import { motion } from 'framer-motion';

const Section_b = () => {
  return (
    <div className=" min-h-[70vh] bg-gradient-to-b from-[#F9F6EF] to-[#EDEAE2] px-6 py-8 flex justify-center items-center font-sans">
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative bg-white px-6 sm:px-10 py-12 rounded-xl shadow-xl max-w-6xl w-full border-l-8 border-blue-500"
      >
        <h2
          className="text-[40px] sm:text-[48px] font-extrabold text-[#1e1e1e] leading-none tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          INSPIRATION
        </h2>

        <p
          className="mt-6 text-[20px] sm:text-[24px] font-bold text-[#2b2520] leading-snug tracking-tight"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          DYLAN BAKER’S INTERACTIVE WEBSITE INSPIRED US TO CREATE A RESEARCH BACKED PLATFORM WHICH IS NOT ONLY INTERACTIVE BUT ALSO EFFECTIVE IN DELIVERING THE INFORMATION SUCCESSFULLY.
        </p>
      </motion.div>
    </div>
  );
};

export default Section_b;

