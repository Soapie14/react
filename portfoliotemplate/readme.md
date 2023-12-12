Starting our React.js and tailwindCSS 
Create a folder to hold our react app! Ours will be called react-tailwind-portfolio

In our integrated terminal type:
>npx create-react-app react-tailwind-portfolio
>cd react-tailwind-portfolio

This will create our react app in a file called react-tailwind-portfolio, and we will navigate to this new file using cd

We then install Tailwind CSS and its dependencies using npm:
>npm install tailwindcss postcss autoprefixer

Create Tailwind CSS and confirguration files:
>npx tailwindcss init -p
This will create a tailwind.config.js file and a postcss.config.js file

Our tailwind file should look something like this:
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html", // Include your HTML file if you have styles in HTML
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


Navigate to postcss.config.js to include Tailwind CSS:

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

Create a component! Our first one will be a Navbar
-Create a file names Navbar.jsx in the src folder(or a components file if you would like to organize them further)

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
      </div>
    </nav>
  );
};

export default Navbar;


Navigate to our App.js in src folder and update it to reflect our Navbar:

// src/App.js
import React from 'react';
import Navbar from './Navbar';
import Portfolio from './Portfolio';

function App() {
  return (
    <div>
      <Navbar />
      <Portfolio />
    </div>
  );
}

export default App;


Run in terminal:
>npm start

