import React from 'react';

// Import images
import Project1 from '../images/Capture.PNG';
import Project2 from '../images/carousel.PNG';

const Projects = () => {
    return (
        <div className="bg-black text-gray-200 py-8">
            <p className="text-gray-200 text-4xl text-center sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold mb-4">Projects</p>
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">

                {/* Project Container 1 */}
                <div className="lg:w-1/2 lg:pr-4 mb-8 flex flex-col items-center">
                    <h3 className="text-xl font-bold mb-2 text-center">My first portfolio</h3>
                    <div className="project-image-container">
                        <img src={Project1} alt="Project 1 Picture" className="w-full h-[450px] object-cover mb-4" />
                    </div>
                    <p className="text-gray-700">
                        My first portfolio was a testament to my initial journey into web development, crafted with HTML and CSS. This was the first website I built outside of the classroom, it played a pivotal role in showcasing my early skills and projects. As my expertise evolved, I decided to retire the original portfolio, paving the way for this current iteration. My old one is <a href='https://sophieportfolio.surge.sh/'
                            target="_blank"  // Open the link in a new tab
                            rel="noopener noreferrer"  // Recommended for security reasons
                            className="text-blue-500 hover:underline">deployed using Surge.</a> This latest version, meticulously developed with React.js and styled with Tailwind CSS, represents a leap forward in both functionality and aesthetics. This portfolio not only reflects my growth as a developer but also serves as a dynamic platform to showcase my evolving skills and projects.
                    </p>
                </div>

                {/* Project Container 2 */}
                <div className="lg:w-1/2 lg:pl-4 mb-8 flex flex-col items-center">
                    <h3 className="text-xl font-bold mb-2 text-center">Internship</h3>
                    <div className="project-image-container">
                        <img src={Project2} alt="Project 2" className="w-full h-[450px] object-cover mb-4" />
                    </div>
                    <p className="text-gray-700">
                        My first portfolio was a testament to my initial journey into web development, crafted with HTML and CSS. Serving as the first website I built outside of the classroom, it played a pivotal role in showcasing my early skills and projects. As my expertise evolved, I decided to retire the original portfolio, paving the way for this current iteration. The latest version, meticulously developed with React.js and styled with Tailwind CSS, represents a leap forward in both functionality and aesthetics. This portfolio not only reflects my growth as a developer but also serves as a dynamic platform to showcase my evolving skills and projects.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Projects;
