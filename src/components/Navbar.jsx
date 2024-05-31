import React from "react";
import { Link } from "react-scroll";
const resumeUrl = require("../data/resume.pdf");

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 text-white shadow-md z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="home"
          className="text-xl font-bold cursor-pointer"
          smooth={true}
          duration={1000}
        >
          Ashvary Gidian
        </Link>
        <div className="space-x-4">
          <Link
            to="home"
            smooth={true}
            duration={1000}
            className="cursor-pointer hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            className="cursor-pointer hover:text-gray-300"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className="cursor-pointer hover:text-gray-300"
          >
            Contact
          </Link>
          <a
            href={resumeUrl}
            download="AshvaryGidian_Resume.pdf"
            onClick={(e) => {
              const confirmDownload = window.confirm(
                "Do you want to download the resume?"
              );
              if (!confirmDownload) {
                e.preventDefault();
              }
            }}
            className="hover:text-gray-300"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
