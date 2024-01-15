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

            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
            <h1 className="text-4xl font-bold">Your White Text Here</h1>
            </div>
        </div>
    );
};

export default Intro;