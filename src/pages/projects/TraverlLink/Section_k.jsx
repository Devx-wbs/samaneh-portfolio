import React from "react";
import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/d52d62a3-b049-4923-8ba6-554a80a03998/64535addf473ee4ae4de08f7_High+Fidelity+Prototype3.png?format=2500w",
    alt: "High Fidelity Prototype 1",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/bdbab7cd-b91b-4869-9c2b-337801e5ef0c/64535addd027964e8f19838a_High+Fidelity+Prototype1.png?format=2500w",
    alt: "High Fidelity Prototype 2",
  },
];

const Section_k = () => {
  return (
    <section className="bg-[#f6f3ee] py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center bg-white px-10 py-8 rounded-md">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-10">
          MOBILE HIGH <span className="text-[#6B4EFF]">FIDELITY</span>
        </h2>

        <div className="space-y-12">
          {images.map(({ src, alt }, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-2xl overflow-hidden bg-white shadow-lg cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 40px rgba(0,0,0,0.2)",
              }}
            >
              {/* Animated border using an absolutely positioned div */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1, borderColor: "#3B82F6" }} // blue border on hover
                transition={{ duration: 0.4, ease: "easeOut" }}
              />

              <img
                src={src}
                alt={alt}
                className="w-full h-auto object-contain rounded-2xl"
                draggable={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_k;
