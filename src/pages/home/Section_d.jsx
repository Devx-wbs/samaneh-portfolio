import React from "react";
import { motion } from "framer-motion";

const Section_d = () => {
  return (
    <div className="min-h-96 bg-[#f1f1f1] flex items-center justify-center px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl w-full">

        {/* Left Card - Slide from Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full md:w-[320px] bg-[#cc4ac0] text-white p-6 sm:p-8 rounded-xl shadow-xl text-center md:text-left flex flex-col justify-between h-96 hover:shadow-2xl transition-shadow duration-300"
        >
          <div>
            <h2 className="text-lg sm:text-xl font-grotesk font-bold mb-4 tracking-wide uppercase">
              Travel Link
            </h2>
            <p className="text-sm sm:text-base mb-10 leading-relaxed font-inter">
              A platform where you will <br className="hidden md:block" />
              find everything to plan a trip.
            </p>
          </div>
          <button className="bg-[#1f1f1f] hover:bg-black text-white px-6 py-3 rounded-md text-sm w-full md:w-auto transition-all duration-300 shadow-sm font-inter">
            VIEW PROJECT
          </button>
        </motion.div>

        {/* Right Section - Pop In with Spring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="relative w-full md:w-2/3 rounded-xl overflow-hidden flex flex-col items-center justify-center text-center px-6 py-14 bg-cover bg-center shadow-xl"
          style={{
            backgroundImage:
              "url('https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/f3827ffb-147a-4d98-9ffa-076da3a87c59/pink.png?format=2500w')",
          }}
        >
          {/* Glass Card */}
          <div className="bg-white/30 backdrop-blur-md px-6 py-4 rounded-lg shadow-md w-full max-w-sm">
            <h3 className="text-gray-800 text-lg sm:text-xl md:text-2xl font-grotesk tracking-wide">
              Travel Link
            </h3>
      
            <p className="text-gray-900 text-2xl sm:text-4xl font-grotesk font-bold tracking-tight mt-2 leading-tight">
              UX RESEARCH <br className="hidden sm:block" /> PROJECT
            </p>
          </div>

          {/* Device Images */}
          <div className="mt-10 flex justify-center items-end gap-6 sm:gap-10 relative z-10 flex-wrap">
            <img
              src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/68a71d60-c2d4-426d-8a57-f8295a2336ee/Group+620.png?format=500w"
              alt="Watch"
              className="h-36 sm:h-44 md:h-48 drop-shadow-lg rounded-lg hover:scale-105 transition duration-300"
            />
            <img
              src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/cbb509e4-527a-4bbe-afdf-e565438d7f3d/Group+471.png?format=750w"
              alt="Phone"
              className="h-40 sm:h-48 md:h-56 drop-shadow-lg rounded-lg hover:scale-105 transition duration-300"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Section_d;
