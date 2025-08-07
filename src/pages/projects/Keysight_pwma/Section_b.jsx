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
    <section className="bg-[#f8f5ec] w-full px-4 py-16 font-sans">
      <motion.div
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="max-w-7xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-2xl flex flex-col gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Title */}
        <motion.h2
          variants={textVariant}
          custom={0}
          className="text-4xl sm:text-5xl font-extrabold text-center text-[#2E2B26] tracking-tight mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          OVERVIEW
        </motion.h2>

        {/* What is Keysight PWMA? */}
        <motion.div
          variants={textVariant}
          custom={1}
          className="border-l-4 pl-5 border-accent-teal bg-[#f9fafb] rounded-md shadow-sm py-4"
        >
          <h3
            className="text-2xl sm:text-4xl font-bold text-accent-teal mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            • What is Keysight PWMA?
          </h3>
          <p
            className="text-base sm:text-lg text-[#444] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            PathWave Measurement Analytics (PWMA) is a data visualization and
            analytics software operated by Keysight Technologies.
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
            className="w-full max-w-3xl rounded-lg shadow-md"
          />
        </motion.div>

        {/* Workflow */}
        <motion.div
          variants={textVariant}
          custom={3}
          className="border-l-4 pl-5 border-[#E36414] bg-[#fff6f2] rounded-md shadow-sm py-4"
        >
          <p
            className="text-base sm:text-lg text-[#444] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Typically, the workflow of the test engineer is the following:
            <ol className="list-decimal pl-6 mt-4">
              <li>Capture and simulate the test data</li>
              <li>Run the physical test</li>
              <li>Store the results</li>
              <li>
                Analyze and correlate the results with the help of PWMA, the
                product we are working on
              </li>
            </ol>
          </p>
        </motion.div>

        {/* Project Structure */}
        <motion.div
          variants={textVariant}
          custom={4}
          className="border-l-4 pl-5 border-[#6B4EFF] bg-[#f7f6ff] rounded-md shadow-sm py-4"
        >
          <h3
            className="text-2xl sm:text-4xl font-bold text-[#6B4EFF] mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            • PROJECT STRUCTURE
          </h3>
          <p
            className="text-base sm:text-lg text-[#444] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We will start with defining the problem and goal, define our Research
            Question, and move to the main research with key findings and design
            recommendations. We also present User Personas and a User Experience
            Map based on our findings. At the end, we will cover our blockers and
            limitations that could possibly affect the findings.
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
            className="w-full max-w-3xl rounded-lg shadow-md"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section_b;
