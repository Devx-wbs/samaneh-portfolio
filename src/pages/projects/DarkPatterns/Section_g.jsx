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
    <div className="min-h-screen bg-[#F9F6EF] flex justify-center px-4 py-20 font-sans">
      <div className="bg-white rounded-xl shadow-xl max-w-7xl w-full px-6 py-12">
        
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-[#2B2520] text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: false, amount: 0.3 }}
        >
          MAIN <span className="text-blue-600">TAKEAWAY</span>
        </motion.h2>

        {/* Content Row */}
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
              className="w-72 sm:w-80 lg:w-96 h-auto"
            />
          </motion.div>

          {/* Text */}
          <motion.p
            className="text-[#2B2520] text-lg sm:text-xl font-medium leading-relaxed tracking-wide max-w-xl mx-auto lg:mx-0"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: false, amount: 0.3 }}
          >
            As <span className="font-bold text-[#6B4EFF]">Future UX Professionals</span>, we’ve realized the true value of making 
            <span className="text-[#6B4EFF] font-semibold"> ethical design decisions</span> — even when it goes against the 
            <span className="italic text-[#6B4EFF]"> stakeholder’s expectations</span>. Good design isn’t just beautiful, it’s <span className="underline decoration-[#5C2E91]/60">responsible</span>.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Section_g;


