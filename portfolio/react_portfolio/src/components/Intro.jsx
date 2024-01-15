import React from 'react';
import '../index.css'; // Import your CSS file

//Video Background

import bg from '../images/background.mp4';


const Intro = () => {

    return (
        <div className="video-background">
            <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src={bg} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
                <div className="w-full text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">Sophie Slagle</h1>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Web Development</h2>
                </div>
            </div>
        </div>
    );
};

export default Intro;