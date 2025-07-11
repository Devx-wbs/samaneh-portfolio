import React from "react";
import Section_a from "./home/Section_a";
import Section_b from "./home/Section_b";

function Home() {
  return (
    <div>
      <h1 className="text-white bg-[#000]">Hello vite + react</h1>
      <Section_a />
      <Section_b/>
    </div>
  );
}

export default Home;
