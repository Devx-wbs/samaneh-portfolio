import React from "react";
import { motion } from "framer-motion";

const Section_e = () => {
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
        {/* Section Heading */}
        <motion.h2
          variants={textVariant}
          custom={0}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#2E2B26] tracking-tight mb-4 sm:mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          BLOCKERS & LIMITATIONS
        </motion.h2>

        {/* Blockers Section */}
        <motion.div
          variants={textVariant}
          custom={1}
          className="border-l-4 pl-4 sm:pl-5 border-accent-teal bg-[#f9fafb] rounded-md shadow-sm py-4"
        >
          <h3
            className="text-lg sm:text-xl md:text-2xl font-bold text-accent-teal mb-3 px-0"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            • BLOCKERS
          </h3>
          <p
            className="text-sm sm:text-base md:text-lg text-[#444] leading-relaxed mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            In our project journey, various challenges have arisen, including
            constraints in budget, resources, and time, impacting our ability to
            fully analyze features, engage participants, and evaluate transcripts
            thoroughly.
          </p>
          <ul
            className="list-disc pl-5 sm:pl-6 text-sm sm:text-base md:text-lg text-[#444] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <li>Budget: less analyzing features in Dovetail</li>
            <li>Limited Resources: lack of participant options, and less external resources</li>
            <li>Time: Minimized rounds of interviews, and prevented further evaluation of transcripts</li>
          </ul>
        </motion.div>

        {/* Limitations Section */}
        <motion.div
          variants={textVariant}
          custom={2}
          className="border-l-4 pl-4 sm:pl-5 border-[#E36414] bg-[#fef9f5] rounded-md shadow-sm py-4"
        >
          <h3
            className="text-lg sm:text-xl md:text-2xl font-bold text-[#E36414] mb-3 px-0"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            • LIMITATIONS
          </h3>
          <p
            className="text-sm sm:text-base md:text-lg text-[#444] leading-relaxed mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We faced some limitations, as we had minimal recruitment options and a
            tiny participant pool. We acknowledge that this may cause a lack of
            diversity in our persona generation.
          </p>
          <ul
            className="list-disc pl-5 sm:pl-6 text-sm sm:text-base md:text-lg text-[#444] leading-relaxed mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <li>Minimal recruitment options</li>
            <li>Internal users as interview participants</li>
            <li>Small participant pool</li>
            <li>Lack of diversity in participants for user personas</li>
          </ul>
          <p
            className="text-sm sm:text-base md:text-lg text-[#444] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            The limitations may add bias to the interview findings. Thus, we may
            miss some pain points and opportunities in our findings. However, with
            our sponsors' support, we may be able to recruit external participants
            for future work.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section_e;






