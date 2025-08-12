import React from "react";
import { motion } from "framer-motion";

const Section_i = () => {
  return (
    <section className="bg-[#F5F2EC] px-4 py-20">
      <div className="max-w-7xl mx-auto bg-white p-10 rounded-xl shadow-md text-center">
        
        {/* Heading with subtle animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10"
        >
          VISUAL DESIGN
          <span className="text-[#6B4EFF]"> PROTOTYPES</span>
        </motion.h2>

        {/* Image container with effects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-lg shadow-lg group"
        >
          <img
            src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/6318da22-348e-417e-8e88-85029280acbc/645353af58368b68c8a322ff_user+journey.png?format=2500w"
            alt="Visual Design Prototype"
            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Caption */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm text-[#2A2523] rounded-full shadow-md text-sm font-medium"
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section_i;
