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
  const [status, setStatus] = useState("");

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
          console.log("Email sent successfully:", result.text);
          setStatus("Email sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          setStatus("Failed to send email. Please try again later.");
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e);
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-gray-900 text-white bg-opacity-50"
      style={{
        backgroundImage: `url(${"https://i.gifer.com/4NB4.gif"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <fieldset className="border border-gray-300 rounded-lg p-4 mb-12 bg-gray-800 bg-opacity-10 shadow-lg">
          <legend className="text-3xl font-bold text-center mb-4  px-1">
            Contact Me
          </legend>
          <p className="text-sm text-center italic mb-8">
            Connect with me if you want to know more about me or my work, or if
            you would just like to say hello. I'd love to hear from you.
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 mb-12 md:mb-0 flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Get in Touch
              </h3>
              <p className="mb-4 flex items-center justify-center text-center">
                <FaMapMarkerAlt className="mr-2 text-gray-300" />
                <span>Chhindwara (M.P)</span>
              </p>
              <p className="mb-4 flex items-center justify-center text-center">
                <FaPhone className="mr-2 text-gray-300" />
                <span>+91 7000240904</span>
              </p>
              <p className="mb-4 flex items-center justify-center text-center">
                <FaEnvelope className="mr-2 text-gray-300" />
                <span>ashvarygidian1996@gmail.com</span>
              </p>
              <div className="flex space-x-4 mt-6 justify-center">
                <a
                  href="https://github.com/Ashvary1996"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-gray-500 transition duration-300"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ashvary-gidian/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-gray-500 transition duration-300"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ashvarygidian1996@gmail.com&su=Your%20Subject&body=Your%20Message%20Body"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-gray-500 transition duration-300"
                >
                  <FaEnvelope size={30} />
                </a>
              </div>
            </div>

            <div className="md:w-2/3 bg-gray-700 bg-opacity-30 p-8 rounded-lg shadow-lg hover:bg-gray-700 hover:bg-opacity-60 transition duration-600">
              <form onSubmit={handleSubmit} className="space-y-6 text-black">
                <div>
                  <label className="block mb-2 text-gray-300">Your Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-300"
                    required
                    placeholder="Let me know who's talking..."
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-300">Your Contact Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-300"
                    required
                    placeholder="Where can I reach you?"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-300">Subject (what's on your mind?)</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-300"
                    required
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-300">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-300"
                    required
                    placeholder="Share the details here..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-teal-400 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Send Mail
                  </button>
                </div>
              </form>
              {status && (
                <p className="mt-4 text-center text-gray-300">{status}</p>
              )}
            </div>
          </div>
        </fieldset>
      </div>
    </section>
  );
};

export default Contact;
