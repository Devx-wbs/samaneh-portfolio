
import React from 'react';
import { motion } from 'framer-motion';

const Section_c = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="min-h-screen bg-[#F9F6EF] flex justify-center px-4 sm:px-6 py-10 sm:py-16 font-sans">
      <motion.div
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="bg-white p-5 sm:p-8 md:p-12 rounded-xl shadow-xl max-w-7xl w-full flex flex-col lg:flex-row gap-10"
      >
        {/* Left Content */}
        <motion.div
          className="flex-1 text-[#2b2520]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2
            className="text-[28px] sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-10 text-center lg:text-left text-[#1e1e1e]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            variants={textVariant}
            custom={0}
          >
            PROJECT <span className="text-blue-600">MOTIVATION</span>
          </motion.h2>

          {/* EDUCATION */}
          <motion.div
            variants={textVariant}
            custom={1}
            className="mb-6 sm:mb-8 border-l-4 pl-4 border-[#14b8a6] bg-[#f9fafb] rounded-md"
          >
            <h3
              className="text-lg sm:text-xl md:text-2xl font-extrabold mb-2 text-[#6B4EFF]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              • EDUCATION
            </h3>
            <p
              className="text-sm sm:text-base leading-relaxed text-[#444]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Understanding <span className="text-[#14b8a6] font-semibold">dark patterns</span> is essential because they are deceptive design techniques used in websites and apps to trick users into making decisions they might not have made if the information was presented fairly and transparently.
            </p>
          </motion.div>

          {/* VULNERABLE POPULATION */}
          <motion.div
            variants={textVariant}
            custom={2}
            className="mb-6 sm:mb-8 border-l-4 pl-4 border-[#E36414] bg-[#fef9f5] rounded-md"
          >
            <h3
              className="text-lg sm:text-xl md:text-2xl font-extrabold mb-2 text-[#E36414]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              • VULNERABLE POPULATION
            </h3>
            <p
              className="text-sm sm:text-base leading-relaxed text-[#444]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              It’s particularly important for <span className="font-semibold text-[#E36414]">teenagers</span> and the <span className="font-semibold text-[#E36414]">elderly</span> to be aware of dark patterns because these groups can be more vulnerable to online manipulation. Teenagers, still developing critical thinking skills, and the elderly, less digitally literate, can be misled by confusing interfaces.
            </p>
          </motion.div>

          {/* INTERACTIVE WEBSITE */}
          <motion.div
            variants={textVariant}
            custom={3}
            className="border-l-4 pl-4 border-[#6B4EFF] bg-[#f7f6ff] rounded-md"
          >
            <h3
              className="text-lg sm:text-xl md:text-2xl font-extrabold mb-2 text-[#6B4EFF]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              • INTERACTIVE WEBSITE
            </h3>
            <p
              className="text-sm sm:text-base leading-relaxed text-[#444]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              We decided to create an <span className="text-[#6B4EFF] font-semibold">interactive website</span> to simulate real-world scenarios where dark patterns occur. This hands-on approach helps users identify and avoid manipulative designs more effectively than just theoretical learning.
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
            src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/442b143c-043e-4b78-a3ff-4bb97a2dfaa7/6453898fe9a444ceffea0770_Group+428.png?format=1000w"
            alt="Project Motivation Illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Section_c;
