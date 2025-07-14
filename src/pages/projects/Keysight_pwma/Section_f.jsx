import React from "react";

const Section_f = () => {
  return (
    <section className="bg-[#f8f5ec] w-full pb-[70px] pt-[80px] px-2">
      <h2 className="text-2xl sm:text-3xl md:text-[64px] font-extrabold text-center text-[#2E2B26] mb-6 tracking-tight">
        FUTURE WORK:
      </h2>
      <div className="max-w-7xl mx-auto bg-white rounded-md shadow-md p-6 flex flex-col items-center">
        <p className="mb-6 text-[18px] md:text-[22px] text-left w-full">
          We were able to understand user perception and nuances of the tool,
          and we will use these insights to prioritize the design goals and UI
          features further to suggest usability and accessibility improvements.
          <ul className="list-disc pl-6 mt-4">
            <li>
              Collaborate with sponsors to prioritize the design goals based on
              time constraints and resources.
            </li>
            <li>Further, narrow down our scope of work.</li>
            <li>Suggest usability and accessibility improvements.</li>
          </ul>
        </p>
      </div>
    </section>
  );
};

export default Section_f;
