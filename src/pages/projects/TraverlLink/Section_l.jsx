import React from "react";

const Section_l = () => {
  return (
    <section className="bg-[#f6f3ee] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left bg-white py-20 rounded-md">
        <div className="flex flex-col items-center flex-1 ">
          <div className="w-52 h-full  bg-white shadow-md flex items-center justify-center overflow-hidden border border-gray-300">
            <img
              src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/8adc4347-c504-4189-b6f4-757c64bd41a2/64535d2e88956b0bcc5d23d9_Mask+group.png?format=750w"
              alt="Travel Link Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            MOBILE HIGH FIDELITY
          </h2>
          <h3 className="text-2xl font-semibold text-[#6366F1] mt-1">
            PROTOTYPE
          </h3>

          <div className="mt-6 space-y-2 text-sm md:text-base font-medium">
            <a
              href="#"
              className="block underline text-black hover:text-blue-600 transition"
            >
              LINK TO FIGMA HI-FI PROTOTYPE DEMO
            </a>
            <a
              href="#"
              className="block underline text-black hover:text-blue-600 transition"
            >
              LINK TO FULL FIGMA FILE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_l;
