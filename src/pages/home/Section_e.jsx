import React from "react";

const Section_e = () => {
  return (
    <div className="min-h-96 bg-[#f4f1ec] flex items-center justify-center px-4 py-10">
      <div className="flex flex-col md:flex-row items-center   gap-8 max-w-7xl w-full">
        <div
          className="relative w-full md:w-2/4 rounded-md overflow-hidden flex flex-col items-center justify-center text-center px-6 py-16 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/df350a30-81c7-46bc-a0f4-340cf6590c8b/6454a11ecd601a2264d2bb48_Group+2.png?format=2500w')",
          }}
        >
          <div className="relative z-10">
            <h1 className="text-[#3d332a] text-xl sm:text-2xl font-bold">
              UXLERATOR
            </h1>
            <p className="text-[#3d332a] text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight mt-1">
              UX RESEARCH <br className="hidden sm:block" /> PROJECT
            </p>
          </div>

          <div className="mt-10 flex justify-center items-end gap-6 sm:gap-10 relative z-10 flex-wrap">
            <img
              src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/ea42e7b3-8a30-4520-9c6a-ee506ed5a6e2/6453a8cba8c868919978b408_Group+461+%281%29.png?format=750w"
              alt="UX Screen Left"
              className="h-48 sm:h-56 md:h-64 drop-shadow-2xl"
            />
            <img
              src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/1d944fc5-9b49-43de-afdc-1ccb2d713d50/Picture6+%282%29.png?format=750w"
              alt="UX Screen Right"
              className="h-48 sm:h-56 md:h-64 drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="w-full md:w-[300px] bg-[#55b197] text-white p-6 sm:p-8 rounded-md text-center md:text-left flex flex-col justify-between h-96">
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-3">UXLERATOR</h2>
            <p className="text-sm sm:text-base mb-10 leading-relaxed">
              A mobile app for UX job seekers to connect with experienced
              mentors, seek career guidance and establish networks.
            </p>
          </div>
          <button className="bg-[#2c2c2c] hover:bg-black text-white px-6 py-3 rounded text-sm w-full md:w-auto">
            VIEW PROJECT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section_e;
