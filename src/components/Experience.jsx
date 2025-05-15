import {
  FaBroadcastTower,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaLock,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import {
  SiGoogle,
  SiJsonwebtokens,
  SiMongodb,
  SiPostman,
  SiRedis,
} from "react-icons/si";
import viacertaHome from "../data/thumbnail/viacertaHome.png";
const techStack = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MongoDB Atlas", icon: <SiMongodb /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "JWT", icon: <SiJsonwebtokens /> },
  { name: "Bcrypt", icon: <FaLock /> },
  { name: "Google APIs", icon: <SiGoogle /> },
  { name: "SSE", icon: <FaBroadcastTower /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Postman", icon: <SiPostman /> },
];

const Experience = () => (
  <section
    id="experience"
    className="min-h-screen py-16 bg-gray-900 relative overflow-hidden   md:py-20  "
    style={{
      backgroundImage: `url("https://i.gifer.com/4NB4.gif")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
            Experience
          </span>
        </h2>
        <p className="text-lg text-gray-300 font-light italic">
          A glimpse into my professional journey
        </p>
      </div>

      <fieldset className="border border-gray-300 rounded-lg p-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  z-10">
          <div className="">
            {/* Viacerta Abroad */}
            <div className="flex-1 bg-gray-800 bg-opacity-50 rounded-lg shadow-md transition-transform duration-500 hover:transform hover:scale-105 hover:shadow-lg p-10">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <img
                    src={viacertaHome}
                    alt="Website Home Screenshot"
                    className="w-full h-48 md:h-64 object-cover rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
                  />
                  <a
                    href="https://viacertaabroad.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block w-full text-center py-2 px-4 bg-teal-600/30 hover:bg-teal-600/40 rounded-lg text-teal-300 hover:text-teal-200 transition-all duration-300 border border-teal-600/50"
                  >
                    Visit Website →
                  </a>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Backend Developer | Viacerta Abroad
                    <span className="block text-sm text-gray-400 mt-1">
                      March 2025 - Present
                    </span>
                  </h3>

                  <div className="mb-8">
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                      {techStack.map(({ name, icon }) => (
                        <div
                          key={name}
                          className="flex flex-col items-center p-2 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors duration-200"
                        >
                          <div className="text-3xl text-teal-400 mb-1">
                            {icon}
                          </div>
                          <span className="text-xs text-gray-300 text-center font-medium">
                            {name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {[
                      "Backend Architecture: Designed and deployed a robust backend architecture for Vicarta Abroad, covering end-to-end user management (signup, login, password recovery) with secure, time-limited token-based authentication and bcrypt password hashing.",

                      "Performance Optimization: Implemented Redis for high-speed caching, significantly reducing response times and improving system scalability.",

                      "Real-Time Communication: Built real-time notification systems using Server-Sent Events (SSE) and integrated Socket.io for interactive chatbots, enhancing customer engagement and support efficiency.",

                      "Automated Communication: Developed dynamic, context-aware email and WhatsApp messaging services with templated responses, streamlining customer outreach and follow-ups.",

                      "Data Management: Created RESTful APIs for diverse modules, including blogs, courses, inquiries, student profiles, and support tickets, supporting file uploads (images, documents, mixed types) tailored to various use cases.",

                      "Lead Tracking and Analytics: Automated lead data generation with Excel export functionality for streamlined sales tracking and analytics.",

                      "Security and Scalability: Secured API endpoints with JWT-based authentication, implemented rate limiting for critical routes, and enforced structured access controls for both admin and user roles.",

                      "Automated Task Scheduling: Set up cron jobs for automated system data backup and data processing, ensuring reliability and reduced manual intervention.",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-300 text-sm md:text-base"
                      >
                        <span className="text-teal-400 mr-2 mt-1">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* SellerPundit */}
            <div className="flex-1 bg-gray-800 bg-opacity-50 rounded-lg shadow-md transition-transform duration-500 hover:transform hover:scale-105 hover:shadow-lg mt-10 p-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Intern - Software Developer | SellerPundit
                <span className="block text-sm text-gray-400 mt-1">
                  September 2024 - October 2024
                </span>
              </h3>

              <ul className="space-y-3">
                {[
                  "Refactored MVC structure for improved scalability",
                  "Integrated Nodemailer for email automation",
                  "Implemented Excel import/export utilities",
                  "Streamlined codebase and fixed bugs",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-300 text-sm md:text-base"
                  >
                    <span className="text-teal-400 mr-2 mt-1">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </section>
);

export default Experience;
