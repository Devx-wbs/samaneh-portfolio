import React from "react";

const Section_a = () => {
  return (
    <section className="bg-[#f8f5ec] w-full py-8 px-2">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-[#2E2B26] mb-6 tracking-tight">
        KEYSIGHT PWMA · UX RESEARCH
      </h2>
      <div className="max-w-xl mx-auto bg-white rounded-md shadow-md p-6 flex flex-col items-center">
        <img
          src="/pwma-laptop.png" // <-- Replace with your image path
          alt="Keysight PWMA"
          className="w-full max-w-md mx-auto mb-6 rounded"
          style={{ objectFit: "contain" }}
        />
        <div className="flex flex-col md:flex-row w-full gap-6">
          {/* Left: Project Title */}
          <div className="flex-1">
            <h3 className="font-extrabold text-lg sm:text-xl text-[#2E2B26] mb-4 break-words">
              MHCI CAPSTONE PROJECT TO IMPROVE THE USER EXPERIENCE OF THE
              KEYSIGHT PATHWAVE MEASUREMENT ANALYTICS (PWMA) TOOL.
            </h3>
          </div>
          {/* Right: Project Description */}
          <div className="flex-1 text-sm text-[#2E2B26] break-normal">
            <p className="mb-6">
              The project was done as a part of the MHCI Capstone project at UC
              Santa Cruz with the collaboration with Keysight Technologies. The
              project aims to enhance the User Experience of an existing tool:
              PWMA, by understanding target users’ needs and behaviors, and
              provide design recommendations based on the primary and secondary
              research.
            </p>
            <div>
              <span className="font-extrabold text-base">TEAM</span>
              <p className="text-xs mt-1">
                Rebekah Anjum, Elnaz Mostadam, Shivanni Gupta, Tom Dzi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_a;
