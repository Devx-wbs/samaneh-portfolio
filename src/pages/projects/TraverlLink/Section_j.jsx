import React from "react";

const Section_j = () => {
  return (
    <section className="bg-[#f6f3ee] py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 bg-white p-20 rounded-md">
        {/* Left: Text */}
        <div className="flex-1 ">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            VISUAL<br />DESIGN
          </h2>
          <ul className="list-disc pl-5 space-y-3 text-gray-800 text-base md:text-lg">
            <li>Link logo to signify one of the major themes of the app which is consolidation</li>
            <li>Calming Blue color for the stresses that come with the travel experience</li>
            <li>Travel experience and Orange as a complimentary color</li>
            <li>Symbols + words to make content more accessible</li>
            <li>Rounded edges to provide the users with an experience that feels friendly and safe</li>
          </ul>
        </div>

        {/* Right: Mobile UI mockup */}
        <div className="flex-1 flex justify-center">
          <div className="w-[300px] md:w-[340px] bg-white rounded-3xl border border-gray-300 p-4 shadow-md">
            <h3 className="text-center text-blue-600 font-semibold text-lg mb-4">
              Welcome to Travel Link!
            </h3>
            <div className="space-y-3">
              {/* Host Card */}
              <div className="bg-[#f2f7ff] rounded-xl p-3 flex gap-3 items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2965/2965567.png"
                  alt="Host"
                  className="w-10 h-10"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">Host</p>
                  <p className="text-xs text-gray-600">You will be able to post your house listings for rental</p>
                </div>
              </div>

              {/* Traveler Card */}
              <div className="bg-[#1C92FF] rounded-xl p-3 flex gap-3 items-center text-white">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                  alt="Traveler"
                  className="w-10 h-10"
                />
                <div>
                  <p className="text-sm font-medium">Traveler</p>
                  <p className="text-xs">You will be able to book your housing and activities all in one place!</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-4 flex items-center">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-2 text-gray-500 text-sm">OR</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            {/* Button */}
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 w-full rounded-xl">
              Continue as a Guest
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_j;
