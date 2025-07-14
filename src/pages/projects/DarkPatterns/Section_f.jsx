import React from 'react';

const Section_f = () => {
  return (
    <div className="min-h-screen bg-[#F9F6EF] flex justify-center  px-4 py-18  font-sans">
      <div className="w-full max-w-7xl flex flex-col items-center text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2B2520]">
          THE <span className="text-[#5C2E91]">DESIGN</span>
        </h2>

        <div className="w-full mt-12 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="text-black">DARK</span>{' '}
            <span className="text-[#2B2520]">DESIGN PATTERNS</span>
          </h3>
          <p className="text-sm sm:text-lg mt-2 tracking-wide text-[#2B2520]">
            CAN STEAL YOUR MONEY AND TIME
          </p>

          <img
            src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/6ac5b718-d0d6-4ef9-8123-d860eddcdcb7/645d6839d4d75958f40cae1a_Page.png?format=2500w"
            alt="Dark Pattern Illustration"
            className="w-full h-auto mt-8 rounded-md shadow-md"
          />
        </div>

      
      </div>
    </div>
  );
};

export default Section_f;
