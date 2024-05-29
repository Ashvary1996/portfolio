import React from 'react';

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex py-20   items-center justify-center bg-gray-100  ">
            <div className="text-center max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-4xl font-bold mb-4">Hi, I am Ashvary Gidian</h1>
                <p className="text-xl mb-2">Full Stack Web Developer</p>

                <h2 className="text-2xl font-semibold mb-4">ABOUT ME</h2>
                <p className="text-justify mb-4">
                    Hello! I'm a Full Stack Web Developer hailing from Chhindwara, where I weave digital dreams into reality with a touch of elegance. My forte? Creating exquisite UI designs and interfaces that are nothing short of captivating.
                </p>
                <p className="text-justify mb-4">
                    My coding journey began in 2021 after the COVID-19 era. I embraced programming as a passion that year, and along the journey, I've acquired a range of skills.
                </p>
                <p className="text-justify mb-4">
                    Today, I craft innovative strategies for websites and web designs, aiming to provide exceptional user experiences and the best user interfaces. My goal is to make client choices easier through my technical proficiency and professional skills.
                </p>

                <h2 className="text-2xl font-semibold mb-4">MY SKILLS</h2>
                <div className="grid grid-cols-2 gap-4 text-left">
                    <div>
                        <h3 className="font-bold">Front-end tools</h3>
                        <ul className="list-disc list-inside">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React.js</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold">Tools & Methods</h3>
                        <ul className="list-disc list-inside">
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Netlify</li>
                            <li>MERN Stack</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
