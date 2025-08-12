import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

const Section_i = () => {
  return (
    <section className="bg-gradient-to-b from-[#f8f5ec] to-[#f0ece3] w-full py-[80px] px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        
        {/* Heading */}
        <motion.h3
          className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-center text-black mb-12 tracking-wide"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ amount: 0.2 }} // triggers multiple times
        >
          MID-FI <span className="text-[#6B4EFF]">PROTOTYPES</span>
        </motion.h3>

        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ amount: 0.2 }} // triggers multiple times
        >
          <motion.img
            src="/project_b_img_m.png"
            alt="Keysight PWMA"
            className="md:max-w-[930px] max-h-[600px] max-w-full mx-auto my-10 rounded-xl shadow-md"
            style={{ objectFit: "contain" }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Section_i;
