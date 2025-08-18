import React from "react";
import { motion } from "framer-motion";

const Section_f = () => {
  return (
    <section className="bg-gradient-to-b from-[#F5F2EC] to-[#eae6dd] px-4 sm:py-28 py-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto bg-white p-6 sm:p-14 rounded-3xl shadow-2xl text-center"
      >
        {/* Heading - exact same as Section_e */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#2A2523]"
        >
          USER{" "}
          <span className="text-[#6B4EFF]">
            FLOW
            
          </span>
        </motion.h2>

        {/* Image with same scale animation */}
        <motion.img
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/987db73f-870f-4aae-a00f-e90837b2ef24/64533d309062354a9b296127_user+flow.png?format=2500w"
          alt="User Flow Visual"
          className="w-full h-auto rounded-2xl mt-10 shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Section_f;
