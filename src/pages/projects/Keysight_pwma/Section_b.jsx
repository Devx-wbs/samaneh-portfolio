import React from "react";

const Section_b = () => {
  return (
    <section className="bg-[#f8f5ec] w-full pb-[70px] pt-[200px] px-2">
      <h2 className="text-2xl sm:text-3xl md:text-[64px] font-extrabold text-center text-[#2E2B26] mb-6 tracking-tight">
        OVERVIEW:
      </h2>
      <div className="max-w-7xl mx-auto bg-white rounded-md shadow-md p-6 flex flex-col items-center">
        <h3 className="font-extrabold text-[22px] leading-[24px] md:text-[44px] md:leading-[50px] text-[#2E2B26] mb-4 text-left w-full">
          What is Keysight PWMA?
        </h3>
        <p className="mb-6 text-[18px] md:text-[22px] text-left w-full">
          PathWave Measurement Analytics (PWMA) is a data visualization and
          analytics <br />
          software operated by Keysight Technologies.
          <br />
          <br />
          The primary users are the Test and Design Engineers of Keysight.
        </p>
        <img
          src="/project_a_img_b.png" // <-- Replace with your image path
          alt="Keysight PWMA"
          className="md:max-w-[930px] max-w-full mx-auto my-10 rounded"
          style={{ objectFit: "contain" }}
        />
        <p className="mb-6 text-[18px] md:text-[22px] text-left w-full">
          Typically, the workflow of the test engineer is the following:
          <ol className="list-decimal pl-6 mt-4">
            <li>capture and simulate the test data</li>
            <li>run the physical test</li>
            <li>store the results and</li>
            <li>
              then analyze and correlate the results with the help PWMA, the
              product we are working on
            </li>
          </ol>
        </p>
        <h3 className="font-extrabold text-[22px] leading-[24px] md:text-[44px] md:leading-[50px] text-[#2E2B26] mb-4 text-left w-full">
          PROJECT STRUCTURE
        </h3>
        <p className="mb-6 text-[18px] md:text-[22px] text-left w-full">
          We will start with defining the problem and goal, define our Research
          Question, and move to the main research with key finings and design
          recommendations. We also present User Personas and a User Experience
          Map based on our findings. At the end, we will cover our blockers and
          limitations that could possibly affect the findings.
        </p>
        <div>
          <img
            src="/project_a_img_c.png" // <-- Replace with your image path
            alt="Keysight PWMA"
            className="md:max-w-[930px] max-w-full mx-auto my-10 rounded"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Section_b;
