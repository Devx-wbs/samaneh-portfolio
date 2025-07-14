import React from 'react';
import { UserIcon } from '@heroicons/react/24/solid';

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

const Section_d = () => {
  return (
    <div className="min-h-screen bg-[#F9F6EF] px-4 sm:px-8 py-16 flex justify-center font-sans">
      <div className="bg-white p-8 sm:p-12 rounded-xl shadow-xl max-w-7xl w-full text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2b2520] tracking-tight">
          RESEARCH <span className="text-blue-600">OUTCOMES</span>
        </h2>
        <p className="text-lg sm:text-xl font-bold mt-4 mb-10 text-[#B9A896]">
          8 PARTICIPANTS : <span className="text-[#2b2520]">5 OLDER ADULTS & 3 YOUNGER ADULTS</span>
        </p>

        {/* Quotes Layout: 2 Columns with Last Item Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8 text-left">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-[#2b2520] px-4
                ${index === 2 ? 'sm:col-span-2 sm:w-1/2 sm:mx-auto' : ''}`}
            >
              {/* Icon */}
              <div className="w-12 h-12 mb-4 rounded-full bg-gray-200 flex items-center justify-center shadow-sm">
                <UserIcon className="h-6 w-6 text-gray-500" />
              </div>

              {/* Quote */}
              <p className="italic font-extrabold text-base sm:text-lg leading-snug text-center">
                {quote.text}
              </p>
              <p className="mt-2 italic font-bold text-sm text-center">{quote.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section_d;
