import React from "react";
import { motion } from "framer-motion";

const Section_h = () => {
  return (
    <section className="bg-[#F5F2EC] px-4 sm:py-20 py-8">
      <div className="max-w-7xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-2xl text-center">
        
        {/* Heading with animation + underline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10"
        >
          <span className="text-[#2A2523] relative inline-block">
            LOW FIDELITY <span className="text-[#6B4EFF]"> PROTOTYPES</span>
          </span>
        </motion.h2>

        {/* Image container with hover & shadow effect */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-lg shadow-lg relative bg-white"
        >
          <img
            src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/045513cc-bbbc-418e-afb3-ce02b7e8608a/645342c37b4e2c59ed522309_5.png?format=2500w"
            alt="Low Fidelity Prototype"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Section_h;

