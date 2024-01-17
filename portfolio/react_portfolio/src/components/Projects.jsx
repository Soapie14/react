import React from 'react'

//import images

import Project1 from '../images/project1.png'

const Projects = () => {
    return (
        <div className="bg-black text-white py-8">
            <p className='text-white text-4xl text-center sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold mb-4'>Projects</p>
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">

                {/* Project Container 1 */}
                <div className="lg:w-1/2 lg:pr-4 mb-8">
                    <h3 className="text-xl font-bold mb-2 text-center">My first portfolio</h3>
                    <img src={Project1} alt="Project 1 Picture" className="w-full h-[200px] object-cover mb-4" />
                    <p className="text-gray-700">My first portfolio was a testament to my initial journey into web development, crafted with HTML and CSS. Serving as the first website I built outside of the classroom, it played a pivotal role in showcasing my early skills and projects. As my expertise evolved, I decided to retire the original portfolio, paving the way for this current iteration. The latest version, meticulously developed with React.js and styled with Tailwind CSS, represents a leap forward in both functionality and aesthetics. This portfolio not only reflects my growth as a developer but also serves as a dynamic platform to showcase my evolving skills and projects. It is still deployed <a href='https://sophieportfolio.surge.sh/'
                target="_blank"  // Open the link in a new tab
                rel="noopener noreferrer"  // Recommended for security reasons
                className="text-blue-500 hover:underline">Here</a>
                    </p>
                </div>

                {/* Project Container 2 */}
                <div className="lg:w-1/2 lg:pl-4">
                    <img src="project2.jpg" alt="Project 2" className="w-full h-48 object-cover mb-4" />
                    <h3 className="text-xl font-bold mb-2">Project 2 Title</h3>
                    <p className="text-gray-700">My first portfolio was a testament to my initial journey into web development, crafted with HTML and CSS. Serving as the first website I built outside of the classroom, it played a pivotal role in showcasing my early skills and projects. As my expertise evolved, I decided to retire the original portfolio, paving the way for this current iteration. The latest version, meticulously developed with React.js and styled with Tailwind CSS, represents a leap forward in both functionality and aesthetics. This portfolio not only reflects my growth as a developer but also serves as a dynamic platform to showcase my evolving skills and projects.</p>
                </div>
            </div>
        </div>
    );
};
export default Projects
