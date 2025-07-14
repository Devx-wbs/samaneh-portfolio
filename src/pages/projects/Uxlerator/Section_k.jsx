import React from "react";

const Section_K = () => {
  return (
    <section className="bg-[#f8f5ec] w-full pb-[70px] pt-[80px] px-2">
      <div className="max-w-7xl mx-auto bg-white rounded-md shadow-md p-6 flex flex-col md:flex-row items-center">
        <div className="img_div w-1/2">
          <img
            src="/project_b_img_o.png" // <-- Replace with your image path
            alt="Keysight PWMA"
            className="md:max-w-[530px] max-w-full mx-auto my-10 rounded"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="div w-1/2">
          <h3 className="font-extrabold text-[22px] leading-[24px] md:text-[44px] md:leading-[50px] text-[#2E2B26] mb-4 text-left w-full">
            TIME:
          </h3>
          <p className="mb-6 text-[18px] md:text-[22px] text-left w-full">
            Time constraints only allowed us to interview our peers, sacrificing
            the diversity of the collected data to some extent. Our peers'
            diverse cultural and professional backgrounds do ensure some degree
            of diversity. However, when interpreting the research finding, we
            must be mindful of the similarity in their language ability,
            educational level, and the financial capability of their family
            (considering the participants are all fluent in English, studying
            for master’s degrees, and be able to afford the tuition of the
            higher education of the United States).
          </p>
        </div>
      </div>
      <p className="max-w-7xl m-auto mt-12 text-[18px] md:text-[44px] font-bold text-center w-full">
        THANK YOU FOR READING!
      </p>
    </section>
  );
};

export default Section_K;
