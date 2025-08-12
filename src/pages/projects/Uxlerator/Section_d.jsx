import React from "react";
import { motion } from "framer-motion";

const researchMethods = [
  "Semi-structured user interviews (interview students who are hunting for internships)",
  "User's reviews (find the common themes in user's reviews)",
  "Competitive analysis (compare similar platforms)",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUpSmooth = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Floating animation for pills
const floatAnimation = (delay) => ({
  y: [0, -8, 0], // small vertical motion
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
    delay, // staggered wave
  },
});

const Section_d = () => {
  return (
    <section className="relative bg-[#f8f5ec] w-full py-[80px] px-4 overflow-hidden">
      {/* Decorative blobs */}

      <div className="max-w-7xl mx-auto bg-white rounded-2xl border border-[#eee] p-12 flex flex-col md:flex-row items-center gap-14 relative backdrop-blur-md">
        
        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left px-8 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={container}
        >
          <motion.h2
            className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#2E2B26] mb-8 uppercase tracking-wide"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            variants={fadeUpSmooth}
          >
            RESEARCH <span className="text-[#6B4EFF]">METHODS</span>
          </motion.h2>

          <motion.h3
            className="mb-10 text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed max-w-xl text-gray-700"
            variants={fadeUpSmooth}
          >
            Our research methods include the followings:
          </motion.h3>

          <div className="flex flex-wrap gap-5 max-w-xl justify-center md:justify-start">
            {researchMethods.map((method, index) => (
              <motion.span
                key={index}
                className="bg-gradient-to-r from-[#6B4EFF] to-[#E36414] text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg cursor-default shadow-md"
                variants={fadeUpSmooth}
                animate={floatAnimation(index * 0.5)} // wave delay
                whileHover={{ scale: 1.05 }}
              >
                {method}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-1/2 relative flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Gradient overlay behind image */}
          <div className="absolute w-[90%] h-[90%] bg-gradient-to-tr from-[#6B4EFF33] to-[#E3641433] rounded-2xl blur-xl"></div>

          <motion.img
            src="/project_b_img_b.png"
            alt="Keysight PWMA"
            className="max-w-full rounded-2xl relative z-10"
            style={{ objectFit: "contain" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            whileInView={{ scale: [1, 1.02] }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Section_d;

