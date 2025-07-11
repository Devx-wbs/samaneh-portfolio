import React, { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  { name: "Project One", slug: "project-one" },
  { name: "Project Two", slug: "project-two" },
  { name: "Project Three", slug: "project-three" },
];

const socialLinks = [
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.56v14.91c0 .73-.6 1.32-1.32 1.32H1.32A1.32 1.32 0 010 19.47V4.56C0 3.83.6 3.24 1.32 3.24h21.36c.73 0 1.32.6 1.32 1.32zM7.19 20.13V9.69H3.56v10.44h3.63zm-1.81-11.9c1.16 0 2.1-.94 2.1-2.1 0-1.16-.94-2.1-2.1-2.1-1.16 0-2.1.94-2.1 2.1 0 1.16.94 2.1 2.1 2.1zm15.62 11.9v-5.6c0-3.36-1.79-4.93-4.18-4.93-1.93 0-2.8 1.07-3.28 1.82v-1.56h-3.63c.05 1.03 0 10.44 0 10.44h3.63v-5.83c0-.31.02-.62.12-.85.26-.62.85-1.26 1.84-1.26 1.3 0 1.82.95 1.82 2.34v5.6h3.63z" />
      </svg>
    ),
    link: "https://linkedin.com/",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .386.045.763.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.577-.666 2.476 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.377 4.6 3.417-1.68 1.318-3.808 2.105-6.102 2.105-.396 0-.787-.023-1.175-.069 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.016-.634.962-.689 1.797-1.56 2.457-2.548l-.047-.02z" />
      </svg>
    ),
    link: "https://twitter.com/",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    link: "https://github.com/",
  },
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
    <header className="w-full bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl text-gray-900 flex-shrink-0">
          YourLogo
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
              {/* Diamond icon */}
              <span className="ml-1 w-2 h-2 rotate-45 bg-gray-300 group-hover:bg-blue-500 transition"></span>
            </button>
            {/* Dropdown */}
            {dropdown && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[220px] z-20">
                <div className="flex justify-center pt-2">
                  {/* Diamond indicator */}
                  <span className="w-4 h-4 bg-blue-500 rotate-45"></span>
                </div>
                <ul className="py-2">
                  {projects.map((project) => (
                    <li key={project.slug}>
                      <Link
                        to={`/projects/${project.slug}`}
                        className="flex items-center gap-2 px-6 py-2 hover:bg-blue-50 group transition"
                      >
                        {/* Diamond on hover */}
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
      </div>
    </header>
  );
}
