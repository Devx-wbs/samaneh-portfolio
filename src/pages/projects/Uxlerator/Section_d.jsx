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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Section_d = () => {
  return (
    <section className="relative bg-[#f8f5ec] w-full sm:py-[80px] py-8 px-4 overflow-hidden ">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl border border-[#eee] p-8 sm:p-10 lg:p-12 flex flex-col xl:flex-row items-center gap-10 xl:gap-14 relative backdrop-blur-md shadow-2xl">

        {/* Text Section */}
        <motion.div
          className="w-full xl:w-1/2 flex flex-col items-center text-center xl:items-start xl:text-left px-4 sm:px-6 md:px-8 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={container}
        >
          <motion.h2
            className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#2E2B26] mb-6 uppercase tracking-wide"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            variants={fadeUpSmooth}
          >
            RESEARCH <span className="text-[#6B4EFF]">METHODS</span>
          </motion.h2>

          <h3 className="mb-8 text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed max-w-2xl text-gray-700">
            Our research methods include the followings:
          </h3>

          <motion.div
            className="flex flex-wrap gap-4 sm:gap-5 max-w-2xl justify-center xl:justify-start"
            variants={container}
          >
            {researchMethods.map((method, index) => (
              <motion.span
                key={index}
                className="bg-gradient-to-r from-[#6B4EFF] to-[#E36414] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-normal text-sm sm:text-base md:text-lg cursor-default shadow-md text-center w-full sm:w-[400px]" 
                variants={fadeUpSmooth}
              >
                {method}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full xl:w-1/2 relative flex justify-center mt-8 xl:mt-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute w-[85%] h-[85%] bg-gradient-to-tr from-[#6B4EFF33] to-[#E3641433] rounded-2xl blur-xl"></div>

          <motion.img
            src="/project_b_img_b.png"
            alt="Keysight PWMA"
            className="max-w-full rounded-2xl relative z-10"
            style={{ objectFit: "contain" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Section_d;


