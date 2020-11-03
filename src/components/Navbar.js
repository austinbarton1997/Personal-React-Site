import React from "react"
import Pdf from '../resume.pdf';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <button className="navbar-toggler ml-auto custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <ul className="navbar-nav">
                        <a className="nav-link navNumbers" href="#about"> About&nbsp;</a>
                        <a className="nav-link navNumbers" href="#projects"> Projects&nbsp;</a>
                        <a className="nav-link navNumbers" href="#contact"> Contact&nbsp;</a>
                    </ul>
                </ul>
                <a href={Pdf} without rel="noopener noreferrer" target="_blank" className="btn btn-outline-light">Resume</a>
            </div>
        </nav >
    )
}
