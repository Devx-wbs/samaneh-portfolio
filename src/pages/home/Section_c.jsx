// import React from "react";

// const Section_c = () => {
//   return (
//     <div className="flex justify-center items-center min-h-72 bg-[#F5F2EC]  px-4 py-10">
//       <div className="relative w-[460px] h-[620px] bg-gradient-to-b from-[#d8cbfa] to-[#fdfbf7] rounded-xl shadow-xl flex flex-col items-center pt-12 px-6 text-center overflow-hidden">
//         <img
//           src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/09a9c613-d9fc-4fe6-92c6-528b5181dc0f/Group+1.png?format=2500w"
//           alt="Background cloud"
//           className="absolute top-[180px] w-[550px] opacity-90 z-0"
//         />

//         <h2 className="text-[22px] font-extrabold text-[#1d1c1c] leading-tight z-10">
//           UX RESEARCH<br />PROJECT
//         </h2>
//         <h1 className="text-[32px] font-extrabold text-[#1d1c1c] mt-5 z-10">
//           DARK<br />PATTERNS
//         </h1>

//         <div className="z-10 mt-24">
//           <img
//             src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/cef6aac7-0588-4f38-bdd7-79926e75f8d7/Group+483.png?format=1000w"
//             alt="Laptop"
//             className="w-[330px] drop-shadow-[0_8px_10px_rgba(0,0,0,0.25)]"
//           />
//         </div>
//       </div>

//       <div className="w-[270px] h-[450px] bg-[#965cff] rounded-xl text-black px-8 py-14 ml-10 flex flex-col justify-between shadow-xl">
//         <div>

//         <h2 className="text-[22px] font-extrabold text-[#1d1c1c] leading-tight z-10">
//           UX RESEARCH<br />PROJECT
//         </h2>
//         <h1 className="text-[32px] font-extrabold text-[#1d1c1c] mt-5 z-10">
//           DARK<br />PATTERNS
//         </h1>
//         </div>

//         <div className="flex justify-center mt-10">
//           <button className="bg-[#1d1c1c] text-white text-xs px-6 py-3 rounded-md hover:bg-black transition-all duration-200">
//             VIEW PROJECT
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section_c;











import React from 'react';

const Section_c = () => {
    return (
        <div className="min-h-96 bg-[#f4f1ec] flex items-center justify-center px-4 py-10">
            <div className="flex flex-col md:flex-row items-center   gap-8 max-w-7xl w-full">

                <div className="relative w-full md:w-3/5 rounded-md overflow-hidden flex flex-col items-center justify-center text-center px-6 py-16 bg-cover bg-center" style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/09a9c613-d9fc-4fe6-92c6-528b5181dc0f/Group+1.png?format=2500w')" }}>

                    <div className="relative z-10">
                        <h1 className="text-[#3d332a] text-5xl sm:text-4xl font-extrabold">
                            UX RESEARCH <br></br> PROJECT </h1>
                        <p className="text-[#3d332a] text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight mt-5">
                            DARK  <br className="hidden sm:block" /> PATTERNS
                        </p>
                    </div>

                    <div className="mt-10 flex  justify-center items-end gap-6 sm:gap-10 relative z-10 flex-wrap">
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/657a22e2f7e9cd0df1d35893/cef6aac7-0588-4f38-bdd7-79926e75f8d7/Group+483.png?format=1000w"
                            alt="UX Screen Left"
                            className="h-48 sm:h-56 md:h-64 drop-shadow-2xl"
                        />

                    </div>
                </div>

                <div className="w-full md:w-[300px] bg-purple-400 text-white p-6 sm:p-8 rounded-md text-center md:text-left flex flex-col justify-between h-96">
                    <div>
                        <h2 className="text-[#3d332a] text-5xl sm:text-4xl font-extrabold">
                            Dark Patterns</h2>
                        <p className="text-sm sm:text-base mb-10 leading-relaxed text-[#3d332a] mt-7">
                            A website that displays common dark visual design layout and  paterns  </p>
                    </div>
                    <button className="bg-[#2E2B26] hover:bg-black text-white px-4 py-4 rounded text-sm w-40 md:w-auto">
                        VIEW PROJECT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Section_c;

