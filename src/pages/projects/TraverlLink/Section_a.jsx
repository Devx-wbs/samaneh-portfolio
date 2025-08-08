import React from "react";
import { motion } from "framer-motion";

const Section_a = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
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
    <section
      id="section_a"
      className="min-h-screen bg-[#F5F2EC] flex justify-center px-6 py-16 font-sans scroll-mt-24"
    >
      <motion.div
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="bg-white p-8 sm:p-12 rounded-xl shadow-2xl max-w-7xl w-full flex flex-col md:flex-row gap-10 mt-16"
      >
        {/* Left Side */}
        <div className="flex-1 text-[#2A2523]">
          {/* Main Title */}
          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold mb-12 text-center md:text-left leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0 }}
            custom={0}
          >
            TRAVEL <br /> LINK
          </motion.h1>

          {/* Project Description */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0 }}
            custom={1}
            className="mb-10 border-l-[5px] pl-5 border-[#373A69] bg-[#f2f3fc] rounded-md shadow-sm py-4"
          >
            <h3
              className="text-xl sm:text-2xl font-bold text-[#373A69] mb-2 border-b border-[#373A69] pb-1 tracking-wide"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              • PROJECT
            </h3>
            <p
              className="text-base sm:text-lg text-[#444] leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              A PLATFORM WHERE YOU WILL FIND EVERYTHING TO PLAN A TRIP.
            </p>
          </motion.div>

          {/* My Role */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0 }}
            custom={2}
            className="mb-6 border-l-[5px] pl-5 border-[#E36414] bg-[#fff6f2] rounded-md shadow-sm py-4"
          >
            <h3
              className="text-xl sm:text-2xl font-bold text-[#E36414] mb-2 border-b border-[#E36414] pb-1 tracking-wide"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              • MY ROLE
            </h3>
            <p
              className="text-base sm:text-lg text-[#444] leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              UX — Researcher / Designer
            </p>
          </motion.div>

          {/* Tools */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0 }}
            custom={3}
            className="border-l-[5px] pl-5 border-[#006D77] bg-[#ebf8f9] rounded-md shadow-sm py-4"
          >
            <h3
              className="text-xl sm:text-2xl font-bold text-[#006D77] mb-2 border-b border-[#006D77] pb-1 tracking-wide"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              • TOOLS
            </h3>
            <p
              className="text-base sm:text-lg text-[#444] leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Figma, Invision
            </p>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.img
            src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/7b49fc3b-98d9-42c5-b540-3489860bd357/64525dee4b2003354e6000cd_Rectangle+14.png?format=1000w"
            alt="Travel Illustration"
            className="w-full max-w-md rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
              opacity: { duration: 0.8 },
            }}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section_a;





















