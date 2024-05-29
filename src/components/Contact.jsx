import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

    };

    return (
        <section id="contact" className="min-h-screen py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="md:w-1/3 mb-12 md:mb-0">
                        <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                        <p className="mb-4">
                            <FaMapMarkerAlt className="inline-block mr-2" />
                            <span>Chhindwara (M.P)</span>
                        </p>
                        <p className="mb-4">
                            <FaPhone className="inline-block mr-2" />
                            <span>+91 7000240904</span>
                        </p>
                        <p className="mb-4">
                            <FaEnvelope className="inline-block mr-2" />
                            <span>ashvarygidian1996@gmail.com</span>
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <a href="https://github.com/ashvarygidian" target='_blank' rel="noreferrer" className="text-gray-800 hover:text-gray-600 transition duration-300">
                                <FaGithub size={30} />
                            </a>
                            <a href="https://www.linkedin.com/in/ashvarygidian" target='_blank' rel="noreferrer" className="text-gray-800 hover:text-gray-600 transition duration-300">
                                <FaLinkedin size={30} />
                            </a>
                            <a href="mailto:ashvarygidian1996@gmail.com" target='_blank' rel="noreferrer" className="text-gray-800 hover:text-gray-600 transition duration-300">
                                <FaEnvelope size={30} />
                            </a>
                        </div>
                    </div>
                    <div className="md:w-2/3 bg-white p-8 shadow-lg rounded-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block mb-2 text-gray-600">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-gray-600">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-gray-600">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
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

