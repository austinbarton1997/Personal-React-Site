import React from "react"
import Img from '../austin.png';

export default function About() {
    return (
        <div class="jumbotron">
            <div class="container">
              <h1 class="aboutLine num1 aboutMe" id="about">About Me<hr /></h1>
              <div class="align">
                <div class="aboutTest">
                  <p class="aboutParagraph">Hello! I'm Austin, a software engineer currently based in Denver, CO.</p>
                  <p class="aboutParagraph">My background is in food management where I gained a passion for delivering a superior customer experience. This passion has evolved into me being obsessed with the user experience and has helped me develop skills to create software that is both beautiful and intuitive.</p>
                  <p class="aboutParagraph">I enjoy learning about new and interesting technologies and combing through documentation to pick up those skills quickly.</p>
                  <p class="aboutParagraph">Here are a few technologies I've been working with recently:</p>
                  <ul class="aboutSkills">
                      <li class="aboutSkills currentSkills">JavaScript (ES6+)</li>
                      <li class="aboutSkills currentSkills">Python</li>
                      <li class="aboutSkills currentSkills">React</li>
                      <li class="aboutSkills currentSkills">Node.js</li>
                      <li class="aboutSkills currentSkills">Express</li>
                      <li class="aboutSkills currentSkills">HTML & CSS</li>
                      <li class="aboutSkills currentSkills">MySql</li>
                      <li class="aboutSkills currentSkills">MongoDB</li>
                  </ul>
                </div>
                <div class="aboutImg">
                  <img src={Img} alt="austin" className="meImg" />
                </div>
            </div>
            </div>
        </div>
    )
}
