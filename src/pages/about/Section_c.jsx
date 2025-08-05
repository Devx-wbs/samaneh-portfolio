import React from "react";

export default function Section_c() {
  return (
    <section className="w-full py-20 #f1e8da">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          
          {/* Skills Card */}
          <div className="bg-white bg-opacity-70 backdrop-blur-lg shadow-md rounded-xl p-8 text-center transition-transform hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-3xl font-bold text-[#332f29] mb-4 tracking-wide">SKILLS</h3>
            <ul className="text-lg text-[#332f29] space-y-2">
              <li>UX Design</li>
              <li>UI Design</li>
              <li>Prototyping</li>
              <li>UX Research</li>
              <li>Wireframing</li>
              <li>Marketing</li>
            </ul>
          </div>

          {/* Interests Card */}
          <div className="bg-white bg-opacity-70 backdrop-blur-lg shadow-md rounded-xl p-8 text-center transition-transform hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-3xl font-bold text-[#332f29] mb-4 tracking-wide">Intersts</h3>
            <ul className="text-lg text-[#332f29] space-y-2">
              <li>🎹 Piano</li>
              <li>💃 Dancing</li>
              <li>🏊‍♂️ Swimming</li>
              <li>🎭 Acting</li>
              <li>🪴 Gardening</li>
              <li>📺 Netflix</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}




