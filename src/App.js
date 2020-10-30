import './stylesheets/App.css';
import './stylesheets/About.css';
import './stylesheets/Contact.css';
import './stylesheets/Introduction.css';
import './stylesheets/Left.css';
import './stylesheets/Right.css';
import './stylesheets/Navbar.css';
import './stylesheets/Projects.css';
import React from "react";
import Navbar from "./components/";
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
