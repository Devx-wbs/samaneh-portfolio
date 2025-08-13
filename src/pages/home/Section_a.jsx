import React, { useState, useEffect } from "react";

const Section_a = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "KIMIA MOSTADAM";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (currentIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, 150); // Speed of typing

        return () => clearTimeout(timeout);
      } else {
        // When typing is complete, wait 2 seconds then start over
        const timeout = setTimeout(() => {
          setDisplayText("");
          setCurrentIndex(0);
        }, 2000);

        return () => clearTimeout(timeout);
      }
    }
  }, [currentIndex, fullText, isTyping]);

  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg-hero-section.png"
          alt="Kimia Mostadam - UX Researcher"
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Card - Centered with boxy style */}
      <div className="relative z-10 w-full flex justify-center px-6 py-[100px]">
        <div
          className="bg-black/90 backdrop-blur-sm rounded-none shadow-2xl p-8 md:p-12 
                     border border-gray-800 animate-fade-in max-w-2xl relative"
        >
          <div className="text-center space-y-6">
            {/* Greeting */}
            <p className="text-white text-lg font-medium animate-slide-up">
              Hello I am
            </p>

            {/* Name with accent background bar - extending beyond card */}
            <div
              className="relative animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-accent-teal py-4 inline-block transform hover:scale-105 transition-transform duration-300 min-h-[120px] md:min-h-0 text-center  flex items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-bold font-space text-black text-center">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </h1>
              </div>
            </div>

            {/* Title */}
            <h2
              className="text-2xl md:text-3xl font-semibold text-white font-space animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              I Design for Impact
            </h2>

            {/* Value Proposition */}
            <p
              className="text-white/90 text-lg leading-relaxed max-w-lg mx-auto animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              I transform research insights into experiences users trust and
              love.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-slide-up"
              style={{ animationDelay: "0.8s" }}
            >
              <button
                className="bg-accent-teal text-black px-8 py-3 font-semibold 
                         hover:bg-accent-teal/90 transition-all duration-300 
                         hover:shadow-lg transform hover:scale-105"
              >
                Portfolio
              </button>
              <button
                className="border-2 border-white text-white px-8 py-3 font-semibold 
                         hover:bg-white hover:text-black transition-all duration-300 
                         transform hover:scale-105"
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 z-20 animate-pulse">
        <div className="w-4 h-4 border-2 border-accent-teal rotate-45 opacity-60"></div>
      </div>

      <div
        className="absolute bottom-20 right-10 z-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-4 h-4 border-2 border-accent-coral rotate-45 opacity-60"></div>
      </div>

      {/* Bottom decorative circles */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        <div className="w-3 h-3 bg-accent-teal rounded-full animate-bounce"></div>
        <div
          className="w-3 h-3 bg-accent-coral rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-3 h-3 bg-accent-teal rounded-full animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </section>
  );
};

export default Section_a;
