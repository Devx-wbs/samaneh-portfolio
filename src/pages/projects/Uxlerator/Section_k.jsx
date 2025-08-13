import React from "react";
import { motion } from "framer-motion";
import { LuTimer } from "react-icons/lu";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const points = [
  { text: "Time constraints only allowed us to interview our peers, limiting the diversity of collected data.", border: "#FF6B4E", bg: "#FFF2EE" },
  { text: "Our peers still brought diverse cultural and professional backgrounds to the research.", border: "#4E9EFF", bg: "#F3F9FF" },
  { text: "We must be mindful of the similarity in their language ability, education level, and financial background.", border: "#4EFF91", bg: "#F0FFF7" },
  { text: "All participants were fluent in English, studying for master’s degrees, and able to afford tuition in the U.S.", border: "#FFC44E", bg: "#FFFBF2" }
];

const Section_K = () => {
  return (
    <section className="bg-[#f8f5ec] w-full py-[80px] px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-10 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          >
          <motion.img
            src="/project_b_img_o.png"
            alt="Keysight PWMA"
            className="max-w-full rounded-xl shadow-2xl cursor-pointer"
            style={{ objectFit: "contain" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="w-full lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.h2
            className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#2E2B26] mb-6 flex items-center gap-3"
            variants={fadeUp}
          >
            <motion.span
              initial={{ rotate: -8 }}
              animate={{ rotate: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center"
            >
              <LuTimer className="text-[#6B4EFF] text-3xl sm:text-4xl md:text-5xl" />
            </motion.span>
            TIME:
          </motion.h2>

          <div className="space-y-5 w-full">
            {points.map((point, index) => (
              <motion.p
                key={index}
                className="w-full text-sm sm:text-base md:text-lg font-normal leading-relaxed p-4 rounded-lg shadow-sm border-l-4"
                style={{
                  borderColor: point.border,
                  backgroundColor: point.bg,
                  color: "#2E2B26"
                }}
                variants={fadeUp}
              >
                {point.text}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Thank You Line */}
      <motion.h2
        className="max-w-7xl m-auto mt-12 text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#6B4EFF]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 200,
          damping: 12,
        }}
      >
        THANK YOU FOR READING!
      </motion.h2>
    </section>
  );
};

export default Section_K;
