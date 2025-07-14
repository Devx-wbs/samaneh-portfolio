import React from "react";

const Section_a = () => {
  return (
    <section className="bg-[#F5F2EC] min-h-screen flex justify-center px-6 py-8 pt-[200px]">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl font-extrabold leading-tight text-[#2A2523]">
              TRAVEL <br /> LINK
            </h1>
          </div>
          <p className="text-2xl font-semibold text-black">
            A PLATFORM WHERE YOU WILL FIND <br /> EVERYTHING TO PLAN A TRIP.
          </p>

          <div className="grid grid-cols-2 gap-12 pt-4">
            <div>
              <h3 className="text-xl font-bold text-[#373A69]">My Role</h3>
              <p className="text-lg text-black">UX</p>
              <p className="text-lg text-black">Researcher/Designer</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#373A69]">Tools</h3>
              <p className="text-lg text-black">Figma, Invision</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/7b49fc3b-98d9-42c5-b540-3489860bd357/64525dee4b2003354e6000cd_Rectangle+14.png?format=1000w"
            alt="Travel Illustration"
            className="w-[90%] md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Section_a;
