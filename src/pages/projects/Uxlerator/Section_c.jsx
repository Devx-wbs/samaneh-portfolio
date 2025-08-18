import React from "react";
import { motion } from "framer-motion";

const Section_c = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section className="bg-[#f8f5ec] w-full sm:py-20 py-8 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl p-10 flex flex-col items-center relative">
        
        {/* Centered Heading with consistent motion */}
        <motion.h2
          className="font-extrabold text-3xl sm:text-4xl md:text-5xl mb-6 text-center"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#2E2B26" }}
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ amount: 0.2 }} // replays every time in/out of view
        >
          DESIGN{" "}
          <span className="text-[#6B4EFF]">
            REQUIREMENTS
          </span>
        </motion.h2>

        {/* Image with fade-up and hover scale */}
        <motion.div
          className="w-full flex justify-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ amount: 0.2 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <img
            src="/project_b_img_a.png"
            alt="Keysight PWMA"
            className=" lg:max-w-[930px] md:max-w-[700px] max-w-full rounded-xl shadow-lg"
            style={{ objectFit: "contain" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Section_c;

