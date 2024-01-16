import React, { useState } from 'react';
import '../index.css'; // Import your CSS file


const About = () => {
    return (
        <div className="bg-black mx-0 flex flex-col items-center justify-center h-full p-4 sm:p-8 md:p-16 lg:p-20 xl:p-24 mt-0">
            <p className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold mb-4'>About Me</p>
            <p className='text-white text-center text-sm sm:text-base md:text-lg lg:text-base xl:text-lg'>
                Hello, I'm Sophie Slagle, a results-driven Full Stack Developer located in Lakewood, CA, specializing in front-end development with React.js, Tailwind CSS, and cutting-edge technologies. I'm dedicated to crafting seamless user experiences and staying current with industry trends. My expertise includes front-end technologies like React.js, Tailwind CSS, CSS, and Bootstrap. I'm proficient in HTML, JavaScript, and have experience with frameworks and libraries such as React, Flask, and Django. I'm currently contributing as a Front-end Developer Intern at Velosaty, actively involved in feature development, bug resolution, and code optimization. My portfolio website, developed using React.js and CSS, showcases my skills, with the front-end fully operational and back-end functionalities in progress. Explore my diverse projects on GitHub at GitHub/Soapie14, reflecting my proficiency in front-end technologies. I hold a Certificate in Full Stack Software Development from Coding Dojo, a Master of Arts in Sport Management from the University of South Dakota, and a Bachelor of Science in Physical Education from Idaho State University. Connect with me!
            </p>
        </div>
    );
}

export default About;
