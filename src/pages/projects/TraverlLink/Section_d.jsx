import React from "react";

const Section_d = () => {
  return (
    <section className="bg-[#F5F2EC] py-4 px-4">
      <div className="max-w-7xl mx-auto bg-white p-6 sm:p-10 rounded-xl relative">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2A2523] uppercase text-center mb-12">
          Our Solution <br /> (Core Functionality)
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-stretch min-h-[500px]">
          
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/60064241-d8b5-40e3-bcbf-6f584e0e6f7c/64526707fcb8a097f6b2afbd_image+10.png?format=1500w"
              alt="Solution Visual"
              className="w-full h-full object-contain max-h-[500px]"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-12">
            
            {/* Item 1: Consolidation */}
            <div className="flex items-start gap-4">
              <img
                src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/59841e0f-e398-46bc-b37a-064f6262d713/64526708fdafebb6c9242446_Rectangle+89.png?format=300w"
                alt="Calendar"
                className="w-16 h-16 object-contain shrink-0"
              />
              <div>
                <h3 className="text-2xl font-extrabold text-[#2A2523] mb-2">
                  Consolidation
                </h3>
                <p className="border-l-4 border-[#5BC0EB] pl-4 text-[#2A2523]">
                  Combining multiple travel planning tools in one
                </p>
              </div>
            </div>

            {/* Item 2: Documents */}
            <div className="flex items-start gap-4">
              <img
                src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/4aec8fcc-0d41-49fe-9bfa-dec43355d778/64526707de5d028aa8311d4d_image+8.png?format=300w"
                alt="Documents"
                className="w-16 h-16 object-contain shrink-0"
              />
              <div>
                <h3 className="text-2xl font-extrabold text-[#2A2523] mb-2">
                  Documents
                </h3>
                <p className="border-l-4 border-[#5BC0EB] pl-4 text-[#2A2523]">
                  A place for travellers to keep all of their travel plans and documents together
                </p>
              </div>
            </div>

            {/* Item 3: Inspiration */}
            <div className="flex items-start gap-4">
              <img
                src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/3f489b01-4eb3-4351-9c16-9c9704256275/6452670789778c46710ebe77_image+9.png?format=300w"
                alt="Inspiration"
                className="w-16 h-16 object-contain shrink-0"
              />
              <div>
                <h3 className="text-2xl font-extrabold text-[#2A2523] mb-2">
                  Inspiration
                </h3>
                <p className="border-l-4 border-[#5BC0EB] pl-4 text-[#2A2523]">
                  Customized suggestions for travel plans
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_d;
