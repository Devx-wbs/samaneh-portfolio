import React from 'react';

const Section_g = () => {
  return (
    <div className="min-h-screen bg-[#F9F6EF] flex  justify-center px-4 py-16 font-sans">
      <div className="bg-white rounded-xl shadow-xl max-w-7xl w-full px-6 py-12 text-center">
        
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2B2520] mb-12">
          MAIN <span className="text-[#2B2520]">TAKEAWAY</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 text-left">
          
          <img
            src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/70fa513b-453e-44fb-a91d-bd659adc03e5/64539ce6e55e8af369fedbcc_Group+460.png?format=1000w"
            alt="Checklist Illustration"
            className="w-72 sm:w-80 lg:w-96 h-auto"
          />

          {/* Text */}
          <p className="text-[#2B2520] text-lg sm:text-xl max-w-xl leading-relaxed">
            As Future UX Professionals We Have Learned The Importance And Effectiveness Of Making
            Ethical Design Decisions Even When It Is Against Stakeholders’ Opinion!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section_g;
