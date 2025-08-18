import React from "react";
import { motion } from "framer-motion";

const Section_b = () => {
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
          OVERVIEW
        </motion.h2>

        {/* What is Keysight PWMA? */}
        <motion.div
          variants={textVariant}
          custom={1}
          className="border-l-4 pl-4 sm:pl-5 border-[#008080] bg-[#f9fafb] rounded-md shadow-sm py-4"
        >
          <h3
            className="text-lg sm:text-xl md:text-2xl  font-bold text-[#008080] mb-3 flex items-center gap-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <svg
              className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] md:w-[26px] md:h-[26px] flex-shrink-0 text-[#008080]"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            What is Keysight PWMA?
          </h3>
          <p
            className="text-sm sm:text-base md:text-lg text-[#333] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            PathWave Measurement Analytics (PWMA) is a data visualization and analytics software operated by Keysight Technologies.
            <br />
            <br />
            The primary users are the Test and Design Engineers of Keysight.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={textVariant}
          custom={2}
          className="flex justify-center"
        >
          <img
            src="/project_a_img_b.png"
            alt="Keysight PWMA"
            className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl rounded-lg shadow-md"
          />
        </motion.div>

        {/* Workflow */}
        <motion.div
          variants={textVariant}
          custom={3}
          className="border-l-4 pl-4 sm:pl-5 border-[#E36414] bg-[#fff6f2] rounded-md shadow-sm py-4"
        >
          <h3
            className="text-lg sm:text-xl md:text-2xl  font-bold text-[#E36414] mb-3 flex items-center gap-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <svg
              className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] md:w-[26px] md:h-[26px] flex-shrink-0 text-[#E36414]"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Workflow
          </h3>
          <p
            className="text-sm sm:text-base md:text-lg text-[#333] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Typically, the workflow of the test engineer is the following:
            <ol className="list-decimal pl-6 mt-3">
              <li>Capture and simulate the test data</li>
              <li>Run the physical test</li>
              <li>Store the results</li>
              <li>Analyze and correlate the results with the help of PWMA, the product we are working on</li>
            </ol>
          </p>
        </motion.div>

        {/* Project Structure */}
        <motion.div
          variants={textVariant}
          custom={4}
          className="border-l-4 pl-4 sm:pl-5 border-[#008080] bg-[#f0f9f9] rounded-md shadow-sm py-4"
        >
          <h3
            className="text-lg sm:text-xl md:text-2xl  font-bold text-[#008080] mb-3 flex items-center gap-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <svg
              className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] md:w-[26px] md:h-[26px] text-[#008080] flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            Project Structure
          </h3>
          <p
            className="text-sm sm:text-base md:text-lg text-[#333] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We will start with defining the problem and goal, define our Research Question, and move to the main research with key findings and design recommendations. We also present User Personas and a User Experience Map based on our findings. At the end, we will cover our blockers and limitations that could possibly affect the findings.
          </p>
        </motion.div>

        {/* Second Image */}
        <motion.div
          variants={textVariant}
          custom={5}
          className="flex justify-center"
        >
          <img
            src="/project_a_img_c.png"
            alt="Project Structure"
            className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl rounded-lg shadow-md"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section_b;
