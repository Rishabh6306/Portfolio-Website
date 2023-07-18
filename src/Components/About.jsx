import React from 'react'

export default function About() {
    return (
        <div id='about'>
            <div className="about-img">
                <img src='Icons&logo/profile.jpg' alt="Profile" />
            </div>

            <div id="about-container">
                <h2 id='heading'>About  <span>Me</span></h2>
                <h3>Frontend Developer</h3>
                <p>Rishabh Srivastava, a passionate web development enthusiast, currently pursuing a course to enhance my skills. As a fresher, I am eager to explore new opportunities and contribute my best to the world of web development. I'm committed to honing my abilities and making a positive impact in the industry. Excited for the journey ahead!
                </p>
                <a href='#' id='btn'>Read More</a>
            </div>
        </div>
    )
}