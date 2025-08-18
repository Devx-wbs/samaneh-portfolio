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

const Section_g = () => {
  return (
    <div className="min-h-screen bg-[#F9F6EF] flex justify-center px-4 sm:py-16 sm:px-6 py-8 font-sans">
      <div className="bg-white rounded-xl shadow-xl max-w-7xl w-full px-6 sm:px-10 md:px-16 py-12 flex flex-col gap-12">

        {/* Heading */}
        <motion.h2
          className="text-[28px] sm:text-4xl md:text-5xl font-extrabold text-[#2B2520] text-center"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: false, amount: 0.3 }}
        >
          MAIN <span className="text-[#6B4EFF]">TAKEAWAY</span>
        </motion.h2>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: false, amount: 0.3 }}
            className="flex justify-center"
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/70fa513b-453e-44fb-a91d-bd659adc03e5/64539ce6e55e8af369fedbcc_Group+460.png?format=1000w"
              alt="Checklist Illustration"
              className="w-full max-w-[90%] sm:max-w-sm lg:w-96 h-auto"
            />
          </motion.div>

          {/* Text */}
          <motion.p
            className="text-[#2B2520] text-sm sm:text-base md:text-lg font-medium leading-relaxed tracking-wide max-w-xl mx-auto lg:mx-0"
            style={{ fontFamily: "'Inter', sans-serif" }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: false, amount: 0.1 }}
          >
            As{' '}
            <span className="font-bold text-[#6B4EFF] hover:text-[#7F5CFF] transition-colors duration-300">
              Future UX Professionals
            </span>, we’ve realized the true value of making{' '}
            <span className="text-[#6B4EFF] font-semibold hover:text-[#8C6CFF] transition-colors duration-300">
              ethical design decisions
            </span>{' '}
            — even when it goes against the{' '}
            <span className="italic text-[#6B4EFF] hover:text-[#A282FF] transition-colors duration-300">
              stakeholder’s expectations
            </span>. Good design isn’t just beautiful, it’s{' '}
            <span className="underline decoration-[#5C2E91]/60 decoration-2 underline-offset-4 hover:decoration-[#5C2E91] hover:text-[#5C2E91] transition-all duration-300">
              responsible
            </span>.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Section_g;
