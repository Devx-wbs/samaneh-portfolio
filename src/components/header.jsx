import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { FiLinkedin, FiMail } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { name: "Keysight PWMA", slug: "Keysight_pwma" },
  { name: "Dark Patterns", slug: "Dark_Patterns" },
  { name: "Travel Link", slug: "Travel_Link" },
  { name: "Uxlerator", slug: "Uxlerator" },
];

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Top-Resume.pdf";
    link.click();
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] px-4 md:px-6  
        flex items-center justify-between rounded-2xl transition-all duration-300 
        border ${isScrolled ? "bg-neutral-100 shadow-lg" : "bg-white/40 shadow-sm"} 
        backdrop-blur-md border-neutral-200/40`}
    >
      {/* Logo */}
      <Link
        to="/"
        className="w-12 md:w-[60px] flex-shrink-0 transition-transform hover:scale-105"
      >
        <img
          src="/header_logo.png"
          alt="Logo"
          className="h-auto w-full object-contain"
        />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-start gap-10 font-semibold text-charcoal text-[17px] tracking-wide uppercase font-space">
        <Link
          to="/about"
          className="relative group hover:text-accent-teal transition-all duration-300"
        >
          About
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent-teal group-hover:w-full transition-all duration-300"></span>
        </Link>

        <div
          className="relative"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <button className="relative flex items-center gap-1 hover:text-accent-teal transition-colors duration-300">
            PROJECTS
            <motion.span
              animate={{ rotate: dropdown ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ▼
            </motion.span>
          </button>

          <AnimatePresence>
            {dropdown && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-neutral-200 rounded-xl shadow-xl min-w-[240px] z-50"
              >
                <ul className="py-2 bg-white rounded-xl">
                  {projects.map((project) => (
                    <li key={project.slug}>
                      <Link
                        to={`/projects/${project.slug}`}
                        className="flex items-center gap-3 px-6 py-3 group hover:bg-neutral-50 transition-all duration-300"
                      >
                        <span className="w-2 h-2 rotate-45 bg-neutral-300 group-hover:bg-accent-teal" />
                        <span className="text-neutral-700 group-hover:text-accent-teal font-medium text-[16px]">
                          {project.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Desktop Icons */}
      <div className="hidden md:flex items-center gap-4 text-[17px]">
        {[
          {
            href: "https://www.linkedin.com/in/kimiamostadam",
            icon: <FiLinkedin size={22} />,
            label: "LinkedIn",
          },
          {
            href: "mailto:kimiamostadam@gmail.com",
            icon: <FiMail size={22} />,
            label: "Email",
          },
        ].map(({ href, icon, label }) => (
          <div className="relative group" key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-neutral-500 hover:text-accent-teal"
            >
              {icon}
            </a>
            <span className="absolute bottom-[-26px] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {label}
            </span>
          </div>
        ))}
        <button
          onClick={handleResumeDownload}
          className="ml-2 px-6 py-2 bg-accent-teal text-white text-[16px] rounded-lg hover:bg-accent-teal/90 transition-all duration-300 font-semibold hover:shadow-lg transform hover:scale-105"
        >
          Resume
        </button>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-charcoal p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <HiX size={28} className="text-accent-teal" />
          ) : (
            <HiOutlineMenu size={28} />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 max-h-screen h-auto 
                       w-[85%] sm:w-[80%] bg-gray-50 
                       rounded-l-3xl shadow-xl overflow-y-auto z-50 
                       border-l border-gray-200"
          >
            <div className="flex flex-col">
              {/* Close Icon */}
              <div className="flex justify-end px-3 py-2">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-accent-teal hover:bg-gray-100 rounded-lg transition-all"
                >
                  <HiX size={26} />
                </motion.button>
              </div>

              {/* About */}
              <div className="flex flex-col px-2 pb-1">
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all text-sm font-medium"
                >
                  <span>About</span>
                  <span className="text-gray-400">›</span>
                </Link>
              </div>

              {/* Projects */}
              <div className="px-2 border-t border-gray-200">
                <h3 className="text-xs uppercase tracking-wide text-accent-teal font-bold px-3 py-1.5">
                  Projects
                </h3>
                <div className="flex flex-col">
                  {projects.map((project) => (
                    <Link
                      key={project.slug}
                      to={`/projects/${project.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all text-sm font-medium"
                    >
                      <span className="w-1.5 h-1.5 rotate-45 bg-gray-400"></span>
                      <span>{project.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Connect */}
              <div className="px-2 border-t border-gray-200">
                <h3 className="text-xs uppercase tracking-wide text-accent-teal font-bold px-3 py-1.5">
                  Connect
                </h3>
                <div className="flex flex-col">
                  <a
                    href="https://www.linkedin.com/in/kimiamostadam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all text-sm font-medium"
                  >
                    <FiLinkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="mailto:kimiamostadam@gmail.com"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all text-sm font-medium"
                  >
                    <FiMail size={18} />
                    <span>Email</span>
                  </a>
                </div>
              </div>

              {/* Resume Button */}
              <div className="px-3 pt-2 pb-3 border-t border-gray-200">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setTimeout(handleResumeDownload, 300);
                  }}
                  className="w-full py-2 bg-accent-teal text-white rounded-lg font-medium text-sm hover:bg-accent-teal/90 transition-all"
                >
                  Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

