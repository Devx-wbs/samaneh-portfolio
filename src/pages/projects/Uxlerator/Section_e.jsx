
import React from "react";
import { motion } from "framer-motion";

const Section_e = () => {
  const images = [
    {
      src: "/project_b_img_c.png", // swapped with your first image
      title: "Sketch 1",
      rotate: "-3deg",
      height: "h-[360px]",
    },
    {
      src: "/project_b_img_d.png", // swapped with your second image
      title: "Sketch 2",
      rotate: "4deg",
      height: "h-[400px]",
    },
    {
      src: "/project_b_img_e.png", // swapped with your third image
      title: "Sketch 3",
      rotate: "-2deg",
      height: "h-[380px]",
    },
  ];

  return (
    <section className="bg-[#F5F2EC] px-4 py-20">
      <div className="max-w-7xl mx-auto">
       
       {/* Image cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 relative">
          {/* Decorative background shapes */}
          <div className="absolute -z-10 w-40 h-40 bg-[#6B4EFF]/10 rounded-full top-10 left-5 blur-2xl"></div>
          <div className="absolute -z-10 w-56 h-56 bg-yellow-300/20 rounded-full bottom-10 right-10 blur-2xl"></div>

          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: img.rotate,
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotate: "0deg",
              }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`bg-white p-3 rounded-lg shadow-lg relative w-64 ${img.height} hover:shadow-2xl`}
              style={{
                boxShadow:
                  "0px 10px 25px rgba(0,0,0,0.15), inset 0 0 30px rgba(0,0,0,0.03)",
              }}
            >
              {/* “Tape” decoration */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-yellow-300/70 rotate-[3deg]"></div>

              {/* Image */}
              <img
                src={img.src}
                alt={img.title}
                className="object-contain w-full h-full"
              />

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-center py-1 text-sm">
                {img.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_e;
