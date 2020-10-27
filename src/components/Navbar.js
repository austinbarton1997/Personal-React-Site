import React from "react"

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg">
            <button class="navbar-toggler ml-auto custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <ul class="navbar-nav">
                        <a class="nav-link navNumbers" href="#about"> About&nbsp;</a>
                        <a class="nav-link navNumbers" href="#projects"> Projects&nbsp;</a>
                        <a class="nav-link navNumbers" href="#contact"> Contact&nbsp;</a>
                    </ul>
                </ul>
                <button type="button" class="btn btn-outline-light">Resume</button>
                <a href="../resume.pdf" class="btn btn-outline-light">Resume</a>
            </div>
        </nav >
    )
}