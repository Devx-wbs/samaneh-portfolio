import React from "react";

export default function Section_b() {
  return (
    <section className="bg-[#fcf9f1] w-full py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-start justify-center gap-8 md:gap-16">
        {/* Left: Animated Heading */}
        <div className="w-full flex justify-center">
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#332f29] leading-none text-center md:text-right animate-fade-in-up"
            style={{ lineHeight: 1.05 }}
          >
            <span className="block hover:text-[#ff7f50] transition-colors duration-300 cursor-pointer">
              MY CAREER SO FAR
            </span>
          </h2>
        </div>
        {/* Right: Animated Paragraphs */}
        <div className="w-full max-w-[100%] md:max-w-[70%] text-center md:text-start m-auto text-[#332f29] text-base sm:text-lg space-y-6 animate-fade-in">
          <p>
            I’m a UX Researcher with a Master’s in Human-Computer Interaction
            from UC Santa Cruz and a background in Cognitive Science and
            Psychology. My academic training gives me a deep understanding of
            the mental processes that drive user behavior, decision-making, and
            emotional response—insights I bring into every stage of product
            development.
          </p>
          <p>
            Currently, I’m working at Apple, where I lead both rapid and
            longitudinal UX research on upcoming products. I collaborate closely
            with cross-functional teams to uncover user needs, assess product
            usability, and provide insights that directly inform design and
            engineering decisions.
          </p>
          <p>
            Previously, I conducted UX research for both B2B and B2C
            organizations, including an e-commerce wellness platform and an
            immigration services firm. I’ve translated user data into actionable
            insights, established UX standards and design systems, and created
            scalable research practices that improve product quality and
            consistency.
          </p>
          <p>
            I’m passionate about creating inclusive, research-driven digital
            experiences and thrive at the intersection of behavioral science and
            design. My goal is to make meaningful contributions that not only
            improve usability but also align with business strategy and user
            values.
          </p>
        </div>
      </div>
      {/* Animations */}
      <style>
        {`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeInUp 1s cubic-bezier(.4,0,.2,1) 0.2s forwards;
        }
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1) 0.6s forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        `}
      </style>
    </section>
  );
}
