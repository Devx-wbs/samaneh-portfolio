import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation variants
const headingVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const paragraphContainer = {
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Section_b() {
  const [headingRef, inViewHeading] = useInView({ triggerOnce: false });
  const headingControls = useAnimation();

  const [paraRef, inViewPara] = useInView({ triggerOnce: false });
  const paraControls = useAnimation();

  useEffect(() => {
    if (inViewHeading) {
      headingControls.start("visible");
    } else {
      headingControls.start("hidden");
    }
  }, [inViewHeading, headingControls]);

  useEffect(() => {
    if (inViewPara) {
      paraControls.start("visible");
    } else {
      paraControls.start("hidden");
    }
  }, [inViewPara, paraControls]);

  return (
    <section className="bg-[#f7f7f7] w-full py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-8 md:gap-16 text-center">
        
        {/* Animated Heading */}
        <motion.div
          ref={headingRef}
          className="w-full flex justify-center"
          variants={headingVariants}
          initial="hidden"
          animate={headingControls}
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-gray-700 via-gray-900 to-[#ff7f50] bg-clip-text text-transparent"
            style={{ lineHeight: 1.05 }}
          >
            <span className="block transition-all duration-300 cursor-pointer">
              MY CAREER SO FAR
            </span>
          </h2>
        </motion.div>

        {/* Animated Paragraphs */}
        <motion.div
          ref={paraRef}
          className="w-full max-w-3xl m-auto text-[#332f29] text-base sm:text-lg space-y-6"
          variants={paragraphContainer}
          initial="hidden"
          animate={paraControls}
        >
          {[
            `I’m a UX Researcher with a Master’s in Human-Computer Interaction from UC Santa Cruz and a background in Cognitive Science and Psychology. My academic training gives me a deep understanding of the mental processes that drive user behavior, decision-making, and emotional response—insights I bring into every stage of product development.`,
            `Currently, I’m working at Apple, where I lead both rapid and longitudinal UX research on upcoming products. I collaborate closely with cross-functional teams to uncover user needs, assess product usability, and provide insights that directly inform design and engineering decisions.`,
            `Previously, I conducted UX research for both B2B and B2C organizations, including an e-commerce wellness platform and an immigration services firm. I’ve translated user data into actionable insights, established UX standards and design systems, and created scalable research practices that improve product quality and consistency.`,
            `I’m passionate about creating inclusive, research-driven digital experiences and thrive at the intersection of behavioral science and design. My goal is to make meaningful contributions that not only improve usability but also align with business strategy and user values.`,
          ].map((text, index) => (
            <motion.p key={index} variants={paragraphVariants}>
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}



