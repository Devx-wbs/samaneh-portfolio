import React from "react";
import { motion } from "framer-motion";

const Section_e = () => {
  return (
    <div className="min-h-96 bg-[#ececec] flex items-center justify-center px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl w-full">

        {/* Left Panel - Image Block with Glassmorphism + Scroll Bottom Motion */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative w-full md:w-2/3 rounded-xl overflow-hidden flex flex-col items-center justify-center text-center px-6 py-14 bg-cover bg-center shadow-xl"
          style={{
            backgroundImage:
              "url('https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/df350a30-81c7-46bc-a0f4-340cf6590c8b/6454a11ecd601a2264d2bb48_Group+2.png?format=2500w')",
          }}
        >
          <div className="bg-white/30 backdrop-blur-md px-6 py-4 rounded-lg shadow-md w-full max-w-sm">
            <h1 className="text-gray-800 text-xl sm:text-2xl font-grotesk tracking-wide">
              UXLERATOR
            </h1>
            <p className="text-gray-900 text-2xl sm:text-4xl font-grotesk font-bold tracking-tight mt-2 leading-tight">
              UX RESEARCH <br className="hidden sm:block" /> PROJECT
            </p>
          </div>

          <div className="mt-10 flex justify-center items-end gap-6 sm:gap-10 flex-wrap relative z-10">
            <img
              src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/ea42e7b3-8a30-4520-9c6a-ee506ed5a6e2/6453a8cba8c868919978b408_Group+461+%281%29.png?format=750w"
              alt="UX Screen Left"
              className="h-48 sm:h-56 md:h-64 drop-shadow-lg rounded-lg hover:scale-105 transition duration-300"
            />
            <img
              src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/1d944fc5-9b49-43de-afdc-1ccb2d713d50/Picture6+%282%29.png?format=750w"
              alt="UX Screen Right"
              className="h-48 sm:h-56 md:h-64 drop-shadow-lg rounded-lg hover:scale-105 transition duration-300"
            />
          </div>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full md:w-[320px] bg-[#55b197] text-gray-900 p-6 sm:p-8 rounded-xl shadow-xl text-center md:text-left flex flex-col justify-between h-96 hover:shadow-2xl transition-shadow duration-300"
        >
          <div>
            <h2 className="text-lg sm:text-xl font-grotesk font-bold mb-4 tracking-wide">
              UXLERATOR
            </h2>
            <p className="text-sm sm:text-base mb-10 leading-relaxed font-inter">
              A mobile app for UX job seekers to connect with experienced
              mentors, seek career guidance and establish networks.
            </p>
          </div>
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-md text-sm w-full md:w-auto transition-all duration-300 shadow-sm font-inter">
            VIEW PROJECT
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Section_e;
