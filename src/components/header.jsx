import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { FiLinkedin, FiMail } from "react-icons/fi"; // minimalist icons

const projects = [
  { name: "Keysight PWMA", slug: "Keysight_pwma" },
  { name: "Dark Patterns", slug: "Dark_Patterns" },
  { name: "Travel Link", slug: "Travel_Link" },
  { name: "Uxlerator", slug: "Uxlerator" },
];

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "https://www.kimiamostadam.com/s/Top-Resume-6_16.pdf";
    link.click();
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] bg-white/80 backdrop-blur-md rounded-2xl shadow-sm px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="w-[100px] flex-shrink-0">
        <img
          src="/header_logo.png"
          alt="Kimia Logo"
          className="h-auto w-full object-contain"
        />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-start gap-10 text-sm font-medium text-zinc-800">
        {/* About */}
        <div
          className="relative flex flex-col items-center"
          onMouseEnter={() => setHovered("about")}
          onMouseLeave={() => setHovered(null)}
        >
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
        </div>

        {/* Projects Dropdown */}
        <div
          className="relative flex flex-col items-center"
          onMouseEnter={() => {
            setDropdown(true);
            setHovered("projects");
          }}
          onMouseLeave={() => {
            setDropdown(false);
            setHovered(null);
          }}
        >
          <button className="hover:text-blue-600 transition">Projects</button>
          <span
            className={`mt-1 w-2 h-2 rotate-45 border ${
              hovered === "projects" ? "opacity-0" : "border-zinc-400"
            } transition-all duration-200`}
          />
          {hovered === "projects" && (
            <span className="absolute -bottom-3 w-3 h-3 rotate-45 bg-blue-600 border border-blue-600 shadow" />
          )}

          {/* Dropdown */}
          {dropdown && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[220px] z-50">
              <ul className="py-2">
                {projects.map((project) => (
                  <li key={project.slug}>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="flex items-center gap-2 px-6 py-2 hover:bg-blue-50 group transition"
                    >
                      <span className="w-2 h-2 rotate-45 bg-gray-300 group-hover:bg-blue-500 transition" />
                      <span className="text-zinc-700 group-hover:text-blue-600">
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

      <div className="hidden md:flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/kimiamostadam?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0GMlLIPkQziEpSiKmOAhHA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-blue-600 transition"
        >
          <FiLinkedin size={18} />
        </a>
        <a
          href="mailto:kimiamostadam@gmail.com"
          className="text-zinc-500 hover:text-blue-600 transition"
        >
          <FiMail size={18} />
        </a>
        <button
          onClick={handleResumeDownload}
          className="ml-2 px-4 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm font-medium"
        >
          Resume
        </button>
      </div>

      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <HiX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md rounded-b-2xl md:hidden z-40">
          <div className="flex flex-col p-4 gap-4 text-sm font-medium">
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              About
            </Link>
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600"
              >
                {project.name}
              </Link>
            ))}
            <a
              href="https://www.linkedin.com/in/kimiamostadam?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0GMlLIPkQziEpSiKmOAhHA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 flex items-center gap-2"
            >
              <FiLinkedin /> LinkedIn
            </a>
            <a
              href="mailto:kimiamostadam@gmail.com"
              className="text-gray-500 hover:text-blue-600 flex items-center gap-2"
            >
              <FiMail /> Email
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleResumeDownload();
              }}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
