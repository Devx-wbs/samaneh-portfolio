import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const images = [
  "/project_b_img_i.png",
  "/project_b_img_j.png",
  "/project_b_img_k.png",
  "/project_b_img_l.png",
];

const Section_h = () => {
  return (
    <section className="bg-[#f8f5ec] w-full sm:pb-[70px] sm:pt-[80px] px-3 py-8 sm:px-4 md:px-6">
      <div className="max-w-7xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl">
        {/* Heading */}
        <motion.h2
          className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-center text-black mb-12 tracking-wide"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
        >
          HI-FI <span className="text-[#6B4EFF]">PROTOTYPES</span>
        </motion.h2>

        {/* Row of phone mockups */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              className="w-[150px] h-[320px] sm:w-[200px] sm:h-[420px] md:w-[250px] md:h-[500px] lg:w-[280px] lg:h-[550px] flex justify-center items-center"
              animate={{
                y: idx % 2 === 0 ? [0, -20, 0] : [0, 20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.4,
              }}
            >
              <img
                src={src}
                alt={`Prototype ${idx + 1}`}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_h;
