import React from 'react';
import { motion } from 'framer-motion';
import { LightBulbIcon } from '@heroicons/react/24/solid';

const Section_b = () => {
  return (
    <div className="min-h-[70vh] bg-gradient-to-b from-[#F9F6EF] to-[#EDEAE2] px-6 py-8 flex justify-center items-center font-sans">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative bg-white px-6 sm:px-10 py-12 rounded-xl shadow-xl max-w-6xl w-full border-l-4 border-purple-500 overflow-hidden"
      >
        {/* Floating Dot Grid Background */}
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-[radial-gradient(#c7d2fe_1px,transparent_1px)] bg-[length:8px_8px] opacity-20 rounded-full pointer-events-none z-0" />

        {/* Heading with Icon */}
        <div className="flex items-center gap-4 relative z-10">
          <LightBulbIcon className="w-10 h-10 text-purple-500" />
          <h2
            className="text-[40px] sm:text-[48px] font-extrabold text-[#1e1e1e] leading-none tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              INSPIRATION
            </span>
          </h2>
        </div>

        {/* Paragraph */}
        <p
          className="mt-6 text-[20px] sm:text-[24px] font-medium text-[#2b2520] leading-relaxed tracking-tight max-w-4xl relative z-10"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span className="text-blue-600 font-medium">DYLAN BAKER’S INTERACTIVE WEBSITE</span> INSPIRED US TO CREATE A{' '}
          <span className="text-purple-600 font-medium">RESEARCH BACKED PLATFORM</span>{' '}
          WHICH IS NOT ONLY <span className="underline underline-offset-4 decoration-blue-500">INTERACTIVE</span>{' '}
          BUT ALSO <span className="underline underline-offset-4 decoration-blue-500">EFFECTIVE</span> IN DELIVERING THE INFORMATION SUCCESSFULLY.
        </p>
      </motion.div>
    </div>
  );
};

export default Section_b;





