import React from "react";
import { motion } from "framer-motion";

const sketches = [
  { src: "/project_b_img_c.png", label: "Sketch 1", rotate: "-3deg" },
  { src: "/project_b_img_d.png", label: "Sketch 2", rotate: "0deg" },
  { src: "/project_b_img_e.png", label: "Sketch 3", rotate: "3deg" },
];

export default function SketchesSection() {
  return (
    <section className="bg-[#f8f5ec] py-16 px-6 flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-12">
        {sketches.map(({ src, label, rotate }, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative"
            style={{ rotate }}
          >
            {/* Yellow tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-yellow-300 rounded-sm shadow-md shadow-yellow-200/70 z-10"></div>

            {/* White photo card */}
            <div className="bg-white rounded-md shadow-lg overflow-hidden w-72">
              <img
                src={src}
                alt={label}
                className="w-full h-[380px] object-contain bg-white"
                draggable={false}
              />
              {/* Gray label bar */}
              <div className="bg-gray-500 text-white text-center py-2 text-lg font-medium">
                {label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
