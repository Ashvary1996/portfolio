import React from 'react';
import { Link } from 'react-scroll';
const resumeUrl = require("../data/resume.pdf");

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-white shadow-md z-10 ">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-xl font-bold">Ashvary Gidian</div>
                <div className="space-x-4">
                    <Link to="home" smooth={true} duration={1000} className="cursor-pointer">Home</Link>
                    <Link to="projects" smooth={true} duration={1000} className="cursor-pointer">Projects</Link>
                    <a
                        href={resumeUrl}
                        download="AshvaryGidian_Resume.pdf"
                        onClick={(e) => {
                            const confirmDownload = window.confirm('Do you want to download the resume?');
                            if (!confirmDownload) {
                                e.preventDefault();
                            }
                        }}
                    >
                        Resume
                    </a>
                    <Link to="contact" smooth={true} duration={1000} className="cursor-pointer">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
