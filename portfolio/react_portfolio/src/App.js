// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Projects />
    </div>
  );
}

export default App;