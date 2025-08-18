import React from "react";
import { motion } from "framer-motion";

const Section_g = () => {
  const images = [
    {
      src: "https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/dd8a2b66-e8b4-404e-be67-92a5ef789ca3/64534090fbd92f6e99a0cb1d_3.png?format=1000w",
      title: "Sketch 1",
      rotate: "-3deg",
      height: "h-[360px]",
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/c6df49ef-a9ae-489f-9f65-340167dcc030/64533faebf29155e6723866f_33.png?format=1000w",
      title: "Sketch 2",
      rotate: "4deg",
      height: "h-[400px]",
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/a089bcd8-6e33-450a-af04-7655ca5a7802/64533f8a974c63751f299754_1+%281%29.png?format=1500w",
      title: "Sketch 3",
      rotate: "-2deg",
      height: "h-[380px]",
    },
  ];

  return (
    <section className="bg-[#F5F2EC] px-4 sm:py-20 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#2A2523] text-center pb-10"
        >
            SKETCHES
        </motion.h2>

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

export default Section_g;
