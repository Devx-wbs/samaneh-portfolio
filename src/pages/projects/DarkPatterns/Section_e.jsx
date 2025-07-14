import React from 'react';

const Section_e = () => {
  return (
    <div className="min-h-screen bg-[#F9F6EF] flex justify-center  px-4 py-12 font-sans">
      <div className="bg-white w-full max-w-7xl rounded-xl shadow-md p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8">
        
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/dd9d0c17-e5aa-4fff-affc-eb9422bec1ad/64539a00aaa52922617f5c89_Group+436.png?format=750w"
            alt="Illustration"
            className="max-w-[260px] w-full object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 text-left text-[#2B2520]">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center md:text-left mb-6">
            THE CONCLUSION
          </h2>

          <ul className="space-y-6 text-base sm:text-lg">
            <li>
              <span className="font-bold">
                • OLDER USERS ARE MORE CONCERNED WITH POSSIBLE FINANCIAL LOSS
              </span>
              <br />
              <span className="text-gray-700 block mt-1">
                “I Get Scared Like They Might Be Hacking My Account Especially When I’m Doing Personal Finance.”
                <span className="block mt-1">– Participant, Age 56</span>
              </span>
            </li>
            <li>
              <span className="font-bold">
                • The Younger Generation Is More Concerned About Their Time
              </span>
              <br />
              <span className="text-gray-700 block mt-1">
                “TikTok Is Something I Feel Like (…) I Know In The Back Of My Head That Time Is Wasted When I Scroll Too Long.”
                <span className="block mt-1">– Participant, Age 19</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section_e;
