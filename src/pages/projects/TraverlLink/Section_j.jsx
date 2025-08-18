import React from "react";
import { motion } from "framer-motion";

const bulletItems = [
  {
    text: "Link logo to signify one of the major themes of the app which is consolidation",
    border: "#3B82F6",
    bg: "#EFF9FF",
  },
  {
    text: "Calming Blue color for the stresses that come with the travel experience",
    border: "#14B8A6",
    bg: "#E0F7F5",
  },
  {
    text: "Travel experience and Orange as a complimentary color",
    border: "#FB923C",
    bg: "#FFF5EB",
  },
  {
    text: "Symbols + words to make content more accessible",
    border: "#8B5CF6",
    bg: "#F5F0FF",
  },
  {
    text: "Rounded edges to provide the users with an experience that feels friendly and safe",
    border: "#22C55E",
    bg: "#E8F9ED",
  },
];

const Section_j = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
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
    <section
      id="section_j"
      className="min-h-screen bg-[#F5F2EC] flex justify-center px-6 sm:py-16 py-8 font-sans scroll-mt-24"
    >
      <motion.div
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="bg-white p-6 sm:p-10 md:p-16 rounded-xl shadow-2xl max-w-7xl w-full flex flex-col md:flex-col lg:flex-row gap-8 lg:gap-12"
      >
        {/* Left Side */}
        <div className="w-full lg:w-1/2 text-[#3A2C2B] px-1 sm:px-2 md:px-4">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 leading-tight text-center lg:text-left"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={0}
          >
            VISUAL <br /> <span className="text-[#6B4EFF]">DESIGN</span>
          </motion.h2>

          <motion.ul
            className="list-disc list-inside space-y-4  text-gray-700 text-base md:text-lg"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={1}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {bulletItems.map(({ text, border, bg }, index) => (
              <li
                key={index}
                className="rounded-xl pl-5 py-3"
                style={{
                  borderLeft: `4px solid ${border}`,
                  backgroundColor: bg,
                }}
              >
                {text}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right Side */}
        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.div
            className="w-full sm:w-[320px] md:w-[360px] bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h3
              className="text-center text-[#F26419] font-semibold text-lg sm:text-xl md:text-2xl mb-8"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Welcome to Travel Link!
            </h3>
            <div className="space-y-6">
              {/* Host Card */}
              <div className="bg-[#EAF3FC] rounded-xl p-5 flex gap-5 items-center cursor-pointer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2965/2965567.png"
                  alt="Host"
                  className="w-12 h-12"
                />
                <div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-800">
                    Host
                  </p>
                  <p className="text-sm text-gray-600">
                    You will be able to post your house listings for rental
                  </p>
                </div>
              </div>

              {/* Traveler Card */}
              <div className="bg-[#FAD9B9] rounded-xl p-5 flex gap-5 items-center text-gray-900 cursor-pointer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                  alt="Traveler"
                  className="w-12 h-12"
                />
                <div>
                  <p className="text-sm sm:text-base md:text-lg font-medium">
                    Traveler
                  </p>
                  <p className="text-sm">
                    You will be able to book your housing and activities all in
                    one place!
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <hr className="flex-grow border-t border-gray-200" />
              <span className="mx-4 text-gray-400 text-sm font-medium">OR</span>
              <hr className="flex-grow border-t border-gray-200" />
            </div>

            {/* Button */}
            <button
              className="bg-[#3B82F6] hover:bg-[#2563eb] text-white font-semibold py-3 w-full rounded-xl shadow-md"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Continue as a Guest
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section_j;
