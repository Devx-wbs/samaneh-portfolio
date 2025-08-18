import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Target } from "lucide-react";

const Section_c = () => {
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
    <section className="bg-[#f8f5ec] w-full px-4 sm:px-6 md:px-10 py-8 sm:py-16 font-sans">
      <motion.div
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="max-w-7xl mx-auto bg-white px-6 py-8 sm:px-10 sm:py-12 rounded-xl shadow-2xl flex flex-col gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Title */}
        <motion.h2
          variants={textVariant}
          custom={0}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#2E2B26] tracking-tight mb-4 sm:mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          PROBLEM
        </motion.h2>

        {/* Problem Statement */}
        <motion.div
          variants={textVariant}
          custom={1}
          className="border-l-4 pl-4 sm:pl-5 border-accent-teal bg-[#f9fafb] rounded-md shadow-sm py-4"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-3">
            <AlertTriangle className="text-accent-teal w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] md:w-[26px] md:h-[26px] flex-shrink-0" />
            <h3
              className="text-lg sm:text-xl md:text-2xl  font-bold text-accent-teal"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Problem Statement
            </h3>
          </div>
          <ul
            className="list-disc pl-5 sm:pl-6 text-sm sm:text-base md:text-lg text-[#444] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <li>
              Users report UX issues with PathWave Measurement Analytics despite its robust capabilities.
            </li>
            <li>
              Users frequently prefer alternative software like Excel, Tableau, and Spotfire for data analysis and exploration tasks.
            </li>
          </ul>
        </motion.div>

        {/* Goals */}
        <motion.div
          variants={textVariant}
          custom={2}
          className="border-l-4 pl-4 sm:pl-5 border-[#E36414] bg-[#fef9f5] rounded-md shadow-sm py-4"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-3">
            <Target className="text-[#E36414] w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] md:w-[26px] md:h-[26px] flex-shrink-0" />
            <h3
              className="text-lg sm:text-xl md:text-2xl  font-bold text-[#E36414]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Goals
            </h3>
          </div>
          <ul
            className="list-disc pl-5 sm:pl-6 text-sm sm:text-base md:text-lg text-[#444] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <li>
              Enhance PWMA’s user experience by understanding target users’ needs and behaviors.
            </li>
            <li>
              Identify barriers preventing users from gaining insight through data in PWMA.
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section_c;
