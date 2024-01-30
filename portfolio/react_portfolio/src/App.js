// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;