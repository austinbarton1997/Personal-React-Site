import './stylesheets/App.css';
import './stylesheets/About.css';
import './stylesheets/Contact.css';
import './stylesheets/Introduction.css';
import './stylesheets/Left.css';
import './stylesheets/Right.css';
import './stylesheets/Navbar.css';
import './stylesheets/Projects.css';
import React from "react";
import { Navbar, Introduction, About, Projects, Left, Right, Contact } from "./components/";

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
