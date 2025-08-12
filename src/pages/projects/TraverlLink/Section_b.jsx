import React from "react";
import { motion } from "framer-motion";

const Section_b = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="bg-[#F5F2EC] py-16 px-4 flex justify-center font-sans">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="bg-white max-w-7xl w-full p-10 rounded-xl shadow-xl"
      >
        {/* Heading */}
        <motion.h2
          className="text-[28px] sm:text-4xl md:text-5xl font-extrabold text-[#2A2523] mb-8 text-center lg:text-left"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          variants={textVariant}
          custom={0}
        >
          PROBLEM
        </motion.h2>

        {/* Description Box */}
        <motion.div
          variants={textVariant}
          custom={1}
          className="border-l-[5px] pl-5 border-[#E36414] bg-[#fff6f2] rounded-md shadow-sm py-4"
        >
          <p
            className="text-sm sm:text-base md:text-lg text-[#2A2523] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Travel planning stress is the very first thing that comes to mind
            even before we plan anything for a trip. <br /><br />
            People often need to use multiple tools to plan a trip—such as
            finding housing, creating a travel itinerary, and comparing costs.
            <br /><br />
            Additionally, travelers must ensure that the activities they're
            interested in are within a reasonable distance from housing accommodations.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section_b;



