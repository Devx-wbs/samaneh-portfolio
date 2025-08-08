import React from 'react';
import { UserIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const quotes = [
  {
    text: '“…SPAM…have been really intimidating to me since I get easily manipulated”',
    author: 'Participant, Age 61',
  },
  {
    text: '“…Too long of unskippable ads [makes me] frustrated…”',
    author: 'Participant, Age 19',
  },
  {
    text: '“You feel like you are being stalked…”',
    author: 'Participant, Age 56',
  },
];

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Section_d = () => {
  return (
    <div className="min-h-screen bg-[#F9F6EF] px-4 sm:px-8 py-16 flex justify-center font-sans">
      <motion.div
        className="bg-white p-6 sm:p-10 md:p-12 rounded-xl shadow-xl max-w-7xl w-full text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-[28px] sm:text-4xl md:text-5xl font-extrabold text-[#1e1e1e] tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          variants={textVariant}
          custom={0}
        >
          RESEARCH <span className="text-blue-600">OUTCOMES</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-base sm:text-lg md:text-xl font-semibold mt-4 mb-10 text-[#B9A896]"
          variants={textVariant}
          custom={1}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          8 PARTICIPANTS :{' '}
          <span className="text-[#2b2520]">5 OLDER ADULTS & 3 YOUNGER ADULTS</span>
        </motion.p>

        {/* Quotes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 text-left">
          {quotes.map((quote, index) => {
            const styles = [
              { border: 'border-[#14B8A6]', bg: 'bg-[#f9fafb]', text: 'text-[#14B8A6]' },
              { border: 'border-[#E36414]', bg: 'bg-[#fef9f5]', text: 'text-[#E36414]' },
              { border: 'border-[#6B4EFF]', bg: 'bg-[#f7f6ff]', text: 'text-[#6B4EFF]' },
            ];
            const style = styles[index % styles.length];

            return (
              <motion.div
                key={index}
                custom={index + 2}
                variants={textVariant}
                className={`flex flex-col items-center px-6 py-6 rounded-md shadow-md ${style.bg} ${style.border} border-l-4 text-[#2b2520]
                  ${index === 2 ? 'sm:col-span-2 sm:w-1/2 sm:mx-auto' : ''}`}
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-4 rounded-full bg-[#E2E8F0] flex items-center justify-center shadow-sm">
                  <UserIcon className={`h-6 w-6 ${style.text}`} />
                </div>

                {/* Quote Text */}
                <p
                  className="italic font-medium text-sm sm:text-base md:text-lg leading-snug text-center"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {quote.text}
                </p>

                {/* Author */}
                <p
                  className={`mt-2 italic font-bold text-xs sm:text-sm ${style.text} text-center`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {quote.author}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Section_d;
