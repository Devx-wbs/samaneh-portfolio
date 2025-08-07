import React from "react";
import { motion } from "framer-motion";

const Section_a = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="min-h-screen bg-[#F9F6EF] flex justify-center px-6 py-16 font-sans">
      <motion.div
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="bg-white p-8 sm:p-12 rounded-xl shadow-2xl max-w-7xl w-full flex flex-col lg:flex-row gap-10 mt-16"
      >
        {/* Left Text Content */}
        <motion.div
          className="flex-1 text-[#2b2520]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Main Title */}
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold mb-12 text-center pt-6 lg:text-left"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            variants={textVariant}
            custom={0}
          >
            <span className="text-[#2B2520]">KEYSIGHT PWMA</span>{" "}
            <span className="text-[#6B4EFF]">· UX RESEARCH</span>
          </motion.h2>

          {/* Project Description */}
          <motion.div
            variants={textVariant}
            custom={1}
            className="mb-10 border-l-[5px] pl-5 border-accent-teal bg-[#f9fafb] rounded-md shadow-sm py-4"
          >
            <h3
              className="text-xl sm:text-2xl font-bold text-accent-teal mb-2 border-b border-accent-teal pb-1 tracking-wide"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              • PROJECT
            </h3>
            <p
              className="text-base sm:text-lg text-[#444] leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              MHCI CAPSTONE PROJECT TO IMPROVE THE USER EXPERIENCE OF THE KEYSIGHT
              PATHWAVE MEASUREMENT ANALYTICS (PWMA) TOOL.
            </p>
          </motion.div>

          {/* Team Info */}
          <motion.div
            variants={textVariant}
            custom={2}
            className="border-l-[5px] pl-5 border-[#E36414] bg-[#fff6f2] rounded-md shadow-sm py-4"
          >
            <h3
              className="text-xl sm:text-2xl font-bold text-[#E36414] mb-2 border-b border-[#E36414] pb-1 tracking-wide"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              • TEAM
            </h3>
            <p
              className="text-base sm:text-lg text-[#444] leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Rebekah Anjum, Elnaz Mostadam, Shivanni Gupta, Tom Dzi
            </p>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src="/project_a_img_a.png"
            alt="Keysight PWMA"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Section_a;













