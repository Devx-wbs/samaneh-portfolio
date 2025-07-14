import React from 'react';

const Section_d = () => {
    return (
        <div className="min-h-screen bg-[#F5F2EC] py-8">
            <div className="flex flex-col items-end md:flex-row justify-end gap-8 max-w-7xl w-full">
                <div className="bg-[#cc4ac0] text-white p-6 sm:p-8 rounded-md w-full md:max-w-xs text-center md:text-left">
                    <h2 className="text-lg sm:text-xl font-bold mb-4 uppercase tracking-wide">Travel Link</h2>
                    <p className="text-sm sm:text-base mb-16 leading-relaxed">
                        A platform where you will <br className="hidden md:block" />
                        find everything to plan a trip.
                    </p>
                    <button className="bg-[#1f1f1f] hover:bg-black text-white px-6 py-4 rounded text-sm">
                        VIEW PROJECT
                    </button>
                </div>

                <div
                    className="relative w-[700px] rounded-md px-6 py-10 sm:py-16 overflow-hidden bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/f3827ffb-147a-4d98-9ffa-076da3a87c59/pink.png?format=2500w')`,
                    }}
                >
                    <h1 className="text-white text-2xl sm:text-4xl font-extrabold text-center uppercase mb-2 tracking-wide">
                        Travel Link
                    </h1>
                    <p className="text-white text-lg sm:text-2xl font-semibold text-center mb-10 tracking-wide">
                        UX RESEARCH/DESIGN PROJECT
                    </p>

                    <div className="flex justify-center items-end gap-10 sm:gap-20 relative z-10">
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/68a71d60-c2d4-426d-8a57-f8295a2336ee/Group+620.png?format=500w"
                            alt="watch"
                            className="h-36 sm:h-44 md:h-48 drop-shadow-2xl"
                        />
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/cbb509e4-527a-4bbe-afdf-e565438d7f3d/Group+471.png?format=750w"
                            alt="phone"
                            className="h-40 sm:h-48 md:h-56 drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section_d;
