import React from "react";
import { motion } from "framer-motion";

const Section_f = () => {
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
    <section className="bg-[#f8f5ec] w-full px-4 sm:px-6 md:px-10 py-12 sm:py-16 font-sans">
      <motion.div
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="max-w-7xl mx-auto bg-white px-6 py-8 sm:px-10 sm:py-12 rounded-xl shadow-2xl flex flex-col gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2
          variants={textVariant}
          custom={0}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#2E2B26] tracking-tight mb-4 sm:mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          FUTURE WORK:
        </motion.h2>

        <motion.div
          variants={textVariant}
          custom={1}
          className="border-l-4 pl-4 sm:pl-6 border-[#6B4EFF] bg-[#f7f6ff] rounded-md shadow-sm py-4"
        >
          <p
            className="text-sm sm:text-base md:text-lg text-[#444] leading-relaxed mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We were able to understand user perception and nuances of the tool,
            and we will use these insights to prioritize the design goals and UI
            features further to suggest usability and accessibility improvements.
          </p>

          <ul
            className="list-disc pl-5 sm:pl-6 text-sm sm:text-base md:text-lg text-[#444] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <li>
              Collaborate with sponsors to prioritize the design goals based on
              time constraints and resources.
            </li>
            <li>Further, narrow down our scope of work.</li>
            <li>Suggest usability and accessibility improvements.</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}; // ← ✅ THIS closing brace was missing

export default Section_f;
