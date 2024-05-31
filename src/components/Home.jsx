import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGit,
  FaCloud,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNetlify,
  SiRender,
  SiPostman,
  SiExpress,
} from "react-icons/si";
import restApiIcon from "../data/restApi.png";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="w-full min-h-screen flex py-20 items-center justify-center bg-gray-900 text-white"
      >
        <div className="text-center max-w-4xl mx-auto p-6 bg-gray-800 shadow-lg rounded-lg transform transition duration-1000 hover:scale-125">
          <h1 className="text-5xl font-bold mb-6 text-gray-200">
            Hi, I'm Ashvary Gidian,
            <br />a Full Stack Web Developer
          </h1>
          <p className="text-xl mb-6 text-gray-400">
            I build things for the web
          </p>
          <h2 className="text-3xl font-semibold mb-6 text-gray-300">
            About Me
          </h2>
          <p className="text-justify mb-6 text-gray-400 leading-relaxed">
            I'm a passionate Full Stack Web Developer with a knack for crafting
            user-centric web applications and websites. My coding journey
            ignited in 2021, and since then, I've honed a diverse skillset that
            allows me to bridge the gap between design and development.
          </p>
          <p className="text-justify mb-6 text-gray-400 leading-relaxed">
            I bring my technical expertise and creative flair to every project,
            aiming to deliver innovative solutions that enhance user engagement
            and overall functionality. My goal is to simplify user journeys by
            building intuitive and visually appealing interfaces that prioritize
            usability.
          </p>
        </div>
      </section>
      <section className="skills-section py-20 bg-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-200">My Skills</h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          <div className="skill-item bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300">
            <h3 className="font-bold text-2xl mb-4 text-gray-200">Frontend</h3>
            <ul className="skills-list space-y-4 text-gray-300">
              <li className="flex items-center">
                <FaHtml5 className="mr-2 text-orange-400 hover:scale-125 transition-transform" />
                HTML5
              </li>
              <li className="flex items-center">
                <FaCss3 className="mr-2 text-blue-400 hover:scale-125 transition-transform" />
                CSS3
              </li>
              <li className="flex items-center">
                <FaJsSquare className="mr-2 text-yellow-400 hover:scale-125 transition-transform" />
                JavaScript (ES6+)
              </li>
              <li className="flex items-center">
                <FaReact className="mr-2 text-cyan-400 hover:scale-125 transition-transform" />
                React
              </li>
              <li className="flex items-center">
                <SiTailwindcss className="mr-2 text-teal-400 hover:scale-125 transition-transform" />
                Tailwind CSS
              </li>
            </ul>
          </div>

          <div className="skill-item bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300">
            <h3 className="font-bold text-2xl mb-4 text-gray-200">Backend</h3>
            <ul className="skills-list space-y-4 text-gray-300">
              <li className="flex items-center">
                <FaNodeJs className="mr-2 text-green-400 hover:scale-125 transition-transform" />
                Node.js
              </li>
              <li className="flex items-center">
                <SiExpress className="mr-2 text-gray-400 hover:scale-125 transition-transform" />
                Express.js
              </li>
              <li className="flex items-center">
                <FaDatabase className="mr-2 text-gray-400 hover:scale-125 transition-transform" />
                MongoDB
              </li>
              <li className="flex items-center">
                <img
                  src={restApiIcon}
                  alt="REST API"
                  className="mr-2 hover:scale-125 transition-transform w-6 h-6"
                />
                RESTful API
              </li>
            </ul>
          </div>

          <div className="skill-item bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300">
            <h3 className="font-bold text-2xl mb-4 text-gray-200">
              Tools & Platforms
            </h3>
            <ul className="skills-list space-y-4 text-gray-300">
              <li className="flex items-center">
                <FaGit className="mr-2 text-red-400 hover:scale-125 transition-transform" />
                Git (Version Control)
              </li>
              <li className="flex items-center">
                <SiNetlify className="mr-2 text-cyan-400 hover:scale-125 transition-transform" />
                Netlify (Deployment)
              </li>
              <li className="flex items-center">
                <SiRender className="mr-2 text-purple-400 hover:scale-125 transition-transform" />
                Render (Deployment)
              </li>
              <li className="flex items-center">
                <SiPostman className="mr-2 text-orange-400 hover:scale-125 transition-transform" />
                Postman
              </li>
              <li className="flex items-center">
                <FaCloud className="mr-2 text-blue-400 hover:scale-125 transition-transform" />
                MongoDB Atlas
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
