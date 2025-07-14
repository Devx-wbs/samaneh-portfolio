import React from "react";

const Section_m = () => {
  return (
    <section className="bg-[#f6f3ee] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center bg-white rounded-md py-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          DESKTOP SOFTWARE AND <br />
          <span className="text-[#b49c84]">APPLE WATCH VERSION</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
          <img
            src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/162dab44-18bd-46fd-82f1-4dc844be6720/645362f728685c8e4b04663d_MacBook+Pro+14.png?format=1500w"
            alt="Desktop App"
            className="w-full md:w-2/3 max-w-[600px] object-contain"
          />

          <img
            src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/2ec25809-63a6-4a46-bc39-774aa7b3b572/645362f6ddc6698cc5605a31_Group+620.png?format=500w"
            alt="Apple Watch"
            className="w-40 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Section_m;
