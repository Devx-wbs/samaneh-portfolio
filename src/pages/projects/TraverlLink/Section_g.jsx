import React from "react";

const Section_g = () => {
  return (
    <div className="bg-[#F5F2EC] min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-md">
          <h2 className="text-5xl font-extrabold text-center mb-12 pt-9 rounded">
            <span className=" text-black px-6 py-2 rounded">
              SKETCHES
            </span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-10 bg-white p-6 rounded-lg">

            <div className="w-60 h-[500px] flex flex-col justify-between">
              <div className="h-1/2">
                <img
                  className="object-contain w-full h-full"
                  src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/dd8a2b66-e8b4-404e-be67-92a5ef789ca3/64534090fbd92f6e99a0cb1d_3.png?format=1000w"
                  alt="Sketch 1"
                />
              </div>
              <div className="h-1/2 mt-4">
                <img
                  className="object-contain w-full h-full"
                  src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/c6df49ef-a9ae-489f-9f65-340167dcc030/64533faebf29155e6723866f_33.png?format=1000w"
                  alt="Sketch 2"
                />
              </div>
            </div>

            <div className="w-60 h-[500px]">
              <img
                className="object-contain w-full h-full"
                src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/a089bcd8-6e33-450a-af04-7655ca5a7802/64533f8a974c63751f299754_1+%281%29.png?format=1500w"
                alt="Sketch 3"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Section_g;
