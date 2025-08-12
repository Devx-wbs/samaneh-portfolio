import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const Section_l = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-100 via-white to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left bg-white py-20 px-6 sm:px-10 rounded-xl shadow-lg">
        
        {/* Logo with floating animation */}
        <motion.div
          className="flex flex-col items-center flex-1"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <div className="w-48 sm:w-56 h-48 sm:h-56 bg-white shadow-md flex items-center justify-center overflow-hidden border border-gray-300 rounded-2xl">
            <img
              src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/8adc4347-c504-4189-b6f4-757c64bd41a2/64535d2e88956b0bcc5d23d9_Mask+group.png?format=750w"
              alt="Travel Link Logo"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            MOBILE HIGH FIDELITY
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#6B4EFF] mt-1">
            PROTOTYPE
          </h2>

          {/* Links */}
          <div className="mt-8 space-y-4 max-w-md mx-auto lg:mx-0">
            {[
              { label: "LINK TO FIGMA HI-FI PROTOTYPE DEMO", href: "#" },
              { label: "LINK TO FULL FIGMA FILE", href: "#" },
            ].map(({ label, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold rounded-lg py-3 px-6 shadow-md hover:bg-indigo-700 hover:shadow-lg transition text-sm sm:text-base md:text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
                <FiExternalLink className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section_l;
