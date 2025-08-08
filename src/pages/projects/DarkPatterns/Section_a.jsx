import React from "react";
import { motion } from "framer-motion";

const Section_a = () => {
  return (
    <>
      {/* Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@700&display=swap');
        `}
      </style>

      <section className="min-h-screen bg-gradient-to-b from-[#F4F4F2] to-[#E8E8E3] text-[#1F1F1F] px-6 md:px-16 py-24 font-sans">
        <div className="max-w-7xl mx-auto">

          {/* Heading & Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-start gap-4 pt-10">
              <div className="w-1 h-12 md:h-14 bg-blue-500 rounded-sm"></div>
              <h1
                className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold leading-tight tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                DARK
                <br />
                PATTERNS
              </h1>
            </div>

            <p
              className="mt-6 text-[16px] sm:text-[20px] md:text-[24px] font-semibold leading-snug text-[#333333]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              A WEBSITE THAT DISPLAYS
              <br />
              COMMON DARK VISUAL
              <br />
              DESIGN LAYOUTS AND
              <br />
              PATTERNS.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="mt-16 grid gap-10 sm:grid-cols-2">

            {/* TEAM Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-amber-100 opacity-0 group-hover:opacity-10 rounded-2xl transition duration-300 pointer-events-none" />
              <h2
                className="text-[18px] sm:text-[24px] md:text-[28px] font-extrabold text-blue-600 mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                TEAM
              </h2>
              <ul
                className="text-[14px] sm:text-[16px] md:text-[18px] text-[#444] font-medium space-y-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <li>KRISTINA</li>
                <li>LAPIRA</li>
                <li>NAOMI DUSID</li>
                <li>SUBRAMANIAN</li>
                <li>KIMIA</li>
                <li>MOSTADAN</li>
              </ul>
            </motion.div>

            {/* TOOLS Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-amber-100 opacity-0 group-hover:opacity-10 rounded-2xl transition duration-300 pointer-events-none" />
              <h2
                className="text-[18px] sm:text-[24px] md:text-[28px] font-extrabold text-blue-600 mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                TOOLS
              </h2>
              <ul
                className="text-[14px] sm:text-[16px] md:text-[18px] text-[#444] font-medium space-y-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <li>PROCREATE</li>
                <li>FIGMA</li>
                <li>CONCEPT</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section_a;
