import React from "react";
import { majorProjects, miniProjects } from "../data/projectData";
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
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNetlify,
  SiRender,
  SiPostman,
  SiExpress,
  SiMongodb,
  SiRazorpay,
  SiAxios,
} from "react-icons/si";
import restApiIcon from "../data/restApi.png";

const techIcons = {
  html: <FaHtml5 className="text-orange-400 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
  css: <FaCss3 className="text-blue-400 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
  js: <FaJsSquare className="text-yellow-400 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
  react: <FaReact className="text-cyan-400 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
  node: <FaNodeJs className="text-green-400 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
  express: <SiExpress className="text-gray-400 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
  mongodb: <SiMongodb className="text-green-400 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
  mongodbAtlas: <FaDatabase className="text-green-400 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
  tailwind: <SiTailwindcss className="text-teal-400 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
  restfulApi: (
    <img src={restApiIcon} alt="REST API" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
  ),
  gitHub: <FaGithub className="text-gray-400 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
  netlify: <SiNetlify className="text-green-400 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
  render: <SiRender className="text-purple-400 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
  postman: <SiPostman className="text-orange-400 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
  mongoDbAtlas: <FaCloud className="text-green-400 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
  bootstrap: <FaBootstrap className="text-purple-400 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
  razorpay: <SiRazorpay className="text-blue-400 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
  axios: <SiAxios className="text-blue-400 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 bg-gray-900"
      style={{
        backgroundImage: `url(${"https://i.gifer.com/4NB4.gif"})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-6">
        <div>
          <h2 className="text-3xl font-bold text-center mb-5 text-white">
            Projects
          </h2>
          <p className="text-center italic mb-5 text-white">
            A preview of some projects I worked on.
          </p>
        </div>
        <fieldset className="border border-gray-300 rounded-lg p-4">
          <legend className="text-white text-2xl mb-4">Major Projects</legend>
          <div className="space-y-8">
            {majorProjects.map((project, index) => (
              <div
                key={index}
                className={`project-card p-6 bg-gray-800 bg-opacity-30 rounded-lg shadow-md transition duration-300 hover:bg-gray-800 flex flex-col lg:flex-row ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className="lg:w-3/5">
                  <h3 className="project-title text-2xl font-bold mb-2 hover:text-red-600 text-white">
                    {project.title}
                  </h3>
                  <p className="project-duration text-gray-400 mb-2">
                    {project.duration}
                  </p>
                  <p className="project-description text-gray-300">
                    {project.description}
                  </p>
                </div>
                <div
                  className={`relative w-full lg:w-2/5 overflow-hidden rounded mt-4 lg:mt-0 ${
                    index % 2 === 0 ? "lg:ml-4" : "lg:mr-4"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-300 ease-in-out hover:opacity-75"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center text-white bg-gray-900 bg-opacity-75 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 p-4">
                    {/* Top */}
                    <div className="mt-auto mb-auto">
                      <h4 className="text-xl lg:text-2xl font-bold mb-2 text-center">
                        {project.title}
                      </h4>
                    </div>

                    {/* Middle */}
                    <div className="flex justify-center gap-4 my-auto">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-sky-400"
                      >
                        <FaEye size={24} className="lg:size-30" />
                      </a>
                      <a
                        href={project.gitHubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-green-400"
                      >
                        <FaGithub size={24} className="lg:size-30" />
                      </a>
                    </div>

                    {/* Bottom */}
                    <div className="flex flex-wrap justify-center gap-2 mt-auto">
                      {project.techStackUsed &&
                        project.techStackUsed.map((tech) => (
                          <div
                            key={tech}
                            className="flex items-center group relative"
                          >
                            {techIcons[tech] && (
                              <div className="text-base lg:text-lg p-1">
                                {techIcons[tech]}
                              </div>
                            )}
                            <span className="absolute bottom-full mb-1 hidden group-hover:block text-xs bg-black text-white py-1 px-2 rounded">
                              {tech}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </fieldset>

        {/* Mini Projects Section */}

        <fieldset className="border border-gray-300 rounded-lg p-4">
          <legend className="text-white text-2xl mb-4">Mini Projects</legend>
          <div className="flex flex-wrap justify-around">
            {miniProjects.map((project, index) => (
              <div
                key={index}
                className="relative flex flex-col w-full sm:w-1/2 md:w-2/5 lg:w-1/4 m-4 overflow-hidden rounded-lg bg-gray-800 bg-opacity-30 shadow-md transition duration-300 hover:bg-gray-800"
              >
                <h4 className="text-white text-lg lg:text-2xl font-semibold mb-2 text-center">
                  {project.title}
                </h4>
                <img
                  className="text-red w-full h-48 object-cover transition duration-300 ease-in-out hover:opacity-75"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white bg-gray-900 bg-opacity-75 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 p-4">
                  <p className="text-center text-gray-300 text-sm font-semibold">
                    {project.description}
                  </p>
                  <div className="flex justify-center gap-4 mt-4 lg:mt-6 mb-4 lg:mb-6">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-sky-400"
                    >
                      <FaEye size={30} className="lg:size-50" />
                    </a>
                    <a
                      href={project.gitHubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-green-400"
                    >
                      <FaGithub size={30} className="lg:size-50" />
                    </a>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.techStackUsed &&
                      project.techStackUsed.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center group relative  size-4"
                        >
                          {techIcons[tech] && techIcons[tech]}
                          <span className="absolute bottom-full mb-1 hidden group-hover:block text-xs bg-black text-white py-1 px-2 rounded">
                            {tech}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
    </section>
  );
};

export default Projects;
