import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
      duration: 1.2,
      ease: 'easeOut',
    },
  }),
};

const Section_h = () => {
  return (
    <div className="min-h-screen bg-[#F9F6EF] flex justify-center px-4 sm:py-16 sm:px-6 py-8 font-sans">
      <div className="bg-white rounded-xl shadow-xl max-w-7xl w-full px-6 sm:px-10 md:px-16 py-12 flex flex-col items-center gap-12">

        {/* Animated Heading */}
        <motion.h2
          className="text-[28px] sm:text-5xl font-extrabold text-[#2B2520] text-center"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: false, amount: 0.3 }}
        >
          FINAL <span className="text-[#6B4EFF]">PROTOTYPE</span>
        </motion.h2>

        {/* Animated Embed (Image behaving like prototype/video) */}
        <motion.div
          className="w-full flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="w-full max-w-4xl aspect-[16/9] rounded-lg overflow-hidden shadow-md border">
            <img
              src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/00ea4201-eedd-42f9-bc20-51d84147ef30/Rectangle+140.png?format=2500w"
              alt="Final Prototype"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section_h;
