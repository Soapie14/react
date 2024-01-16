// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
    </div>
  );
}

export default App;