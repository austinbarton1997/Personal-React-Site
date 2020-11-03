import React from "react"

export default function Projects() {
    return (
        <div className="container">
            <div class="projectContainer">
            <h1 className="aboutLine num2 aboutMe" id="projects">Projects I've Built<hr /></h1>
            <ul className="list-unstyled">
                <li className="media">
                    <div className="media-body">
                        <h5 className="mt-0 mb-1"><p className="featuredText">Featured Project</p>
                            <h4><a className="featuredTitle" href="https://github.com/austinbarton1997/Notes" without rel="noopener noreferrer" target="_blank">Notes App</a></h4></h5>
                        <p className="project-paragraph">A platform built for your notes, styled after apple notes.
                        Keep track of notes and things you need to get done! Delete the note when you're done with a simple click.</p>
                    </div>
                    <img src='https://i.ibb.co/T1mM34N/notes.png' alt="tinderMovies" className="projectIMG" />
                </li>
            </ul>
            <ul className="list-unstyled">
                <li className="media">
                    <div className="media-body">
                        <h5 className="mt-0 mb-1"><p className="featuredText">Featured Project</p>
                            <h4><a className="featuredTitle" href="https://github.com/austinbarton1997/Tinder-Movies" without rel="noopener noreferrer" target="_blank">Tinder Movies</a></h4></h5>
                        <p className="project-paragraph">A platform built for you and your partner.
                        Movies that appear on netflix, like or dislike the movie. The movie will be stored in a list. If your
                     partner happens to like the same movie you will get an alert!</p>
                    </div>
                    <img src='https://i.ibb.co/hZFs20C/movieApp.png' alt="tinderMovies" className="projectIMG" />
                </li>
            </ul>
            </div>
        </div>
    )
}
