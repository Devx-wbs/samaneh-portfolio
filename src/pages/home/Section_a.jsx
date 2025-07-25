import React from "react";

const Section_f = () => {
  return (
    <section className="min-h-[90vh] flex items-center bg-[#F5F2EC] px-6 py-16">
      <div className="max-w-7xl m-auto w-full flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/profile_pic.jpg"
            alt="Profile"
            className="w-64 h-84 object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-[#2E2B26] flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold mb-8">
            HELLO, I AM KIMIA MOSTADAM
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed">
            I am a UX Researcher using my background in Cognitive Science and
            Psychology to create meaningful and inclusive digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_f;
