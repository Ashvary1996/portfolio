import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PRIVATE_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e);
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-2">Contact Me</h2>
        <p className="text-sm text-center italic p-5">
          Connect with me if you want to know more about me or my work, or if
          you would just like to say hello, send me a message. I'd love to hear
          from you.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/3 mb-12 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="mb-4 flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span>Chhindwara (M.P)</span>
            </p>
            <p className="mb-4 flex items-center">
              <FaPhone className="mr-2" />
              <span>+91 7000240904</span>
            </p>
            <p className="mb-4 flex items-center">
              <FaEnvelope className="mr-2" />
              <span>ashvarygidian1996@gmail.com</span>
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com/ashvarygidian"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-gray-500 transition duration-300"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/ashvarygidian"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-gray-500 transition duration-300"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="mailto:ashvarygidian1996@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-gray-500 transition duration-300"
              >
                <FaEnvelope size={30} />
              </a>
            </div>
          </div>
          <div className="md:w-2/3 bg-gray-800 p-8 shadow-lg rounded-lg ">
            <form onSubmit={handleSubmit} className="space-y-6 text-black">
              <div>
                <label className="block mb-2 text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-300 "
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-300 "
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300">Subject</label>
                <input
                  type="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-300 "
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
