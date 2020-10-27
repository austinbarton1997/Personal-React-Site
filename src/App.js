import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";
import Left from './components/Left';
import Right from './components/Right';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <About />
      <Projects />
      <Left />
      <Right />
      <Contact />
    </div>
  );
}

export default App;
