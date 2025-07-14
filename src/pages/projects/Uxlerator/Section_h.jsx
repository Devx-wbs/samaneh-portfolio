import React from "react";

const Section_h = () => {
  return (
    <section className="bg-[#f8f5ec] w-full pb-[70px] pt-[80px] px-2">
      <div className="max-w-7xl mx-auto bg-white rounded-md shadow-md p-6">
        <h3 className="font-extrabold text-[22px] text-center leading-[24px] md:text-[44px] md:leading-[50px] text-[#2E2B26] mb-4 w-full">
          HI-FI PROTOTYPES
        </h3>
        <div className="flex flex-col md:flex-row w-full gap-12 justify-center items-center">
          <div>
            <img
              src="/project_b_img_i.png" // <-- Replace with your image path
              alt="Keysight PWMA"
              className="md:max-w-[930px] max-h-[380px] max-w-full mx-auto my-10 rounded"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div>
            <img
              src="/project_b_img_j.png" // <-- Replace with your image path
              alt="Keysight PWMA"
              className="md:max-w-[930px] max-h-[380px] max-w-full mx-auto my-10 rounded"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div>
            <img
              src="/project_b_img_k.png" // <-- Replace with your image path
              alt="Keysight PWMA"
              className="md:max-w-[930px] max-h-[380px] max-w-full mx-auto my-10 rounded"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div>
            <img
              src="/project_b_img_l.png" // <-- Replace with your image path
              alt="Keysight PWMA"
              className="md:max-w-[930px] max-h-[380px] max-w-full mx-auto my-10 rounded"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_h;
