import React from "react";
import { majorProjects } from "../data/projectData";
import {
  FaEye,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNetlify,
  SiRender,
  SiPostman,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import restApiIcon from "../data/restApi.png";

const techIcons = {
  html: <FaHtml5 size={30} className="text-orange-600" />,
  css: <FaCss3 size={30} className="text-blue-600" />,
  js: <FaJsSquare size={30} className="text-yellow-500" />,
  react: <FaReact size={30} className="text-cyan-500" />,
  node: <FaNodeJs size={30} className="text-green-600" />,
  express: <SiExpress size={30} className="text-gray-800" />,
  mongodb: <SiMongodb size={30} className="text-green-500" />,
  mongodbAtlas: <FaDatabase size={30} className="text-green-500" />,
  tailwind: <SiTailwindcss size={30} className="text-teal-500" />,
  restfulApi: <img src={restApiIcon} alt="REST API" className="w-5 h-5" />,
  gitHub: <FaGithub size={30} className="text-gray-800" />,
  netlify: <SiNetlify size={30} className="text-green-600" />,
  render: <SiRender size={30} className="text-purple-600" />,
  postman: <SiPostman size={30} className="text-orange-600" />,
  mongoDbAtlas: <FaCloud size={30} className="text-green-500" />,
};

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-6">
        <div>
          <h2 className="text-3xl font-bold text-center mb-5">Projects</h2>
          <p className="text-center italic mb-5">
            A preview of some projects I worked on.
          </p>
        </div>
        <h3 className="text-2xl font-bold mb-6">Major Projects</h3>
        <div className="space-y-8">
          {majorProjects.map((project, index) => (
            <div
              key={index}
              className={`project-card p-6 bg-gray-100 rounded-lg shadow-md transition duration-300 hover:bg-gray-200 flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-3/5">
                <h3 className="project-title text-2xl font-bold mb-2 hover:text-blue-500">
                  {project.title}
                </h3>
                <p className="project-duration text-gray-600 mb-2">
                  {project.duration}
                </p>
                <p className="project-description text-gray-800">
                  {project.description}
                </p>

                <div className="project-actions hidden hover:flex justify-between items-center mt-2">
                  <a href={project.link} className="project-link text-blue-500">
                    Live Link
                  </a>
                  {project.gitHubLink && (
                    <a
                      href={project.gitHubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-gray-500 hover:text-blue-500" />
                    </a>
                  )}
                </div>
              </div>
              <div
                className={`relative w-2/5 overflow-hidden rounded ${
                  index % 2 === 0 ? "" : "mr-5 "
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-300 ease-in-out hover:opacity-0  "
                />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white bg-gray-900 bg-opacity-75 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                  <h4 className="text-4xl font-bold mb-2">{project.title}</h4>
                  <div className="flex justify-center gap-4 mt-10 mb-10">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-sky-500"
                    >
                      <FaEye size={50} />
                    </a>
                    <a
                      href={project.gitHubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-green-500"
                    >
                      <FaGithub size={50} />
                    </a>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 ">
                    {project.techStackUsed &&
                      project.techStackUsed.map((tech) => (
                        <div key={tech} className="flex items-center">
                          {techIcons[tech]}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
