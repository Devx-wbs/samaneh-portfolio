import React from "react";

const Section_i = () => {
  return (
    <section className="bg-[#f8f5ec] w-full pb-[70px] pt-[80px] px-2">
      <div className="max-w-7xl mx-auto bg-white rounded-md shadow-md p-6">
        <h3 className="font-extrabold text-[22px] leading-[24px] md:text-[44px] md:leading-[50px] text-[#2E2B26] mb-4 text-center w-full">
          MID-FI PROTOTYPES
        </h3>
        <div>
          <img
            src="/project_b_img_m.png" // <-- Replace with your image path
            alt="Keysight PWMA"
            className="md:max-w-[930px] max-h-[600px] max-w-full mx-auto my-10 rounded"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Section_i;
