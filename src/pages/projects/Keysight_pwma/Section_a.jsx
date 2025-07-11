import React from "react";

const Section_a = () => {
  return (
    <section className="bg-[#f8f5ec] w-full pb-[70px] pt-[200px] px-2">
      <h2 className="text-2xl sm:text-3xl md:text-[64px] font-extrabold text-center text-[#2E2B26] mb-6 tracking-tight">
        KEYSIGHT PWMA · UX RESEARCH
      </h2>
      <div className="max-w-7xl mx-auto bg-white rounded-md shadow-md p-6 flex flex-col items-center">
        <img
          src="/project_a_img_a.png" // <-- Replace with your image path
          alt="Keysight PWMA"
          className="md:max-w-[930px] max-w-full mx-auto mb-6 rounded"
          style={{ objectFit: "contain" }}
        />
        <div className="flex flex-col md:flex-row w-full gap-6">
          {/* Left: Project Title */}
          <div className="w-full text-center md:text-start md:w-[45%]">
            <h3 className="font-extrabold text-[22px] leading-[24px] md:text-[44px] md:leading-[50px] text-[#2E2B26] mb-4">
              MHCI CAPSTONE PROJECT TO IMPROVE THE USER EXPERIENCE OF THE
              KEYSIGHT PATHWAVE MEASUREMENT ANALYTICS (PWMA) TOOL.
            </h3>
          </div>
          {/* Right: Project Description */}
          <div className="w-full text-center md:text-start md:w-[45%] text-[22px] text-[#2E2B26] break-normal">
            <p className="mb-6 text-[18px] md:text-[22px]">
              The project was done as a part of the MHCI Capstone project at UC
              Santa Cruz with the collaboration with Keysight Technologies. The
              project aims to enhance the User Experience of an existing tool:
              PWMA, by understanding target users’ needs and behaviors, and
              provide design recommendations based on the primary and secondary
              research.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row mt-6 gap-6">
          <div className="w-full text-center md:text-start md:w-[45%]"></div>
          <div className="w-full text-center md:text-start md:w-[45%]">
            <span className="font-extrabold md:text-[44px] text-[22px]">
              TEAM
            </span>
            <p className="text-[18px] md:text-[22px] mt-1">
              Rebekah Anjum, Elnaz Mostadam, Shivanni Gupta, Tom Dzi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_a;
