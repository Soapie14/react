import React from 'react';

// Import images
import Project1 from '../images/Capture.PNG';
import Project2 from '../images/carousel.PNG';

const Projects = () => {
    return (
        <div className="bg-black text-gray-200 py-8">
            <p className="text-gray-200 text-4xl text-center sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold mb-4">Projects</p>
            <div className="container mx-auto flex flex-col lg:flex-row items-stretch justify-center">

                {/* Project Container 1 */}
                <div className="lg:w-1/2 lg:pr-4 mb-8 flex flex-col items-center">
                    <h3 className="text-xl font-bold text-center">My first portfolio</h3>
                    <div className="project-image-container mb-4">
                        <img src={Project1} alt="Project 1 Picture" className="w-full h-auto lg:h-64 object-cover" />
                    </div>
                    <div className="text-gray-200 text-center">
                        <p>
                            My first portfolio was a testament to my initial journey into web development, crafted with HTML and CSS. This was the first website I built outside of the classroom, it played a pivotal role in showcasing my early skills and projects. As my expertise evolved, I decided to retire the original portfolio, paving the way for this current iteration. My old one is <a href='https://sophieportfolio.surge.sh/' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">deployed using Surge.</a> This latest version, meticulously developed with React.js and styled with Tailwind CSS, represents a leap forward in both functionality and aesthetics. This portfolio not only reflects my growth as a developer but also serves as a dynamic platform to showcase my evolving skills and projects.
                        </p>
                    </div>
                </div>

                {/* Project Container 2 */}
                <div className="lg:w-1/2 lg:pl-4 mb-8 flex flex-col items-center">
                    <h3 className="text-xl font-bold text-center">Internship</h3>
                    <div className="project-image-container mb-4">
                        <img src={Project2} alt="Project 2" className="w-full h-auto lg:h-64 object-cover" />
                    </div>
                    <div className="text-gray-200 text-center">
                        <p>
                            I have actively contributed to the development of cutting-edge websites, demonstrating my proficiency in front-end technologies. Working on numerous projects, I played a key role in implementing features, addressing bugs, and optimizing code for enhanced performance. As a part of a dynamic team, I collaborated on the design and implementation of various components for the landing page of an upcoming website, leveraging React.js, Tailwind CSS, and JavaScript. One notable achievement includes spearheading the development of a visually engaging carousel component that seamlessly accesses a college API on the backend. This carousel enhances overall user interaction and engagement by dynamically displaying information, showcasing my commitment to creating innovative and user-friendly web experiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
