import React from "react"

export default function Header() {
    return (
        <nav class="navbar navbar-expand-lg">
            {/* <a class="navbar-brand" href="#">Austin Barton</a> */}
            <button class="navbar-toggler ml-auto custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                </ul>
                <ul class="navbar-nav">
                    <a class="nav-link klADde" href="#about"> About&nbsp;</a>
                    <a class="nav-link klADde" href="#about"> Projects&nbsp;</a>
                    <a class="nav-link klADde" href="#about"> Contact&nbsp;</a>
                </ul>
                <button type="button" class="btn btn-outline-light">Resume</button>
            </div>
        </nav>
    )
}