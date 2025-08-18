import React from "react";
import { motion } from "framer-motion";

const Section_e = () => {
  return (
    <section className="bg-gradient-to-b from-[#F5F2EC] to-[#eae6dd] px-4 sm:py-28 py-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto bg-white p-6 sm:p-14 rounded-3xl shadow-2xl text-center relative overflow-hidden"
      >
        {/* Decorative floating circles */}
        <motion.div
          className="absolute -top-10 -left-10 w-40 h-40 bg-[#8075DB]/10 rounded-full blur-3xl z-0"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#5BC0EB]/10 rounded-full blur-3xl z-0"
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#2A2523] z-10 relative"
        >
          CUSTOMER{" "}
          <span className="text-[#6B4EFF]">
            JOURNEY

          </span>
        </motion.h2>

        {/* Image with scale animation on scroll */}
        <motion.img
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/d66306f1-bd1f-498d-b8ce-834e286f17f9/64533be1e1ed7f732215933d_Picture.png?format=2500w"
          alt="Customer Journey Visual"
          className="w-full h-auto rounded-2xl mt-10 shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Section_e;
