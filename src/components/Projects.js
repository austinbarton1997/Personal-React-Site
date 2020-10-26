import React from "react"

export default function Projects() {
    return (
        <div class="container">
            <h1 class="about-me aboutLine" id="about">About Me<hr /></h1>
            <ul class="list-unstyled">
                <li class="media">
                    <img src='https://i.ibb.co/hZFs20C/movieApp.png' alt="tinderMovies" className="projectIMG" />
                    <div class="media-body">
                        <h5 class="mt-0 mb-1"><p class="featuredText">Featured Project</p>
                            <h4 class="featuredTitle">Tinder Movies</h4></h5>
                        <p class="project-paragraph">A platform built for you and your partner, styled after tinder.
                        Movies that appear on netflix, like or dislike the movie. The movie will be stored in a list. If your
                     partner happens to like the same movie you will get an alert!</p>
                    </div>
                </li>
            </ul>
            <ul class="list-unstyled">
                <li class="media">
                    <div class="media-body">
                        <h5 class="mt-0 mb-1"><p class="featuredText1">Featured Project</p>
                            <h4 class="featuredTitle1">Notes App</h4></h5>
                        <p class="project-paragraph1">A platform built for your notes, styled after apple notes.
                        Keep track of notes and things you need to get done! Delete the note when you're done with a simple click.</p>
                    </div>
                    <img src='https://i.ibb.co/T1mM34N/notes.png' alt="tinderMovies" className="projectIMG" />
                </li>
            </ul>
        </div>
    )
}
