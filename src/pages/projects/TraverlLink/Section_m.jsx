import React from "react";
import { motion } from "framer-motion";

const Section_m = () => {
  return (
    <section className="bg-[#f6f3ee] sm:py-16 py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
            DESKTOP SOFTWARE AND
            <br />
            <span className="text-[#6B4EFF]">APPLE WATCH VERSION</span>
          </h2>
          <div className="w-20 h-1 bg-[#6B4EFF] rounded-full mx-auto md:mx-0 mb-6"></div>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
            Experience seamless integration across devices with our powerful desktop software and sleek Apple Watch app.
          </p>
        </motion.div>

        {/* Images */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-8 relative items-center">
          
          {/* Glow / Blur Background */}
          <div className="absolute -top-14 sm:top-0 left-10 sm:left-0 w-[280px] sm:w-[360px] h-[200px] sm:h-[260px] rounded-3xl bg-gradient-to-tr from-[#6B4EFF]/20 via-transparent to-transparent filter blur-3xl pointer-events-none"></div>

          {/* Desktop Image */}
          <motion.div
            initial={{ rotateY: -10, y: 10, opacity: 0 }}
            whileInView={{ rotateY: 0, y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative rounded-3xl shadow-xl w-[250px] sm:w-[300px] md:w-[320px]"
            whileHover={{ y: -10, rotateY: 10, transition: { duration: 0.4, ease: "easeOut" } }}
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/162dab44-18bd-46fd-82f1-4dc844be6720/645362f728685c8e4b04663d_MacBook+Pro+14.png?format=1500w"
              alt="Desktop App"
              className="rounded-3xl w-full object-contain"
              draggable={false}
            />
          </motion.div>

          {/* Apple Watch Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }}
            className="relative"
          >
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#6B4EFF]/50 to-transparent blur-xl -z-10"></div>

            <img
              src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/2ec25809-63a6-4a46-bc39-774aa7b3b572/645362f6ddc6698cc5605a31_Group+620.png?format=500w"
              alt="Apple Watch"
              className="rounded-2xl shadow-md w-20 sm:w-24 md:w-28 object-contain"
              draggable={false}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section_m;
