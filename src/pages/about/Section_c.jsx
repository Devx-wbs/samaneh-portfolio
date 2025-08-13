import React from "react";

export default function Section_c() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">

          {/* Skills Card */}
          <div className="rounded-lg bg-[#f4f0ff] border-l-4 border-[#6B4EFF] p-6 text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#6B4EFF] mb-4 tracking-wide">
              SKILLS
            </h3>
         
            <ul className="text-sm sm:text-base md:text-lg text-[#332f29] space-y-2">
              <li>UX Design</li>
              <li>UI Design</li>
              <li>Prototyping</li>
              <li>UX Research</li>
              <li>Wireframing</li>
              <li>Marketing</li>
            </ul>
          </div>

          {/* Interests Card */}
          <div className="rounded-lg bg-[#fff5f0] border-l-4 border-[#FF7A45] p-6 text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#FF7A45] mb-4 tracking-wide">
              INTERESTS
            </h3>
       
            <ul className="text-sm sm:text-base md:text-lg text-[#332f29] space-y-2">
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
