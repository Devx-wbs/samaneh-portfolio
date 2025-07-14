import React from "react";

const Section_b = () => {
    return (
        <section className="min-h-60 bg-[#F5F2EC]  flex items-center justify-center px-4   ">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="bg-[#FF8C3E] px-6 py-10 md:px-10 md:py-16 rounded-md shadow-md max-w-md mx-auto">
                    <h2 className="text-xl font-extrabold text-[#2E2B26] mb-4">
                        KEYSIGHT PWMA
                    </h2>
                    <p className="text-white text-base mb-8 leading-relaxed">
                        Design improvements for Keysight's analytics software, Pathwave Measurement Analytics.
                    </p>
                    <button className="bg-[#2E2B26] text-white text-sm font-medium px-6 py-2 rounded-md hover:bg-black transition">
                        VIEW PROJECT
                    </button>
                </div>

                <div className="bg-[#FFCE9F] relative rounded-md px-6 py-10 flex flex-col items-center text-center">
                    <div className="absolute w-[300px] h-[300px] bg-[#FF8C3E] rounded-full blur-3xl opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />

                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 relative z-10">
                        UX DESIGN/RESEARCH
                    </h3>
                    <h4 className="text-base md:text-lg font-bold text-white mb-6 relative z-10">
                        KEYSIGHT PWMA
                    </h4>

                    <img
                        src={'https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/9ce9a86c-6c7d-4da3-a5f7-71a04c23df39/65513038fdbf390e34f05484_Keysight%2BMain%2BImage-p-1600%2B%281%29.png?format=1500w'}
                        alt="Laptop Interface"
                        className="relative z-10 max-w-full w-[90%] md:w-[480px] object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Section_b;
