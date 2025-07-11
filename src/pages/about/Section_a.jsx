import React from "react";

export default function Section_a() {
  return (
    <section className="bg-[#f8f5ec] w-full pt-[200px] flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto px-4 flex flex-col items-center lg:items-start gap-10">
        {/* Left: Heading and Image */}
        <div className="flex flex-col items-center lg:items-start w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 text-center lg:text-left leading-tight mb-4">
            HEY THERE, NICE <br className="hidden sm:block" />
            TO MEET YOU! <span className="inline-block">👋🏻</span>
          </h1>
        </div>
        {/* Right: About Text */}
        <div className="w-full flex items-center flex-col md:flex-row lg:items-start justify-between gap-8">
          <div className="">
            <img
              src="/profile_pic.jpg"
              alt="Profile"
              className="w-full max-w-lg rounded-lg shadow-lg mt-4"
            />
          </div>
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2 text-center lg:text-left">
              HELLO!
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 text-center lg:text-left">
              THIS IS ME. <br className="sm:hidden" /> I MEAN “SHE”.
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-center lg:text-left max-w-xl">
              I&apos;m a UX Researcher based in Bay area, California. I always
              try to understand how people’s minds work and &quot;why&quot; they
              choose certain things over others. I was born and raised in
              Shiraz(like the wine), Iran and moved to U.S to be with my family
              in 2014. I love swimming and traveling, baking(not good at it :)),
              and gardening. You can also find me binge watching a good old
              comedy on weekends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
