import React, { useState } from 'react';
import '../index.css'; // Import your CSS file

// Images
import S_icon from '../images/S.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
    <nav className="bg-black p-4 text-white fixed top-0 w-full md:sticky md:top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Section - Logo */}
                <div className="flex items-center">
                    <img src={S_icon} alt="Logo" className="h-10 w-9 mr-11" />
                </div>

                {/* Middle Section - Navigation Links or Hamburger Menu */}
                <div className="hidden md:flex space-x-4">
                    <a href="#home" className="hover:text-gray-300">Home</a>
                    <a href="#about" className="hover:text-gray-300">About Me</a>
                    <a href="#projects" className="hover:text-gray-300">Projects</a>
                </div>

                {/* Right Section - Contact Me Button or Hamburger Menu */}
                <div className="hidden md:flex">
                    <button><a href="#contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:text-gray-300">Contact Me</a></button>
                </div>

                {/* Hamburger Menu for Small Screens */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {menuOpen && (
                    <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 text-white">
                        <a href="#home" className="block py-2 px-4">Home</a>
                        <a href="#about" className="block py-2 px-4">About</a>
                        <a href="#projects" className="block py-2 px-4">Projects</a>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mx-4">Contact Me</button>
                    </div>
                )}
            </div>
        </nav>
    );
};
export default Navbar;

