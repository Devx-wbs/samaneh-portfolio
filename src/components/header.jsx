import React, { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  { name: "Project One", slug: "project-one" },
  { name: "Project Two", slug: "project-two" },
  { name: "Project Three", slug: "project-three" },
];

const socialLinks = [
  // ... (your social icons as before)
];

export default function Header() {
  const [dropdown, setDropdown] = useState(false);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white rounded-2xl w-[90%] px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link
        to="/"
        className="font-bold text-xl text-gray-900 flex-shrink-0 w-[120px]"
      >
        <img src="/header_logo.png" alt="" className="w-full h-full" />
      </Link>

      {/* Center Nav */}
      <nav className="flex items-center gap-8">
        <Link
          to="/about"
          className="relative px-2 py-1 text-gray-700 hover:text-blue-600 transition"
        >
          About
        </Link>
        <div
          className="relative"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <button
            className="flex items-center gap-1 px-2 py-1 text-gray-700 hover:text-blue-600 transition group"
            type="button"
          >
            Projects
            <span className="ml-1 w-2 h-2 rotate-45 bg-gray-300 group-hover:bg-blue-500 transition"></span>
          </button>
          {dropdown && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[220px] z-20">
              <div className="flex justify-center pt-2">
                <span className="w-4 h-4 bg-blue-500 rotate-45"></span>
              </div>
              <ul className="py-2">
                {projects.map((project) => (
                  <li key={project.slug}>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="flex items-center gap-2 px-6 py-2 hover:bg-blue-50 group transition"
                    >
                      <span className="w-2 h-2 rotate-45 bg-gray-300 group-hover:bg-blue-500 transition"></span>
                      <span className="text-gray-700 group-hover:text-blue-600">
                        {project.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Right: Socials & Resume */}
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <button
          onClick={handleResumeDownload}
          className="ml-2 px-4 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm font-medium"
        >
          Resume
        </button>
      </div>
    </header>
  );
}
