import React from "react";

const Resume = () => {
    return (
        <section id="resume" className="min-h-screen py-12 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Resume</h2>
                <div className="text-center">
                    <a
                        href="resume.pdf"
                        download
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Resume;
