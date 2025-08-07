import React from "react";

const Section_f = () => {
    return (
        <section className="min-h-screen px-4 py-16 bg-[#F5F2EC]">
            <div className="max-w-7xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-md text-center">
                <h2 className="text-5xl font-black mb-12 text-center">
                    <span className="text-[#2A2523]">USER </span>
                    <span className="text-[#B59F83]">FLOW</span>
                </h2>


                <img
                    src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/987db73f-870f-4aae-a00f-e90837b2ef24/64533d309062354a9b296127_user+flow.png?format=2500w"
                    alt="Customer Journey Visual"
                    className="w-full h-auto rounded-lg"
                />
            </div>
        </section>
    );
};

export default Section_f;


