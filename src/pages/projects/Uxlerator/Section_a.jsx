import React from "react";
import { motion } from "framer-motion";

const Section_a = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const infoCards = [
    {
      title: "My Role",
      value: "UX Researcher",
      border: "#323b6e",
      bg: "rgba(238, 240, 250, 0.8)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mr-1 h-5 w-5 text-[#323b6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1" />
        </svg>
      ),
    },
    {
      title: "Time",
      value: "2 Weeks",
      border: "#E36414",
      bg: "rgba(255, 246, 242, 0.8)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mr-1 h-5 w-5 text-[#E36414]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Tools",
      value: "Figma, Concept",
      border: "#006D77",
      bg: "rgba(235, 248, 249, 0.8)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mr-1 h-7 w-7 text-[#006D77]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75l-6 6m0 0V10.5m0 5.25h5.25" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-[#f7f3e9] w-full pb-[90px] pt-[200px] px-4 overflow-hidden">
      {/* White container */}
      <div className="max-w-7xl mx-auto bg-white rounded-xl border border-gray-100 p-10 flex flex-col relative z-10">
        
        {/* Heading & Paragraph */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={fadeUp}>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-center md:text-left"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#2E2B26" }}
          >
            <span className="bg-gradient-to-r from-[#6B4EFF] to-[#E36414] bg-clip-text text-transparent">UXLARATOR</span>
          </motion.h2>

          <motion.p
            className="mb-6 w-full max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed text-[#444] text-center md:text-left"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            A mobile app for{" "}
            <span className="relative font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6B4EFF] to-[#E36414] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#6B4EFF] after:to-[#E36414] after:rounded-full">
              UX job seekers
            </span>{" "}
            to connect with experienced mentors, seek career guidance, and establish networks.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
        >
          {infoCards.map((item) => (
            <motion.div
              key={item.title}
              className="p-6 rounded-xl border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              style={{
                borderLeft: `5px solid ${item.border}`,
                background: item.bg,
              }}
              variants={fadeUp}
            >
              <motion.h3
                className="text-lg sm:text-xl md:text-2xl font-bold mb-2 flex items-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: item.border }}
                variants={fadeUp}
              >
                {item.icon}
                {item.title}
              </motion.h3>

              <motion.p
                className="text-sm sm:text-base md:text-lg leading-[30px] text-[#444]"
                style={{ fontFamily: "'Inter', sans-serif" }}
                variants={fadeUp}
              >
                {item.value}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Section_a;
