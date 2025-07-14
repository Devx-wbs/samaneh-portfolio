import React from "react";

const Node = ({ children, type = "rect", color = "bg-green-400" }) => {
  const baseStyle =
    "flex items-center justify-center text-white font-semibold text-sm text-center px-3 py-2";
  const styles = {
    rect: `rounded ${color}`,
    circle: `rounded-full w-24 h-24 ${color}`,
    diamond: `w-24 h-24 transform rotate-45 flex items-center justify-center ${color}`,
    yellow: `rounded bg-yellow-300 text-black`,
  };
  return (
    <div className={`${baseStyle} ${styles[type]} ${type === "diamond" ? "text-xs" : ""}`}>
      <div className={type === "diamond" ? "-rotate-45" : ""}>{children}</div>
    </div>
  );
};

const Arrow = () => (
  <div className="w-8 h-0 border-t-2 border-gray-500 mx-auto rotate-0" />
);

const Section_g = () => {
  return (
    <div className="bg-[#F5F2EC] min-h-screen py-20 px-4">
      <h2 className="text-5xl font-extrabold text-center mb-10">
        <span className="text-black">USER</span>{" "}
        <span className="text-[#B39A7E]">FLOW</span>
      </h2>

      {/* Explore Flow */}
      <div className="flex flex-col items-center space-y-6">

        <Node type="circle">Explore</Node>
        <Arrow />

        <Node>Search Bar</Node>
        <Arrow />

        <Node>User enters desired search terms</Node>
        <Arrow />

        <Node>Results</Node>
        <Arrow />

        <Node type="diamond" color="bg-orange-400">Choose a listing to view</Node>

        <div className="flex justify-center gap-6 mt-8 flex-wrap">
          <Node>Host description of property</Node>
          <Node>Pricing</Node>
          <Node>User books the place</Node>
          <Node>Map</Node>
          <Node>Nearby Activities</Node>
        </div>

        <div className="mt-6">
          <Arrow />
          <Node>Purchase the ticket to the activities</Node>
        </div>
      </div>
    </div>
  );
};

export default Section_g;
