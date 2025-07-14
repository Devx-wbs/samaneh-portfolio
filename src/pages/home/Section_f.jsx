
import React from "react";
const Section_f = () => {
  return (
    <div className="bg-[#bca791] px-4 py-12 md:py-8 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl md:text-4xl font-extrabold text-white uppercase mb-10 md:mt-8">
          Want to get in touch? Drop me a line!
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md bg-[#e9e0d4] text-black focus:outline-none"
                placeholder="First Name"
              />
            </div>

            <div >
              <label className="block text-sm font-medium text-black mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md bg-[#e9e0d4] text-black focus:outline-none"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div>
            <textarea
              rows="5"
              className="w-full px-4 py-3 rounded-md bg-[#e9e0d4] text-black focus:outline-none"
              placeholder="Example Text"
            ></textarea>
          </div>

          <div className="">
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Section_f;
