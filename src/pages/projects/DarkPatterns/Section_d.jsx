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
        className="bg-white p-8 sm:p-12 rounded-xl shadow-xl max-w-7xl w-full text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-[#2b2520] tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          variants={textVariant}
          custom={0}
        >
          RESEARCH <span className="text-blue-600">OUTCOMES</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-lg sm:text-xl font-bold mt-4 mb-10 text-[#B9A896]"
          variants={textVariant}
          custom={1}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          8 PARTICIPANTS :{' '}
          <span className="text-[#2b2520]">5 OLDER ADULTS & 3 YOUNGER ADULTS</span>
        </motion.p>

        {/* Quotes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8 text-left">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              custom={index + 2}
              variants={textVariant}
              className={`flex flex-col items-center px-6 py-6 rounded-md shadow-md bg-[#f9fafb] border-l-4 border-[#6B4EFF] text-[#2b2520]
                ${index === 2 ? 'sm:col-span-2 sm:w-1/2 sm:mx-auto' : ''}`}
            >
              {/* Icon */}
              <div className="w-12 h-12 mb-4 rounded-full bg-[#E2E8F0] flex items-center justify-center shadow-sm">
                <UserIcon className="h-6 w-6 text-[#6B4EFF]" />
              </div>

              {/* Quote */}
              <p className="italic font-semibold text-base sm:text-lg leading-snug text-center">
                {quote.text}
              </p>
              <p className="mt-2 italic font-bold text-sm text-[#6B4EFF] text-center">
                {quote.author}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Section_d;
