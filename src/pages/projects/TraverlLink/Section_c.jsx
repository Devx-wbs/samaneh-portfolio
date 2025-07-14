import React from "react";

const Section_c = () => {
  return (
    <section className="bg-[#F5F2EC] py-20 px-4 flex justify-center">
      <div className="bg-white max-w-7xl w-full p-6 sm:p-10 rounded-md grid md:grid-cols-2 gap-12 shadow-xl">
        
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2A2523] mb-10 leading-tight">
            WHY CARE ABOUT <br className="hidden sm:block" /> TRAVEL PLANNING
          </h2>

          <div className="space-y-10 sm:space-y-12">
            <div className="flex items-start gap-4 sm:gap-6">
              <img
                src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/d4abba47-2dc9-4a90-8454-77e6e4cbea66/64526054e17c723c48cad547_image+6.png?format=300w"
                alt="Globe Icon"
                className="w-14 h-14 sm:w-16 sm:h-16 shrink-0"
              />
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#2A2523] leading-tight">
                  LUCRATIVE <br /> MARKET
                </h3>
                <div className="border-l-4 border-blue-300 pl-4 mt-2 text-[#2A2523] text-sm sm:text-base">
                  <p>
                    Travel spending in the US alone was about $97 billion in Dec 2022
                  </p>
                  <p className="mt-1 text-xs text-[#777]">(ustravel.org)</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-6">
              <img
                src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/d4abba47-2dc9-4a90-8454-77e6e4cbea66/64526054e17c723c48cad547_image+6.png?format=300w"
                alt="Location Icon"
                className="w-14 h-14 sm:w-16 sm:h-16 shrink-0"
              />
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#2A2523] leading-tight">
                  INCREASE <br /> MARKET POTENTIAL
                </h3>
                <div className="border-l-4 border-blue-300 pl-4 mt-2 text-[#2A2523] text-sm sm:text-base">
                  <p>
                    With decline in the threat of COVID, there may be a large increase in travel.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-6">
              <img
                src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/d4abba47-2dc9-4a90-8454-77e6e4cbea66/64526054e17c723c48cad547_image+6.png?format=300w"
                alt="Stress Icon"
                className="w-14 h-14 sm:w-16 sm:h-16 shrink-0"
              />
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#2A2523] leading-tight">
                  TRAVELLER <br /> STRESS
                </h3>
                <div className="border-l-4 border-blue-300 pl-4 mt-2 text-[#2A2523] text-sm sm:text-base">
                  <p>
                    Travel planning is stressful and can take an emotional toll on users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/e9f29fd4-4eee-467e-b482-f4c1063619c8/645260543c8fe46ceaff14f5_Group+310+1.png?format=1500w"
            alt="Decorative Travel Steps"
            className="w-full h-auto max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Section_c;
