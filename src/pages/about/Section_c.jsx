import React from "react";

export default function Section_c() {
  return (
    <section className="bg-[#fcf9f1] w-full py-5 md:py-32">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="flex flex-col md:flex-row gap-16 justify-center">
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-[#332f29] mb-2">SKILLS</h3>
            <ul className="text-lg text-[#332f29] space-y-1">
              <li>UX Design</li>
              <li>UI Design</li>
              <li>Prototyping</li>
              <li>UX Research</li>
              <li>Wireframing</li>
              <li>Marketing</li>
            </ul>
          </div>
          {/* Interests */}
          <div>
            <h3 className="text-2xl font-bold text-[#332f29] mb-2">Intersts</h3>
            <ul className="text-lg text-[#332f29] space-y-1">
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
