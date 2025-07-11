import React from "react";

const Section_c = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fdfbf7] px-4">
      <div className="relative w-[420px] h-[620px] bg-gradient-to-b from-[#d8cbfa] to-[#fdfbf7] rounded-lg shadow-lg p-6 flex flex-col items-center text-center z-10">
        <h2 className="text-lg font-extrabold text-[#1d1c1c] tracking-wide mt-6">
          UX RESEARCH PROJECT
        </h2>
        <h1 className="text-4xl font-extrabold text-[#1d1c1c] mt-4 mb-6">
          DARK PATTERNS
        </h1>

        <div className="absolute top-32 z-0">
          <img
            src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/cef6aac7-0588-4f38-bdd7-79926e75f8d7/Group+483.png?format=1000w" 
            alt="splash"
            className="w-[360px] opacity-90"
          />
        </div>

        <div className="z-10 mt-20">
          <img
            src="https://i.imgur.com/sBQZmLq.png"
            alt="Laptop"
            className="w-[320px] mx-auto"
          />
        </div>
      </div>

      <div className="w-[260px] h-[620px] bg-[#965cff] rounded-lg text-black px-6 py-10 ml-[-40px] z-20 flex flex-col justify-center shadow-xl">
        <h2 className="text-lg font-extrabold mb-4">DARK PATTERNS</h2>
        <p className="text-sm mb-8 font-medium leading-relaxed">
          A website that displays <br />
          common dark visual design <br />
          layout and patterns
        </p>
        <button className="bg-[#1d1c1c] text-white text-xs px-6 py-3 rounded-md w-fit mx-auto hover:bg-black transition-all duration-200">
          VIEW PROJECT
        </button>
      </div>
    </div>
  );
};

export default Section_c;
