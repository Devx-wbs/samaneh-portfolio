import React from "react";
import { motion } from "framer-motion";

const Section_b = () => {
  return (
    <section className="min-h-60 bg-[#f1f1f1] flex items-center justify-center px-4 sm:py-16 py-8">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full md:w-[320px] bg-[#FF8C3E] text-gray-900 p-6 sm:p-8 rounded-xl shadow-xl text-center md:text-left flex flex-col justify-between h-[240px] md:h-96 hover:shadow-2xl transition-shadow duration-300"
        >
          <div>
            <h2 className="text-lg sm:text-xl font-grotesk font-bold mb-4 tracking-wide uppercase">
              KEYSIGHT PWMA
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-10 leading-relaxed font-inter">
              Design improvements for Keysight's analytics software, Pathwave
              Measurement Analytics.
            </p>
          </div>
          <button className="bg-[#1f1f1f] hover:bg-black text-white px-6 py-3 rounded-md text-sm w-full md:w-auto transition-all duration-300 shadow-sm font-inter">
            VIEW PROJECT
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 12,
            delay: 0.1,
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="relative w-full md:w-2/3 bg-[#FFCE9F] rounded-md px-6 py-10 flex flex-col items-center text-center shadow-xl"
        >
          <div className="bg-white/30 backdrop-blur-md px-6 py-4 rounded-lg shadow-md w-full max-w-sm">
            <h3 className="text-gray-800 text-lg sm:text-xl md:text-2xl font-grotesk tracking-wide">
              UX DESIGN/RESEARCH
              <br />
            </h3>
            <p className="text-gray-900 text-2xl sm:text-4xl font-grotesk font-bold tracking-tight mt-2 leading-tight">
              KEYSIGHT PWMA <br className="hidden sm:block" />
            </p>
          </div>

          <img
            src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/9ce9a86c-6c7d-4da3-a5f7-71a04c23df39/65513038fdbf390e34f05484_Keysight%2BMain%2BImage-p-1600%2B%281%29.png?format=1500w"
            alt="Laptop Interface"
            className="h-48 sm:h-56 md:h-64 drop-shadow-lg rounded-lg hover:scale-105 transition duration-300 mt-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Section_b;
