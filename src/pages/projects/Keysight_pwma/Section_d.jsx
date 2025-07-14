import React from "react";

const Section_c = () => {
  return (
    <section className="bg-[#f8f5ec] w-full pb-[70px] pt-[200px] px-2">
      <h2 className="text-2xl sm:text-3xl md:text-[64px] font-extrabold text-center text-[#2E2B26] mb-6 tracking-tight">
        RESEARCH:
      </h2>
      <div className="max-w-7xl mx-auto bg-white rounded-md shadow-md p-6 flex flex-col items-center">
        <h3 className="font-extrabold text-[22px] leading-[24px] md:text-[44px] md:leading-[50px] text-[#2E2B26] mb-4 text-left w-full">
          RESEARCH
          <br /> QUESTIONS
        </h3>
        <p className="mb-6 text-[18px] md:text-[22px] text-left w-full">
          We have two research questions that we aim to answer with the
          research:
          <span>
            Q1: What are the challenges faced by the target users when
            interacting with PWMA?
          </span>
          <ul className="list-disc pl-6 mt-4">
            <li>
              Users report UX issues with PathWave Measurement Analytics despite
              its robust capabilities.
            </li>
            <li>
              Users frequently prefer alternative software like Excel, Tableau,
              and Spotfire for data analysis and exploration tasks
            </li>
          </ul>
        </p>

        <h3 className="font-extrabold text-[22px] leading-[24px] md:text-[44px] md:leading-[50px] text-[#2E2B26] mb-4 text-left w-full">
          GOALS
        </h3>
        <p className="mb-6 text-[18px] md:text-[22px] text-left w-full">
          <ul className="list-disc pl-6 mt-4">
            <li>
              Enhance PWMA’s user experience by understanding target users’
              needs and behaviors
            </li>
            <li>
              Identify barriers preventing users from gaining insight through
              data in PWMA
            </li>
          </ul>
        </p>
      </div>
    </section>
  );
};

export default Section_c;
