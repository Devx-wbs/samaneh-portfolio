import React from "react";
import { motion } from "framer-motion";

const Section_f = () => {
  const fadeUp = {
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

  // Pastel colors for list items
  const challengeColors = [
    { bg: "#f2f3fc", border: "#373A69" },
    { bg: "#fcefee", border: "#E36414" },
    { bg: "#eefcf2", border: "#006D77" },
    { bg: "#fff8e7", border: "#E3B614" },
    { bg: "#f9f2ff", border: "#8E44AD" },
  ];

  const expectationColors = [
    { bg: "#fff6f2", border: "#E36414" },
    { bg: "#f2fbff", border: "#006D77" },
    { bg: "#fef2f5", border: "#D72638" },
    { bg: "#f4f8ff", border: "#3F51B5" },
  ];

  const challenges = [
    "Awkwardness and shyness, Difficulty in scheduling",
    "Keep conversations going",
    "Mentor being busy / Lack of time",
    "Calendar connection/Transparency issue",
    "Difficulty in justifying people’s identity and authenticity",
  ];

  const expectations = [
    "Connection with LinkedIn, Anonymous review option, Unmatched expectations from both ends",
    "Topics to cover during mentoring sessions: figuring out goals / portfolio crit / design challenge / Mutual support/effort",
    "Responsiveness of both mentors and mentees",
    "(Lack of) Diversity and customization in mentor search, professional level",
  ];

  return (
    <section className="bg-[#f8f5ec] w-full pb-[70px] pt-[80px] px-2">
      <motion.div
        className="max-w-7xl mx-auto bg-white rounded-md shadow-md p-6 flex flex-col items-center"
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Main Title */}
        <motion.h2
          className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#2E2B26] mb-8 uppercase tracking-wide text-center"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          variants={fadeUp}
        >
          KEY <span className="text-[#6B4EFF]">FINDINGS</span>
        </motion.h2>

        {/* Image */}
        <motion.div
          variants={fadeUp}
          custom={1}
          className="w-full flex justify-center"
        >
          <motion.img
            src="/project_b_img_g.png"
            alt="Keysight PWMA"
            className="md:max-w-[930px] max-w-full mx-auto my-10 rounded shadow-lg"
            style={{ objectFit: "contain" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.8 },
            }}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.h3
          className="relative text-lg sm:text-xl md:text-2xl font-extrabold mb-6 text-center leading-tight tracking-wide bg-gradient-to-r from-[#006D77] via-[#E36414] to-[#6B4EFF] bg-clip-text text-transparent drop-shadow-sm"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          variants={fadeUp}
          custom={2}
        >
          Awkwardness in networking:
          <motion.span
            className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] h-[3px] w-0 bg-gradient-to-r from-[#006D77] via-[#E36414] to-[#6B4EFF] rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "60%" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.h3>

        {/* Lists */}
        <motion.div
          className="flex flex-col md:flex-row gap-5 w-full"
          variants={fadeUp}
          custom={3}
        >
          {/* Left List */}
          <motion.div
            className="w-full md:w-1/2 rounded-md shadow-sm p-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#373A69] mb-3">
              Challenges
            </h3>
            <ul className="space-y-3 text-sm sm:text-base md:text-lg text-[#444]">
              {challenges.map((item, index) => (
                <motion.li
                  key={index}
                  className="p-3 rounded-md shadow-sm"
                  style={{
                    backgroundColor: challengeColors[index % challengeColors.length].bg,
                    borderLeft: `5px solid ${challengeColors[index % challengeColors.length].border}`,
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right List */}
          <motion.div
            className="w-full md:w-1/2 rounded-md shadow-sm p-5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#E36414] mb-3">
              Expectations
            </h3>
            <ul className="space-y-3 text-sm sm:text-base md:text-lg text-[#444]">
              {expectations.map((item, index) => (
                <motion.li
                  key={index}
                  className="p-3 rounded-md shadow-sm"
                  style={{
                    backgroundColor: expectationColors[index % expectationColors.length].bg,
                    borderLeft: `5px solid ${expectationColors[index % expectationColors.length].border}`,
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section_f;
