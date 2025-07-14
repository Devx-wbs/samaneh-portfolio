import React from "react";

const Section_e = () => {
  return (
    <section className="bg-[#f8f5ec] w-full pb-[70px] pt-[80px] px-2">
      <div className="max-w-7xl mx-auto bg-white rounded-md shadow-md p-6 flex flex-col items-center">
        <div className="wrap_images">
          <div className="div flex flex-col md:flex-row items-center gap-5">
            <div className="img_div w-1/2">
              <img
                src="/project_b_img_c.png" // <-- Replace with your image path
                alt="Keysight PWMA"
                className="max-w-full mx-auto my-10 rounded"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="img_div w-1/2">
              <img
                src="/project_b_img_d.png" // <-- Replace with your image path
                alt="Keysight PWMA"
                className="max-w-full mx-auto my-10 rounded"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="div flex flex-col md:flex-row items-center gap-5">
            <div className="img_div w-1/2">
              <img
                src="/project_b_img_e.png" // <-- Replace with your image path
                alt="Keysight PWMA"
                className="max-w-full mx-auto my-10 rounded"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="img_div w-1/2">
              <img
                src="/project_b_img_f.png" // <-- Replace with your image path
                alt="Keysight PWMA"
                className="max-w-full mx-auto my-10 rounded"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_e;
