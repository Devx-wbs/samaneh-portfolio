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

// Light background & border colors
const bgColors = [
  { bg: "bg-[#fff8f5]", border: "border-[#FFB399]" },
  { bg: "bg-[#f5fbff]", border: "border-[#99D6FF]" },
  { bg: "bg-[#f7fff8]", border: "border-[#9FFFA3]" },
  { bg: "bg-[#fffef5]", border: "border-[#FFE699]" },
];

// Highlight Component
const Highlight = ({ children }) => (
  <span className="bg-gradient-to-r from-gray-700 via-gray-900 to-[#ff7f50] bg-clip-text text-transparent font-semibold">
    {children}
  </span>
);

export default function Section_b() {
  const [headingRef, inViewHeading] = useInView({ triggerOnce: false });
  const headingControls = useAnimation();

  const [paraRef, inViewPara] = useInView({ triggerOnce: false });
  const paraControls = useAnimation();

  useEffect(() => {
    headingControls.start(inViewHeading ? "visible" : "hidden");
  }, [inViewHeading, headingControls]);

  useEffect(() => {
    paraControls.start(inViewPara ? "visible" : "hidden");
  }, [inViewPara, paraControls]);

  const paragraphs = [
    <>
      I’m a <Highlight>UX Researcher</Highlight> with a Master’s in{" "}
      <Highlight>Human-Computer Interaction</Highlight> from UC Santa Cruz and
      a background in <Highlight>Cognitive Science</Highlight> and{" "}
      <Highlight>Psychology</Highlight>. My academic training gives me a deep
      understanding of the mental processes that drive user behavior,
      decision-making, and emotional response—insights I bring into every stage
      of product development.
    </>,
    <>
      Currently, I’m working at <Highlight>Apple</Highlight>, where I lead both{" "}
      <Highlight>rapid</Highlight> and <Highlight>longitudinal</Highlight> UX
      research on upcoming products. I collaborate closely with{" "}
      <Highlight>cross-functional teams</Highlight> to uncover user needs,
      assess product usability, and provide insights that directly inform{" "}
      <Highlight>design</Highlight> and <Highlight>engineering decisions</Highlight>.
    </>,
    <>
      Previously, I conducted UX research for both <Highlight>B2B</Highlight>{" "}
      and <Highlight>B2C</Highlight> organizations, including an{" "}
      <Highlight>e-commerce wellness platform</Highlight> and an{" "}
      <Highlight>immigration services firm</Highlight>. I’ve translated user
      data into <Highlight>actionable insights</Highlight>, established{" "}
      <Highlight>UX standards</Highlight> and <Highlight>design systems</Highlight>,
      and created <Highlight>scalable research practices</Highlight> that improve
      product quality and consistency.
    </>,
    <>
      I’m passionate about creating <Highlight>inclusive</Highlight>,
      research-driven digital experiences and thrive at the intersection of{" "}
      <Highlight>behavioral science</Highlight> and{" "}
      <Highlight>design</Highlight>. My goal is to make meaningful contributions
      that not only improve <Highlight>usability</Highlight> but also align with{" "}
      <Highlight>business strategy</Highlight> and <Highlight>user values</Highlight>.
    </>,
  ];

  return (
    <section className="bg-[#fafafa] w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-8 md:gap-16 text-center">
        
        {/* Animated Heading with Center-Out Underline */}
        <motion.div
          ref={headingRef}
          className="w-full flex flex-col items-center"
          variants={headingVariants}
          initial="hidden"
          animate={headingControls}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-700 via-gray-900 to-[#ff7f50] bg-clip-text text-transparent"
            style={{ lineHeight: 1.05 }}
          >
            <span className="block transition-all duration-300 cursor-pointer">
              MY CAREER SO FAR
            </span>
          </h2>

          {/* Underline animation from center */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: inViewHeading ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-[3px] mt-3 bg-gradient-to-r from-gray-700 via-gray-900 to-[#ff7f50] rounded-full origin-center w-[45%]"
          />
        </motion.div>

        {/* Animated Paragraphs */}
        <motion.div
          ref={paraRef}
          className="w-full m-auto text-[#332f29] text-sm sm:text-base md:text-lg space-y-6"
          variants={paragraphContainer}
          initial="hidden"
          animate={paraControls}
        >
          {paragraphs.map((content, index) => (
            <motion.p
              key={index}
              variants={paragraphVariants}
              className={`p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-[4px] w-full 
                ${bgColors[index % bgColors.length].bg} 
                ${bgColors[index % bgColors.length].border}`}
            >
              {content}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
