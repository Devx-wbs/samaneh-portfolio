import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center text-center">
        <span className="text-sm md:text-base text-gray-700 font-inter">
          © {new Date().getFullYear()} Made with
          <span className="mx-1 inline-block text-purple-500">💜</span>
          by{" "}
          <span className="font-grotesk font-semibold underline underline-offset-4 text-gray-800 cursor-default">
            Kimia Mostadam
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;



