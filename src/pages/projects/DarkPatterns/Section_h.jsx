import React from 'react';

const Section_h = () => {
    return (
        <div className="min-h-screen bg-[#F9F6EF] flex justify-center  px-4 font-sans">
            <div className="bg-white rounded-xl shadow-xl max-w-7xl w-full px-6 py-12 text-center">

                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2B2520] mb-12">
                    FINAL <span className="text-[#2B2520]">PROTOTYPE</span>
                </h2>

                <div className="w-full flex justify-center">
                    <iframe
                        title="Final Prototype"
                        className="w-full sm:w-[640px] h-[360px] border rounded-md"
                        src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/00ea4201-eedd-42f9-bc20-51d84147ef30/Rectangle+140.png?format=2500w" // Replace with actual prototype URL
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
};

export default Section_h;
