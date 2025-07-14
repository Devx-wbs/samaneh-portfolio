import React from "react";

const Section_e = () => {
  return (
    <section className="bg-[#f8f5ec] w-full pt-[80px] px-2">
      <h2 className="text-2xl sm:text-3xl md:text-[64px] font-extrabold text-center text-[#2E2B26] mb-6 tracking-tight">
        BLOCKERS & LIMITATIONS:
      </h2>
      <div className="max-w-7xl mx-auto bg-white rounded-md shadow-md p-6 flex flex-col items-center">
        <h3 className="font-extrabold text-[22px] leading-[24px] md:text-[44px] md:leading-[50px] text-[#2E2B26] mb-4 text-left w-full">
          BLOCKERS
        </h3>
        <p className="mb-6 text-[18px] md:text-[22px] text-left w-full">
          In our project journey, various challenges have arisen, including
          constraints in budget, resources, and time, impacting our ability to
          fully analyze features, engage participants, and evaluate transcripts
          thoroughly.
          <ul className="list-disc pl-6 mt-4">
            <li>Budget: less analyzing features in Dovetail</li>
            <li>
              Limited Resources: lack of participant options, and less external
              resources
            </li>
            <li>
              Time: Minimized rounds of interviews, and prevented further
              evaluation of transcripts
            </li>
          </ul>
        </p>

        <h3 className="font-extrabold text-[22px] leading-[24px] md:text-[44px] md:leading-[50px] text-[#2E2B26] mb-4 text-left w-full">
          LIMITATIONS
        </h3>
        <p className="mb-6 text-[18px] md:text-[22px] text-left w-full">
          We faced some limitations, as we had minimal recruitment options and a
          tiny participant pool
          <br />
          We acknowledge that this may cause a lack of diversity in our persona
          generation.
          <ul className="list-disc pl-6 mt-4">
            <li>Minimal recruitment options</li>
            <li>Internal users as interview participants</li>
            <li>Small participant pool</li>
            <li>Lack of diversity in participants for user personas</li>
          </ul>
          <br />
          The limitations may add bias to the interview findings thus, we may
          miss some pain points and opportunities in our findings. However, with
          our sponsors' support, we may be able to recruit external participants
          for future work.
        </p>
      </div>
    </section>
  );
};

export default Section_e;
