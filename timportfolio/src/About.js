import React from 'react'
import './About.css'

function About() {
    return (
        <div className="About-container">
            <div className="Intro">
                <h3>About</h3>
                <h1> Tim O'Brien.</h1>
                <p className="lead"> Get To Know More About Me:</p>
            </div>
            <hr class="solid"></hr>
            <div className="Context"> 
                <div className="Greeting">
                    <h3>Hello!</h3>
                    <p>My name is Tim O'Brien and I am a recent UCF graduate with a Bachelor's Degree in Computer Science. I have managed a lot of projects, and I love to solve problems using web technologies. </p>
                    <p>Please feel free to contact me about any jobs, projects, opportunities, or just to chat using the contact button on the home page.</p>
                </div>
                <div className="Skills"> 
                    <h3>Fun Facts</h3>
                    <ul className="Skills__list">
                        <li className="skill">I am 22</li>
                        <li className="skill">I am married</li>
                        <li className="skill">I can play the trumpet</li>
                        <li className="skill">I played lacrosse for UCF</li>
                        <li className="skill">I love ping pong</li>
                        <li className="skill">I am a Black Belt</li>
                        
                        
                        
                        
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
