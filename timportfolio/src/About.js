import React from 'react'
import './About.css'

function About() {
    return (
        <div className="About-container">
            <div className="Intro">
                <h3>About</h3>
                <h1> Personal Info.</h1>
                <p> Get To Know More About Me:</p>
            </div>
            <div className="Context"> 
                <div className="Greeting">
                    <h3>Hello!</h3>
                    <p>My name is Tim O'Brien and I am a recent UCF graduate with a Bachelor's Degree in Computer Science. I have managed a lot of projects, and I love to solve problems using web technologies. </p>
                    <p>Please feel free to contact me about any jobs, projects, opportunities, or just to chat using the contact button on the home page.</p>
                </div>
                <div className="Skills"> 
                    <h3>Skills</h3>
                    <ul className="Skills__list">
                        <li className="skill">HTML</li>
                        <li className="skill">CSS</li>
                        <li className="skill">Javascript</li>
                        <li className="skill">React</li>
                        <li className="skill">Github</li>
                        <li className="skill">Node</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
