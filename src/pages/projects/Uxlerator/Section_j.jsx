import React from "react";

const Section_j = () => {
  return (
    <section className="bg-[#f8f5ec] w-full pb-[70px] pt-[80px] px-2">
      <div className="max-w-7xl mx-auto bg-white rounded-md shadow-md p-6 flex flex-col md:flex-row items-center">
        <div className="div w-1/2">
          <h3 className="font-extrabold text-[22px] leading-[24px] md:text-[44px] md:leading-[50px] text-[#2E2B26] mb-4 text-left w-full">
            RESEARCH METHODS
          </h3>
          <p className="mb-6 text-[18px] md:text-[22px] text-left w-full font-bold">
            Our research methods include the followings:
          </p>
          <p className="mb-6 text-[18px] md:text-[22px] text-left w-full">
            Semi-structured user interviews (interview students who are hunting
            for internships). Users’ reviews (find the common themes in user’s
            reviews). Competitive analysis (compare similar platforms)
          </p>
        </div>
        <div className="img_div w-1/2">
          <img
            src="/project_b_img_n.png" // <-- Replace with your image path
            alt="Keysight PWMA"
            className="md:max-w-[530px] max-w-full mx-auto my-10 rounded"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Section_j;
