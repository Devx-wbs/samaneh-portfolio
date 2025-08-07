import React from 'react';
import { motion } from 'framer-motion';

const fadeUpText = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: 'easeOut',
    },
  },
};

const fadeUpImage = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4, // Slightly after text
      duration: 1.2,
      ease: 'easeOut',
    },
  },
};

const Section_f = () => {
  return (
    <div className="min-h-screen bg-[#F9F6EF] flex justify-center px-4 py-20 font-sans">
      <div className="bg-white w-full max-w-7xl rounded-xl shadow-md p-8 sm:p-12 flex flex-col items-center gap-12">

        {/* Animated Heading and Text */}
        <motion.div
          className="text-center text-[#2B2520]"
          variants={fadeUpText}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            THE <span className="text-blue-600">DESIGN</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Our final design integrates simplicity, interactivity, and clarity to help users of all ages recognize and resist dark patterns in everyday digital interfaces.
          </p>
        </motion.div>

        {/* Animated Image */}
        <motion.div
          className="w-full flex justify-center"
          variants={fadeUpImage}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.01 }}
        >
          <img
            loading="eager"
            src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/6ac5b718-d0d6-4ef9-8123-d860eddcdcb7/645d6839d4d75958f40cae1a_Page.png?format=1000w"
            alt="Dark Pattern Illustration"
            className="w-full max-w-4xl rounded-md shadow-lg"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Section_f;




