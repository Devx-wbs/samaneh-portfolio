import React from "react";

const Section_a = () => {
  return (
    <div className="min-h-screen bg-[#F9F6EF] text-black px-16 py-12 flex items-start justify-start font-sans pt-[200px]">
      <div className="px-6 sm:px-10 py-12 max-w-7xl w-full m-auto">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight text-[#2b2520]">
          DARK
          <br />
          PATTERNS
        </h1>

        <p className="mt-6 text-2xl sm:text-3xl font-extrabold text-[#2b2520] leading-snug">
          A WEBSITE THAT DISPLAYS
          <br />
          COMMON DARK VISUAL
          <br />
          DESIGN LAYOUTS AND
          <br />
          PATTERNS.
        </p>

        <div className="mt-10 flex flex-wrap gap-12 text-left">
          <div>
            <h2 className="text-xl font-extrabold text-blue-800 mb-4">TEAM</h2>
            <ul className="italic text-lg space-y-1">
              <li>KRISTINA</li>
              <li>LAPIRA</li>
              <li>NAOMI DUSID</li>
              <li>SUBRAMANIAN</li>
              <li>KIMIA</li>
              <li>MOSTADAN</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-blue-800 mb-4">TOOLS</h2>
            <ul className="not-italic font-bold text-lg space-y-1">
              <li>PROCREATE</li>
              <li>FIGMA,</li>
              <li>CONCEPT</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_a;
