import React from "react";

const Section_k = () => {
  return (
    <section className="bg-[#f6f3ee] py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center  bg-white px-10 py-8 rounded-md">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-10">
          MOBILE HIGH FIDELITY
        </h2>

        {/* Images stacked vertically */}
        <div className="space-y-2">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-300 bg-white">
            <img
              src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/d52d62a3-b049-4923-8ba6-554a80a03998/64535addf473ee4ae4de08f7_High+Fidelity+Prototype3.png?format=2500w"
              alt="High Fidelity Prototype 1"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-300 bg-white">
            <img
              src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/bdbab7cd-b91b-4869-9c2b-337801e5ef0c/64535addd027964e8f19838a_High+Fidelity+Prototype1.png?format=2500w"
              alt="High Fidelity Prototype 2"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_k;
