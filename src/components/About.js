import React from "react"
import Img from '../austin.png';

export default function About() {
    return (
        <div class="jumbotron">
            <div class="container">
                <h1 class="about-line num1 about-me" id="about">About Me<hr /></h1>
                <p class="about-paragraph">Hello! I'm Austin, a software engineer currently based in Denver, CO.</p>
                <p class="about-paragraph">My background is in food management where I gained a passion for delivering a superior customer experience. This passion has evolved into me being obsessed with the user experience and has helped me develop skills to create software that is both beautiful and intuitive.</p>
                <p class="about-paragraph">I enjoy learning about new and interesting technologies and combing through documentation to pick up those skills quickly.</p>
                <p class="about-paragraph">Here are a few technologies I've been working with recently:</p>
                <ul class="about_skills">
                    <li class="about_skills currentSkills">JavaScript (ES6+)</li>
                    <li class="about_skills currentSkills">Python</li>
                    <li class="about_skills currentSkills">React</li>
                    <li class="about_skills currentSkills">Node.js</li>
                    <li class="about_skills currentSkills">Express</li>
                    <li class="about_skills currentSkills">HTML & CSS</li>
                    <li class="about_skills currentSkills">MySql</li>
                    <li class="about_skills currentSkills">MongoDB</li>
                </ul>
                <img src={Img} alt="austin" className="meImg" />
            </div>
        </div>
    )
}
