import React from "react";
import { motion } from "framer-motion";

const iconData = [
  {
    title: "LUCRATIVE MARKET",
    description: "Travel spending in the US alone was about $97 billion in Dec 2022",
    source: "(ustravel.org)",
    color: "border-[#6B4EFF]",
  },
  {
    title: "INCREASE MARKET POTENTIAL",
    description: "With decline in the threat of COVID, there may be a large increase in travel.",
    color: "border-[#E36414]",
  },
  {
    title: "TRAVELLER STRESS",
    description: "Travel planning is stressful and can take an emotional toll on users.",
    color: "border-[#28B5B5]",
  },
];

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Section_c = () => {
  return (
    <section className="bg-[#F5F2EC] py-20 px-4 flex justify-center">
      <motion.div
        className="bg-white max-w-7xl w-full p-6 sm:p-10 rounded-xl grid md:grid-cols-2 gap-12 shadow-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Left Content */}
        <motion.div variants={textVariant} custom={0}>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-[#2A2523] mb-12 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            WHY CARE ABOUT <br className="hidden sm:block" />{" "}
            <span className="text-blue-600">TRAVEL PLANNING</span>
          </h2>

          <div className="space-y-10">
            {iconData.map((item, i) => (
              <motion.div
                key={i}
                className={`border-l-4 ${item.color} pl-5 py-4 bg-[#f9fafb] rounded-md shadow-sm`}
                variants={textVariant}
                custom={i + 1}
              >
                <h3
                  className="text-xl sm:text-2xl font-bold text-[#2A2523] mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-base sm:text-lg text-[#444] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.description}
                </p>
                {item.source && (
                  <p className="text-sm text-[#888] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.source}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
            >
            <img
              src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/e9f29fd4-4eee-467e-b482-f4c1063619c8/645260543c8fe46ceaff14f5_Group+310+1.png?format=1500w"
              alt="Travel Planning Illustration"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
        </motion.div>
    </motion.div>
    </section >
  );
};

export default Section_c;

