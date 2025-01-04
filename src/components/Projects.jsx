import React, { useState } from "react";
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
import restApiIcon from "../data/thumbnail/restApi.png";

const techIcons = {
  html: <FaHtml5 className="text-orange-400 " />,
  css: <FaCss3 className="text-blue-400 " />,
  js: <FaJsSquare className="text-yellow-400 " />,
  react: <FaReact className="text-cyan-400 " />,
  node: <FaNodeJs className="text-green-400 " />,
  express: <SiExpress className="text-gray-400 " />,
  mongodb: <SiMongodb className="text-green-400 " />,
  mongodbAtlas: <FaDatabase className="text-green-400 " />,
  tailwind: <SiTailwindcss className="text-teal-400 " />,
  restfulApi: <img src={restApiIcon} alt="REST API" />,
  gitHub: <FaGithub className="text-gray-400 " />,
  netlify: <SiNetlify className="text-green-400 " />,
  render: <SiRender className="text-purple-400 " />,
  postman: <SiPostman className="text-orange-400 " />,
  mongoDbAtlas: <FaCloud className="text-green-400 " />,
  bootstrap: <FaBootstrap className="text-purple-400 " />,
  razorpay: <SiRazorpay className="text-blue-400 " />,
  axios: <SiAxios className="text-blue-400 " />,
};

const Projects = () => {
  const [viewMoreIndex, setViewMoreIndex] = useState(null);

  const handleToggleViewMore = (index) => {
    setViewMoreIndex(viewMoreIndex === index ? null : index);
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-16 md:py-20 bg-gray-900"
      style={{
        backgroundImage: `url("https://i.gifer.com/4NB4.gif")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3 text-shadow">
            Projects
          </h2>
          <p className="italic text-white">
            A preview of some projects I worked on.
          </p>
        </div>

        {/* Major Projects */}
        <fieldset className="border border-gray-300 rounded-lg p-6">
          <legend className="text-white text-2xl mb-6">Major Projects</legend>
          <div className="space-y-8">
            {majorProjects.map((project, index) => (
              <div
                key={index}
                className={`project-card p-6 bg-gray-800 bg-opacity-40 rounded-lg shadow-md transition-transform duration-500 hover:transform hover:scale-105 hover:shadow-lg flex flex-col lg:flex-row ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className="lg:w-3/5 mb-6 lg:mb-0 ">
                  <h3 className="text-2xl font-bold mb-2 text-white hover:text-red-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-2">{project.duration}</p>
                  <div
                    className={`overflow-hidden transition-all duration-1000 ease-in-out rounded-md mt-2 ${
                      viewMoreIndex === index ? "max-h-[1000px]" : "max-h-52"
                    }`}
                  >
                    <p className="text-gray-300 ">
                      {viewMoreIndex === index ||
                      project.description.length <= 180 ? (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: project.description,
                          }}
                        />
                      ) : (
                        <>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: project.description.slice(0, 180) + "...",
                            }}
                          />

                          <button
                            onClick={() => handleToggleViewMore(index)}
                            className="text-teal-400 underline text-opacity-80 "
                          >
                            View More
                          </button>
                        </>
                      )}
                      {viewMoreIndex === index &&
                        project.description.length > 180 && (
                          <button
                            onClick={() => handleToggleViewMore(index)}
                            className="text-teal-400 underline  ml-1"
                          >
                            Show Less
                          </button>
                        )}
                    </p>
                  </div>
                </div>

                {/*  */}

                <div
                  className={`relative w-full lg:w-2/5 overflow-hidden rounded ${
                    index % 2 === 0 ? "lg:ml-4" : "lg:mr-4"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-contain transition duration-300 ease-in-out hover:opacity-75"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white bg-gray-900 bg-opacity-75 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 p-4">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center hover:text-red-600">
                      {project.title}
                    </h4>
                    <div className="flex flex-row sm:flex-row justify-center gap-4 my-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-sky-400"
                      >
                        <FaEye className="w-6 h-6 sm:w-7 sm:h-7" />
                      </a>
                      <a
                        href={project.gitHubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-green-400"
                      >
                        <FaGithub className="w-6 h-6 sm:w-7 sm:h-7" />
                      </a>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 mt-4 max-h-24 overflow-visible tech-stack-scroll">
                      {project.techStackUsed &&
                        project.techStackUsed.map((tech) => (
                          <div
                            key={tech}
                            className="flex items-center group relative p-1"
                          >
                            {techIcons[tech] && (
                              <div className="w-4 h-4 sm:w-2 sm:h-2">
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
        <fieldset className="border border-gray-300 rounded-lg p-6 mt-10">
          <legend className="text-white text-2xl mb-6">Mini Projects</legend>
          <div className="flex flex-wrap justify-center gap-5">
            {miniProjects.map((project, index) => (
              <div
                key={index}
                className="relative flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 overflow-hidden rounded-lg bg-gray-800 bg-opacity-40  shadow-md transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-lg"
              >
                <h4 className="text-white text-lg lg:text-xl font-semibold mb-2 text-center">
                  {project.title}
                </h4>
                <img
                  className="w-full h-48 object-contain transition duration-300 ease-in-out hover:opacity-75"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white bg-gray-900 bg-opacity-75 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 p-4">
                  <p className="text-center text-gray-300 text-sm font-semibold">
                    {project.description}
                  </p>
                  <div className="flex flex-row sm:flex-row justify-center gap-4 mt-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-sky-400"
                    >
                      <FaEye size={24} />
                    </a>
                    <a
                      href={project.gitHubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-green-400"
                    >
                      <FaGithub size={24} />
                    </a>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 mt-4 max-h-24 overflow-visible tech-stack-scroll">
                    {project.techStackUsed &&
                      project.techStackUsed.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center group relative p-1"
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
