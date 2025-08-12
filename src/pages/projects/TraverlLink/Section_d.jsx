import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Consolidation",
    description: "Combining multiple travel planning tools in one",
    icon: "https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/59841e0f-e398-46bc-b37a-064f6262d713/64526708fdafebb6c9242446_Rectangle+89.png?format=300w",
    border: "#5BC0EB",
    bg: "#f0faff",
  },
  {
    title: "Documents",
    description: "A place for travellers to keep all of their travel plans and documents together",
    icon: "https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/4aec8fcc-0d41-49fe-9bfa-dec43355d778/64526707de5d028aa8311d4d_image+8.png?format=300w",
    border: "#9BC53D",
    bg: "#f6fff0",
  },
  {
    title: "Inspiration",
    description: "Customized suggestions for travel plans",
    icon: "https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/3f489b01-4eb3-4351-9c16-9c9704256275/6452670789778c46710ebe77_image+9.png?format=300w",
    border: "#FDE74C",
    bg: "#fffdf0",
  },
];

const Section_d = () => {
  return (
    <section className="bg-[#F5F2EC] py-24 px-4 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center bg-white p-6 sm:p-10 rounded-3xl shadow-xl">

        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-10 w-full"
        >
          <div className="relative pl-6 text-center lg:text-left">
            <span className="absolute left-0 top-1 h-full w-1 bg-[#6B4EFF] rounded-full hidden lg:block"></span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2A2523] leading-tight"
              style={{ fontFamily: "Space Grotesk" }}
            >
              Our Solution
              <br />
              <span className="text-[#6B4EFF]">(Core Functionality)</span>
            </h2>
          </div>

          <div className="space-y-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex items-start gap-4 p-5 rounded-lg shadow-md"
                style={{
                  backgroundColor: feature.bg,
                  borderLeft: `4px solid ${feature.border}`,
                }}
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain shrink-0"
                />
                <div>
                  <h3
                    className="text-lg sm:text-xl md:text-2xl font-bold text-[#2A2523]"
                    style={{ fontFamily: "Space Grotesk" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm sm:text-base md:text-lg text-[#2A2523]"
                    style={{ fontFamily: "Inter" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center items-center w-full lg:w-auto"
        >
          <img
            src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/60064241-d8b5-40e3-bcbf-6f584e0e6f7c/64526707fcb8a097f6b2afbd_image+10.png?format=1500w"
            alt="Core Functionality"
            className="w-full max-w-md object-contain rounded-lg shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Section_d;
