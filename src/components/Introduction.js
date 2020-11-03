import React from "react"

export default function Introduction() {
    return (
        <div className="jumbotron">
            <div className="container">
                <p className="introduction">Hi, My name is</p>
                <h1 className="name">Austin Barton</h1>
                <h1 className="skill">I build web applications.</h1>
                <p className="intro-paragraph">I'm a self-motivated software engineer who is skilled in building exceptional websites and applications.</p>
                <a href="mailto:mail@austinbarton.dev" className="btn btn-outline-light intro-btn">Get In Touch</a>
            </div>
        </div>
    )
}
