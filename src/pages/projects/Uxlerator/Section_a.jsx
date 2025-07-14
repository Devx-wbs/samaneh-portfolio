import React from "react";

const Section_a = () => {
  return (
    <section className="bg-[#f8f5ec] w-full pb-[70px] pt-[200px] px-2">
      <div className="max-w-7xl mx-auto p-6 flex flex-col">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-[64px] font-extrabold text-[#2E2B26] mb-6 tracking-tight">
            UXLARATOR
          </h2>
          <p className="mb-6 text-[18px] md:text-[22px]">
            A mobile app for UX job seekers to connect with experienced mentors,
            seek career guidance and establish networks.
          </p>
        </div>
        <div className="wrap_number_count flex justify-between items-center my-14">
          <div className="role">
            <div className="headeing_role text-[#323b6e] text-[40px] leading-[30px] font-bold">
              My Role
            </div>
            <div className="number_count leading-[35px] text-[30px] mt-3">
              UX Researcher
            </div>
          </div>
          <div className="time">
            <div className="headeing_time text-[#323b6e] text-[40px] leading-[30px] font-bold">
              Time
            </div>
            <div className="number_count leading-[35px] text-[30px] mt-3">
              2 Weeks
            </div>
          </div>
          <div className="tools">
            <div className="headeing_tools text-[#323b6e] text-[40px] leading-[30px] font-bold">
              Tools
            </div>
            <div className="number_count leading-[35px] text-[30px] mt-3">
              Figma, Concept
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_a;
