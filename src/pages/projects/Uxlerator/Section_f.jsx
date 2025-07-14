import React from "react";

const Section_f = () => {
  return (
    <section className="bg-[#f8f5ec] w-full pb-[70px] pt-[80px] px-2">
      <div className="max-w-7xl mx-auto bg-white rounded-md shadow-md p-6 flex flex-col items-center">
        <h3 className="font-extrabold text-[22px] text-center leading-[24px] md:text-[44px] md:leading-[50px] text-[#2E2B26] mb-4 w-full">
          KEY FINDINGS
        </h3>
        <div>
          <img
            src="/project_b_img_g.png" // <-- Replace with your image path
            alt="Keysight PWMA"
            className="md:max-w-[930px] max-w-full mx-auto my-10 rounded"
            style={{ objectFit: "contain" }}
          />
        </div>
        <h3 className="font-extrabold text-[22px] leading-[24px] md:text-[44px] md:leading-[50px] text-[#2E2B26] mb-4 text-left w-full">
          Awkwardness in networking:
        </h3>
        <p className="mb-6 text-[18px] md:text-[22px] text-left w-full">
          <div className="div_wrap flex flex-col md:flex-row gap-5">
            <div className="div w-1/2">
              <ul className="list-disc pl-6 mt-4">
                <li>Awkwardness and shyness, Difficulty in scheduling</li>
                <li>Keep conversations going</li>
                <li>Mentor being busy / Lack of time</li>
                <li>Calendar connection/Transparency issue</li>
                <li>
                  Difficulty in justifying people’s identity and authenticity
                </li>
              </ul>
            </div>
            <div className="div w-1/2">
              <ul className="list-disc pl-6 mt-4">
                <li>
                  Connection with LinkedIn, Anonymous review option Unmatched
                  expectations from both ends
                </li>
                <li>
                  Topics to cover during mentoring sessions: figuring out goals
                  / portfolio crit / design challenge / Mutual support/effort
                </li>
                <li>Responsiveness of both mentors and mentees</li>
                <li>
                  (Lack of) Diversity and customization in mentor search,
                  professional level
                </li>
              </ul>
            </div>
          </div>
        </p>
      </div>
    </section>
  );
};

export default Section_f;
