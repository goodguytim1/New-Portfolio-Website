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
                    <p>My name is Tim O'Brien and I was raised in Jacksonville, FL. Growing up I loved playing sports, reading, playing video games, hanging out with friends, and going to school.  When I was in highschool I would play in the varsity football games, and march with the band during halftime.</p>
                    <p>If you are looking for someone who is going to give it his all, then I'm your guy.</p>
                </div>
                <div className="Skills"> 
                    <h3>Attributes</h3>
                    <ul className="Skills__list">
                        <li className="skill">Age: 22</li>
                        <li className="skill">Status: Married</li>
                        <li className="skill">Instrument: Jazz Trumpet</li>
                        <li className="skill">Sport: UCF Lacrosse</li>
                        <li className="skill">Game: Table Tennis</li>
                        <li className="skill">Achievment: Tang Soo Do Black Belt</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
