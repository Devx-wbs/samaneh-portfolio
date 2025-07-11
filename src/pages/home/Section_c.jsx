import React from "react";

const Section_c = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fdfbf7] px-4">
      
      <div className="relative w-[460px] h-[620px] bg-gradient-to-b from-[#d8cbfa] to-[#fdfbf7] rounded-xl shadow-xl flex flex-col items-center pt-12 px-6 text-center z-10 overflow-hidden">
        
        <h2 className="text-[22px] font-extrabold text-[#1d1c1c] leading-tight">
          UX RESEARCH<br />PROJECT
        </h2>
        <h1 className="text-[32px] font-extrabold text-[#1d1c1c] mt-5 z-20">
          DARK<br />PATTERNS
        </h1>

        <div className="absolute top-[160px] z-0">
          <img
            src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/09a9c613-d9fc-4fe6-92c6-528b5181dc0f/Group+1.png?format=2500w"
            alt="Splash"
            className="w-[370px] opacity-90"
          />
        </div>

        {/* Laptop image */}
        <div className="z-10 mt-24">
          <img
            src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/cef6aac7-0588-4f38-bdd7-79926e75f8d7/Group+483.png?format=1000w"
            alt="Laptop"
            className="w-[330px] drop-shadow-[0_8px_10px_rgba(0,0,0,0.25)]"
          />
        </div>
      </div>

      {/* Right Block */}
      <div className="w-[270px] h-[620px] bg-[#965cff] rounded-xl text-black px-8 py-14 ml-[-40px] z-20 flex flex-col justify-between shadow-xl text-left">
        <div>
          <h2 className="text-lg font-extrabold mb-4">DARK PATTERNS</h2>
          <p className="text-sm font-medium leading-relaxed">
            A website that displays<br />
            common dark visual design<br />
            layout and patterns
          </p>
        </div>

        {/* Button */}
        <button className="bg-[#1d1c1c] text-white text-xs px-6 py-3 rounded-md mt-8 hover:bg-black transition-all duration-200">
          VIEW PROJECT
        </button>
      </div>
    </div>
  );
};

export default Section_c;
