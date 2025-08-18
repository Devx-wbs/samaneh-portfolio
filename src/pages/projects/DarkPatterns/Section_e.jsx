import React from 'react';
import { motion } from 'framer-motion';
import { ShieldExclamationIcon, ClockIcon } from '@heroicons/react/24/solid';

const conclusions = [
  {
    title: '• OLDER USERS ARE MORE CONCERNED WITH POSSIBLE FINANCIAL LOSS',
    quote:
      '“I get scared like they might be hacking my account especially when I’m doing personal finance.”',
    author: 'Participant, Age 56',
    icon: ShieldExclamationIcon,
  },
  {
    title: '• THE YOUNGER GENERATION IS MORE CONCERNED ABOUT THEIR TIME',
    quote:
      '“TikTok is something I feel like (…) I know in the back of my head that time is wasted when I scroll too long.”',
    author: 'Participant, Age 19',
    icon: ClockIcon,
  },
];

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Section_e = () => {
  return (
    <div className="min-h-screen bg-[#F9F6EF] flex justify-center px-4 sm:px-6 sm:py-16 py-8 font-sans">
      <motion.div
        className="bg-white w-full max-w-7xl rounded-xl shadow-xl p-6 sm:p-10 md:p-12 flex flex-col md:flex-row items-center gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Left Image */}
        <motion.div
          className="flex justify-center w-full md:w-1/2"
          variants={textVariant}
          custom={0}
        >
          <img
            src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/dd9d0c17-e5aa-4fff-affc-eb9422bec1ad/64539a00aaa52922617f5c89_Group+436.png?format=750w"
            alt="Conclusion Illustration"
            className="max-w-[260px] w-full object-contain"
          />
        </motion.div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-left text-[#2B2520] space-y-10">
          {/* Heading */}
          <motion.h2
            className="text-[28px] sm:text-4xl md:text-5xl font-extrabold text-center md:text-left"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            variants={textVariant}
            custom={1}
          >
            THE <span className="text-[#6B4EFF]">CONCLUSION</span>
          </motion.h2>

          {/* Quotes */}
          {conclusions.map((item, i) => {
            const Icon = item.icon;

            const styleSequence = [
              { border: 'border-[#14B8A6]', bg: 'bg-[#f9fafb]', text: 'text-[#14B8A6]' },
              { border: 'border-[#E36414]', bg: 'bg-[#fef9f5]', text: 'text-[#E36414]' },
            ];
            const style = styleSequence[i % styleSequence.length];

            return (
              <motion.div
                key={i}
                variants={textVariant}
                custom={i + 2}
                className={`px-6 py-6 rounded-md shadow-md ${style.bg} ${style.border} border-l-4`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#E2E8F0] flex items-center justify-center shadow-sm">
                    <Icon className={`h-5 w-5 ${style.text}`} />
                  </div>
                  <h3
                    className="text-sm sm:text-base md:text-lg font-bold text-[#2B2520]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  className="italic text-sm sm:text-base md:text-lg text-gray-700 font-medium"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.quote}
                </p>
                <p
                  className={`mt-2 text-sm sm:text-base md:text-lg italic font-bold ${style.text}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.author}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Section_e;

