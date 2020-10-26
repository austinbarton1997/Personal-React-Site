import React from 'react'
import './App.css';
import Navbar from "./components/Navbar"
import Introduction from "./components/Introduction"
import About from "./components/About";
import Projects from "./components/Projects";
import Left from './components/Left';
import Right from './components/Right'

function App() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <About />
      <Projects />
      <Left />
      <Right />
    </div>
  );
}

export default App;
