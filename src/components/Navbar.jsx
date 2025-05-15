import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
const resumeUrl = require("../data/Ashvary_Gidian_Resume.pdf");
 
const Navbar = () => {
  const [rColor, setRcolor] = useState(getRandomColor());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function getRandomColor() {
    // const letters = "0123456789ABCDEF";
    const letters = "789ABCDEF"; // Higher values for brighter colors
    let color = "#";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      color += letters[randomIndex];
    }
    return color;
  }

  return (
    <nav className="fixed top-0 w-full bg-gray-800 text-white shadow-md z-10 opacity-90">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <p
          className="text-xl font-bold cursor-pointer select-none"
          style={{ color: rColor, fontFamily: "Poppins, sans-serif" }}
          onClick={() => setRcolor(getRandomColor())}
        >
          Ashvary Gidian
        </p>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLinks rColor={rColor} resumeUrl={resumeUrl} />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`mobile_menu md:hidden bg-gray-800 py-4 transition-transform transform translate-y-0z `}
        >
          <div className="space-y-4 px-6">
            <NavLinks
              rColor={rColor}
              isMobileMenuOpen={isMobileMenuOpen}
              resumeUrl={resumeUrl}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ rColor, resumeUrl, onClick, isMobileMenuOpen }) => {
  return (
    <>
      <Link
        to="home"
        duration={1000}
        smooth={true}
        className={`block text-lg cursor-pointer hover:text-gray-300 hover:scale-95 transition-transform duration-300  ${
          isMobileMenuOpen
            ? "bg-slate-600  hover:bg-slate-700 p-2 bg-opacity-40 rounded-lg "
            : null
        }`}
        style={{ color: rColor, fontFamily: "Poppins, sans-serif" }}
        onClick={onClick}
      >
        Home
      </Link>
      <Link
        to="projects"
        duration={1000}
        smooth={true}
        className={`block text-lg cursor-pointer hover:text-gray-300 hover:scale-95 transition-transform duration-300  ${
          isMobileMenuOpen
            ? "bg-slate-600  hover:bg-slate-700 p-2 bg-opacity-40 rounded-lg "
            : null
        }`}
        style={{ color: rColor, fontFamily: "Poppins, sans-serif" }}
        onClick={onClick}
      >
        Projects
      </Link>
      <Link
        to="contact"
        duration={1000}
        smooth={true}
        className={`block text-lg cursor-pointer hover:text-gray-300 hover:scale-95 transition-transform duration-300  ${
          isMobileMenuOpen
            ? "bg-slate-600  hover:bg-slate-700 p-2 bg-opacity-40 rounded-lg "
            : null
        }`}
        style={{ color: rColor, fontFamily: "Poppins, sans-serif" }}
        onClick={onClick}
      >
        Contact
      </Link>
      <a
        href={resumeUrl}
        download="AshvaryGidian_Resume.pdf"
        className={`block text-lg cursor-pointer hover:text-gray-300 hover:scale-95 transition-transform duration-300  ${
          isMobileMenuOpen
            ? "bg-slate-600  hover:bg-slate-700 p-2 bg-opacity-40 rounded-lg "
            : null
        }`}
        onClick={(e) => {
          const confirmDownload = window.confirm(
            "Do you want to download the resume?"
          );
          if (!confirmDownload) {
            e.preventDefault();
          }
          if (onClick) onClick();
        }}
        style={{ color: rColor, fontFamily: "Poppins, sans-serif" }}
      >
        Resume
      </a>
    </>
  );
};

export default Navbar;
