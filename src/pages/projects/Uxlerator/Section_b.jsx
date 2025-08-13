// import React, { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const Section_b = () => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.3,
//     triggerOnce: false,
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden");
//     }
//   }, [controls, inView]);

//   const fadeUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7, ease: "easeOut" },
//     },
//   };

//   const blobVariants = {
//     animate: {
//       scale: [1, 1.1, 1],
//       borderRadius: ["50% 50% 50% 50%", "60% 40% 30% 70%", "50% 50% 50% 50%"],
//       transition: {
//         duration: 8,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     },
//   };

//   return (
//     <section className="bg-[#f7f3e9] w-full py-20 px-4 relative overflow-hidden">
//       <div
//         ref={ref}
//         className="max-w-7xl mx-auto relative z-10 bg-white rounded-xl shadow-lg p-10 overflow-hidden"
//       >
//         {/* Heading */}
//         <motion.h2
//           className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-black"
//           style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//           initial="hidden"
//           animate={controls}
//           variants={fadeUp}
//         >
//           Problem
//         </motion.h2>

//         {/* Background morphing blobs */}
//         <motion.div
//           className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-[#6B4EFF] to-[#E36414] opacity-20 blur-2xl"
//           variants={blobVariants}
//           animate="animate"
//         />
//         <motion.div
//           className="absolute -bottom-16 -right-16 w-56 h-56 bg-gradient-to-r from-[#E36414] to-[#6B4EFF] opacity-20 blur-3xl"
//           variants={blobVariants}
//           animate="animate"
//           style={{ animationDelay: "2s" }}
//         />

//         {/* Paragraph Card with Glow */}
//         <motion.div
//           className="relative rounded-xl bg-white shadow-lg p-8 max-w-5xl mx-auto cursor-pointer border border-gray-100"
//           style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
//           initial="hidden"
//           animate={controls}
//           variants={fadeUp}
//           whileHover={{
//             scale: 1.03,
//             boxShadow: "0 0 30px rgba(107, 78, 255, 0.3)",
//           }}
//           transition={{ type: "spring", stiffness: 120, damping: 15 }}
//         >
//           {/* Paragraph with keyword animations */}
//           <p className="text-sm sm:text-base md:text-lg text-center text-[#444] leading-relaxed relative z-10">
//             Throughout our experience, we have realized that{" "}
//             <motion.span
//               className="font-semibold text-[#6B4EFF]"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4, duration: 0.6 }}
//             >
//               mentorship
//             </motion.span>{" "}
//             is crucial to any{" "}
//             <motion.span
//               className="font-semibold text-[#E36414]"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.7, duration: 0.6 }}
//             >
//               UX career
//             </motion.span>
//             . Since UX is still a fairly new field with no clear-cut structure, it is important to have someone who can{" "}
//             <motion.span
//               className="font-semibold text-[#6B4EFF]"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1, duration: 0.6 }}
//             >
//               guide
//             </motion.span>{" "}
//             your career.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Section_b;




import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section_b = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const blobVariants = {
    animate: {
      scale: [1, 1.1, 1],
      borderRadius: ["50% 50% 50% 50%", "60% 40% 30% 70%", "50% 50% 50% 50%"],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="bg-[#f7f3e9] w-full py-20 px-4 relative overflow-hidden">
      <div
        ref={ref}
        className="max-w-7xl mx-auto relative z-10 bg-white rounded-xl shadow-lg p-10 overflow-hidden"
      >
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-black"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          initial="hidden"
          animate={controls}
          variants={fadeUp}
        >
          Problem
        </motion.h2>

        {/* Background morphing blobs - responsive sizes & positions */}
        <motion.div
          className="
            pointer-events-none absolute
            -top-6 -left-6
            sm:-top-8 sm:-left-8
            md:-top-10 md:-left-10
            lg:-top-14 lg:-left-14
            w-20 h-20
            sm:w-28 sm:h-28
            md:w-36 md:h-36
            lg:w-40 lg:h-40
            bg-gradient-to-r from-[#6B4EFF] to-[#E36414]
            opacity-20 blur-2xl
          "
          variants={blobVariants}
          animate="animate"
        />
        <motion.div
          className="
            pointer-events-none absolute
            -bottom-10 -right-10
            sm:-bottom-12 sm:-right-12
            md:-bottom-14 md:-right-14
            lg:-bottom-16 lg:-right-16
            w-28 h-28
            sm:w-40 sm:h-40
            md:w-48 md:h-48
            lg:w-56 lg:h-56
            bg-gradient-to-r from-[#E36414] to-[#6B4EFF]
            opacity-20 blur-3xl
          "
          variants={blobVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />

        {/* Paragraph Card with Glow */}
        <motion.div
          className="relative rounded-xl bg-white shadow-lg p-8 max-w-5xl mx-auto cursor-pointer border border-gray-100"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(107, 78, 255, 0.3)" }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
        >
          <p className="text-sm sm:text-base md:text-lg text-center text-[#444] leading-relaxed relative z-10">
            Throughout our experience, we have realized that{" "}
            <motion.span
              className="font-semibold text-[#6B4EFF]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              mentorship
            </motion.span>{" "}
            is crucial to any{" "}
            <motion.span
              className="font-semibold text-[#E36414]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              UX career
            </motion.span>
            . Since UX is still a fairly new field with no clear-cut structure, it is important to have someone who can{" "}
            <motion.span
              className="font-semibold text-[#6B4EFF]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              guide
            </motion.span>{" "}
            your career.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Section_b;
