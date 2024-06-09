import React, { useState } from "react";
import { Link } from "react-scroll";
const resumeUrl = require("../data/resume.pdf");

const Navbar = () => {
  const [rColor, setRcolor] = useState(getRandomColor());

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <nav className="fixed top-0 w-full bg-gray-800 text-white shadow-md z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <p
          className={`text-xl font-bold cursor-pointer `}
          style={{ color: rColor }}
          onClick={() => setRcolor(getRandomColor())}
        >
          Ashvary Gidian
        </p>
        <div className="space-x-4">
          <Link
            to="home"
            duration={1000}
            smooth={true}
            className="cursor-pointer hover:text-gray-300 hover:font-semibold"
            style={{ color: rColor }}
          >
            Home
          </Link>
          <Link
            to="projects"
            duration={1000}
            smooth={true}
            className="cursor-pointer hover:font-semibold"
            style={{ color: rColor }}
          >
            Projects
          </Link>
          <Link
            to="contact"
            duration={1000}
            smooth={true}
            className="cursor-pointer hover:font-semibold"
            style={{ color: rColor }}
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
            className="cursor-pointer hover:font-semibold"
            style={{ color: rColor }}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
