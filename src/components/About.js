import React from "react"
import Img from '../austin.png';

export default function About() {
    return (
        <div className="jumbotron">
            <div className="container">
              <h1 className="aboutLine num1 aboutMe" id="about">About Me<hr /></h1>
              <div className="align">
                <div className="aboutTest">
                  <p className="aboutParagraph">Hello! I'm Austin, a software engineer currently based in Denver, CO.</p>
                  <p className="aboutParagraph">My background is in food management where I gained a passion for delivering a superior customer experience. This passion has evolved into me being obsessed with the user experience and has helped me develop skills to create software that is both beautiful and intuitive.</p>
                  <p className="aboutParagraph">I enjoy learning about new and interesting technologies and combing through documentation to pick up those skills quickly.</p>
                  <p className="aboutParagraph">Here are a few technologies I've been working with recently:</p>
                  <ul className="aboutSkills">
                      <li className="aboutSkills currentSkills">JavaScript (ES6+)</li>
                      <li className="aboutSkills currentSkills">Python</li>
                      <li className="aboutSkills currentSkills">React</li>
                      <li className="aboutSkills currentSkills">Node.js</li>
                      <li className="aboutSkills currentSkills">Express</li>
                      <li className="aboutSkills currentSkills">HTML & CSS</li>
                      <li className="aboutSkills currentSkills">MySql</li>
                      <li className="aboutSkills currentSkills">MongoDB</li>
                  </ul>
                </div>
                <div className="aboutImg">
                  <img src={Img} alt="austin" className="meImg imgOutline" />
                </div>
            </div>
            </div>
        </div>
    )
}
