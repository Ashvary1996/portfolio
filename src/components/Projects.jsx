import React from 'react';
import { majorProjects, miniProjects } from "../data/projectData"

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen py-20  bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
                <h3 className="text-2xl font-bold mb-6">Major Projects</h3>
                <div className="space-y-8">
                    {majorProjects.map((project, index) => (
                        <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-2">{project.duration}</p>
                            <p className="text-gray-800">{project.description}</p>
                            <a href={project.link} className="text-blue-500 mt-2 inline-block">Live Link</a>
                        </div>
                    ))}
                </div>
                <h3 className="text-2xl font-bold mt-12 mb-6">Mini Projects</h3>
                <div className="space-y-8">
                    {miniProjects.map((project, index) => (
                        <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-2">{project.duration}</p>
                            <p className="text-gray-800">{project.description}</p>
                            <a href={project.link} className="text-blue-500 mt-2 inline-block">Live Link</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
