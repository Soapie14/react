import React from 'react';
import '../index.css'; // Import your CSS file

// Video Background
import bg from '../images/background.mp4';

const Intro = () => {
    return (
        <div className="video-background relative">
            <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src={bg} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center text-white p-4">
                <div className="w-full text-left">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold mb-4">Hello, I am</h3>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">Sophie Slagle</h1>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Web Development</h2>
                    <p className="text-1l sm:text-1l md:text-2l lg:text-3l ">I am a results-driven Full Stack Developer specializing in front-end development with React.js, Tailwind CSS, and cutting-edge technologies. Committed to creating seamless user experiences and passionate about staying current with industry trends.</p>
                </div>
            </div>
        </div>
    );
};

export default Intro;
