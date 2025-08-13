import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";

const Section_g = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-[#f8f5ec] w-full pb-[60px] pt-[60px] px-4 sm:px-6 md:px-8">
      <motion.div
        className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 md:gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Left content */}
        <motion.div
          className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left"
          variants={fadeUp}
          custom={1}
        >
          {/* Heading */}
          <h2
            className="font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-wide text-black mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            SOLUTION
          </h2>

          {/* Creative Paragraph */}
          <motion.div
            className="relative w-full max-w-[700px] flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-gradient-to-r from-[#f3f1ff] to-[#ece9ff] border-l-4 border-[#6B4EFF] p-4 sm:p-6 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <FaLightbulb className="text-[#6B4EFF] text-3xl sm:text-4xl mt-1 flex-shrink-0 drop-shadow-md" />
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              At <span className="font-bold text-[#6B4EFF]">UXelerator</span>,
              we’re committed to helping people at every stage of their UX
              career — from finding direction, to building portfolios, to
              creating meaningful professional connections that truly last.
            </p>
          </motion.div>
        </motion.div>

        {/* Right image */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          variants={fadeUp}
          custom={2}
        >
          <motion.img
            src="/project_b_img_h.png"
            alt="Keysight PWMA"
            className="max-h-[400px] sm:max-h-[500px] max-w-full sm:max-w-[80%] md:max-w-full rounded-lg shadow-lg"
            style={{ objectFit: "contain" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.8 },
            }}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section_g;
