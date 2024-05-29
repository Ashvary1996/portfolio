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
        className="min-h-screen flex py-20 items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100"
      >
        <div className="text-center max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Hi, I'm Ashvary Gidian,
            <br />a Full Stack Web Developer
          </h1>
          <p className="text-xl mb-2 text-gray-600">
            I build things for the web
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            About Me
          </h2>
          <p className="text-justify mb-4 text-gray-600">
            I'm a passionate Full Stack Web Developer with a knack for crafting
            user-centric web applications and websites. My coding journey
            ignited in 2021, and since then, I've honed a diverse skillset that
            allows me to bridge the gap between design and development.
          </p>

          <p className="text-justify mb-4 text-gray-600">
            I bring my technical expertise and creative flair to every project,
            aiming to deliver innovative solutions that enhance user engagement
            and overall functionality. My goal is to simplify user journeys by
            building intuitive and visually appealing interfaces that prioritize
            usability.
          </p>
        </div>
      </section>
      <section className="skills-section py-20 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">My Skills</h2>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left px-6 text-lg">
          <div className="skill-item bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl mb-4 text-gray-700">Frontend</h3>
            <ul className="skills-list  space-y-2 text-gray-700">
              <li className="flex items-center">
                <FaHtml5 className="mr-2 text-orange-600 hover:scale-150 transition-transform" />{" "}
                HTML5
              </li>
              <li className="flex items-center">
                <FaCss3 className="mr-2 text-blue-600 hover:scale-150 transition-transform" />{" "}
                CSS3
              </li>
              <li className="flex items-center">
                <FaJsSquare className="mr-2 text-yellow-500 hover:scale-150 transition-transform" />{" "}
                JavaScript (ES6+)
              </li>
              <li className="flex items-center">
                <FaReact className="mr-2 text-cyan-500 hover:scale-150 transition-transform" />{" "}
                React
              </li>
              <li className="flex items-center">
                <SiTailwindcss className="mr-2 text-teal-500 hover:scale-150 transition-transform" />{" "}
                Tailwind CSS
              </li>
            </ul>
          </div>

          <div className="skill-item bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl mb-4 text-gray-700">Backend</h3>
            <ul className="skills-list space-y-2 text-gray-700">
              <li className="flex items-center">
                <FaNodeJs className="mr-2 text-green-600 hover:scale-150 transition-transform" />{" "}
                Node.js
              </li>
              <li className="flex items-center">
                <SiExpress className="mr-2 text-gray-800 hover:scale-150 transition-transform" />{" "}
                Express.js
              </li>
              <li className="flex items-center">
                <FaDatabase className="mr-2 text-gray-800 hover:scale-150 transition-transform" />{" "}
                MongoDB
              </li>
              <li className="flex items-center">
                <img
                  src={restApiIcon}
                  alt="restApiIcon"
                  className="mr-2 text-blue-600 hover:scale-150  odd: transition-transform size-5"
                />
                RESTful API
              </li>
            </ul>
          </div>

          <div className="skill-item bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl mb-4 text-gray-700">
              Tools & Platforms
            </h3>
            <ul className="skills-list space-y-2 text-gray-700">
              <li className="flex items-center">
                <FaGit className="mr-2 text-red-600 hover:scale-150 transition-transform" />{" "}
                Git (Version Control)
              </li>
              <li className="flex items-center">
                <SiNetlify className="mr-2 text-cyan-700 hover:scale-150 transition-transform" />{" "}
                Netlify (Deployment)
              </li>
              <li className="flex items-center">
                <SiRender className="mr-2 text-purple-600 hover:scale-150 transition-transform" />{" "}
                Render (Deployment)
              </li>
              <li className="flex items-center">
                <SiPostman className="mr-2 text-orange-600 hover:scale-150 transition-transform" />{" "}
                Postman
              </li>

              <li className="flex items-center">
                <FaCloud className="mr-2 text-blue-500 hover:scale-150 transition-transform" />{" "}
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
