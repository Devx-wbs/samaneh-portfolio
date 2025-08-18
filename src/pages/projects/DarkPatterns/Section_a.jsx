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

      <section className="min-h-screen bg-gradient-to-b from-[#F4F4F2] to-[#E8E8E3] text-[#1F1F1F] px-6 md:px-16 sm:py-24 pt-20 pb-8 font-sans">
        <div className="max-w-7xl mx-auto ">
          {/* Heading & Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-start gap-4 pt-10 ">
              <div className="w-1 h-12 md:h-14 bg-[#6B4EFF] rounded-sm"></div>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                DARK
                <br />
                PATTERNS
              </h2>
            </div>

            <p
              className="mt-6 text-sm sm:text-base md:text-lg  font-semibold leading-snug text-[#333333]"
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
              <h3
                className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#6B4EFF] mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                TEAM
              </h3>
              <ul
                className="text-sm sm:text-base md:text-lg  text-[#444] font-medium space-y-1"
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
              <h3
                className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#6B4EFF] mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                TOOLS
              </h3>
              <ul
                className="text-sm sm:text-base md:text-lg  text-[#444] font-medium space-y-1"
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
