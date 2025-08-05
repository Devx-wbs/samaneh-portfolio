import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { FiLinkedin, FiMail } from "react-icons/fi";

const projects = [
  { name: "Keysight PWMA", slug: "Keysight_pwma" },
  { name: "Dark Patterns", slug: "Dark_Patterns" },
  { name: "Travel Link", slug: "Travel_Link" },
  { name: "Uxlerator", slug: "Uxlerator" },
];

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Top-Resume.pdf";
    link.click();
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdown(false);
    }, 200);
  };

  return (
    <header
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] 
                      bg-white/90 backdrop-blur-md rounded-2xl shadow-lg 
                      px-6 py-4 flex items-center justify-between 
                      border border-neutral-200/50"
    >
      {/* Logo */}
      <Link
        to="/"
        className="w-[60px] flex-shrink-0 hover:opacity-80 transition-opacity"
      >
        <img
          src="/header_logo.png"
          alt="Kimia Logo"
          className="h-auto w-full object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-start gap-10 text-body-sm font-medium text-charcoal">
        {/* About */}
        <div className="relative flex flex-col items-center">
          <Link
            to="/about"
            className="hover:text-accent-teal transition-colors duration-300 
                     relative after:absolute after:bottom-0 after:left-0 
                     after:h-0.5 after:w-0 after:bg-accent-teal 
                     after:transition-all after:duration-300 
                     hover:after:w-full"
          >
            About
          </Link>
        </div>

        {/* Projects Dropdown */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="hover:text-accent-teal transition-colors duration-300
                           relative after:absolute after:bottom-0 after:left-0 
                           after:h-0.5 after:w-0 after:bg-accent-teal 
                           after:transition-all after:duration-300 
                           hover:after:w-full"
          >
            Projects
          </button>

          {dropdown && (
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 
                          bg-white border border-neutral-200 rounded-xl shadow-xl 
                          min-w-[220px] z-50 animate-fade-in"
            >
              <ul className="py-2">
                {projects.map((project) => (
                  <li key={project.slug}>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="flex items-center gap-3 px-6 py-3 hover:bg-neutral-50 
                               group transition-all duration-300"
                    >
                      <span
                        className="w-2 h-2 rotate-45 bg-neutral-300 
                                     group-hover:bg-accent-teal transition-colors duration-300"
                      />
                      <span
                        className="text-neutral-700 group-hover:text-accent-teal 
                                     font-medium"
                      >
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

      {/* Desktop Icons & Resume */}
      <div className="hidden md:flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/kimiamostadam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 hover:text-accent-teal transition-colors duration-300
                   hover:scale-110 transform"
        >
          <FiLinkedin size={18} />
        </a>
        <a
          href="mailto:kimiamostadam@gmail.com"
          className="text-neutral-500 hover:text-accent-teal transition-colors duration-300
                   hover:scale-110 transform"
        >
          <FiMail size={18} />
        </a>
        <button
          onClick={handleResumeDownload}
          className="ml-2 px-6 py-2 bg-accent-teal text-white rounded-lg 
                   hover:bg-accent-teal/90 transition-all duration-300 
                   text-body-sm font-semibold hover:shadow-lg transform hover:scale-105"
        >
          Resume
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-charcoal hover:text-accent-teal transition-colors duration-300"
        >
          {mobileMenuOpen ? <HiX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="absolute top-full left-0 w-full bg-white border-t 
                      border-neutral-200 shadow-xl rounded-b-2xl md:hidden z-40 
                      animate-slide-up"
        >
          <div className="flex flex-col p-6 gap-4 text-body-sm font-medium">
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-700 hover:text-accent-teal transition-colors duration-300"
            >
              About
            </Link>
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-700 hover:text-accent-teal transition-colors duration-300"
              >
                {project.name}
              </Link>
            ))}
            <a
              href="https://www.linkedin.com/in/kimiamostadam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-accent-teal flex items-center gap-2 
                       transition-colors duration-300"
            >
              <FiLinkedin /> LinkedIn
            </a>
            <a
              href="mailto:kimiamostadam@gmail.com"
              className="text-neutral-500 hover:text-accent-teal flex items-center gap-2 
                       transition-colors duration-300"
            >
              <FiMail /> Email
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleResumeDownload();
              }}
              className="w-full px-6 py-3 bg-accent-teal text-white rounded-lg 
                       hover:bg-accent-teal/90 transition-all duration-300 
                       font-semibold hover:shadow-lg transform hover:scale-105"
            >
              Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
