import React from 'react';

const Section_c = () => {
  return (
    <div className="min-h-screen bg-[#F9F6EF] flex justify-center px-6 py-12 font-sans">
      <div className="bg-white p-8 sm:p-12 rounded-md shadow-xl max-w-7xl w-full flex flex-col lg:flex-row gap-10">
        
        <div className="flex-1 text-[#2b2520]">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center lg:text-left">
            PROJECT MOTIVATION
          </h2>

          <div className="mb-10">
            <h3 className="text-2xl font-extrabold mb-2">• EDUCATION</h3>
            <p className="text-base leading-relaxed">
              Understanding dark patterns is essential because they are deceptive design techniques used in websites and apps to trick users into making decisions they might not have made if the information was presented fairly and transparently.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-extrabold mb-2">• VULNERABLE POPULATION</h3>
            <p className="text-base leading-relaxed">
              It’s particularly important for teenagers and the elderly to be aware of dark patterns because these groups can be more vulnerable to online manipulation. Teenagers, still developing critical thinking skills and often less experienced with deceptive online practices, might be easily swayed by such tactics. Similarly, the elderly, who might not be as digitally literate or familiar with the evolving landscape of online interfaces, can be more susceptible to misleading design that exploits confusion.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold mb-2">• INTERACTIVE WEBSITE</h3>
            <p className="text-base leading-relaxed">
              After further research we decided to create an interactive website. Since it can simulate real-world scenarios where dark patterns are encountered, providing hands-on experience in identifying and avoiding them. This practical approach can be more effective than theoretical explanations alone.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={'https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/442b143c-043e-4b78-a3ff-4bb97a2dfaa7/6453898fe9a444ceffea0770_Group+428.png?format=1000w'}
            alt="Project Motivation Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Section_c;
