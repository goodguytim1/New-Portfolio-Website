import React from 'react'
import './Work.css'

function Work() {
    return (
        <div className="Works">
            <div className="Works__intro">
                <h3>Works</h3>
                <h1>Latest Projects.</h1>
                <p>Here you can find some of the projects I worked on recently</p>
            </div>
            <div className="Works__projects">
                <div className="container">
                    <div className="project">
                        <div className="project-image-container">
                            <img src="https://media1.fdncms.com/orlando/imager/u/original/27548877/48923757_2459450514083348_6436587536251879424_o.jpg" alt=""/>
                        </div>
                        <h3 className="project-title">Senior Design: Cloud Tracking V2 for Orlando Utilities Commission (OUC) </h3>
                        <p className="project-description"><span>I was the project manager of 8 UCF students who worked on a cloud tracking system that would help the OUC predict solar panel power output.
                            <br/> I can't share the live version or the code due to privacy concerns, but feel free to watch my teams short presentation.</span></p>
                        <div className="project-actions">
                            <a href="https://youtu.be/lSzXlH8OF40" target="_blank"><button className="project-btn">See Presentation</button></a>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-image-container">
                            <img src="https://repeatingislands.files.wordpress.com/2011/10/happy20sun.gif" alt=""/>
                        </div>
                        <h3 className="project-title">Sunshine Activity Planner</h3>
                        <p className="project-description"><span>Built using chrome dev tools <br/> Users can add, remove, and check off action items at their convenience. <br/>  Action items are removed the next day, and your progress is shown at the top of the app.</span></p>
                        <div className="project-actions">
                            <a href="https://www.rammaheshwari.com/#about" target="_blank"><button className="project-btn">See Live</button></a>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-image-container">
                            <img src="https://cdn.mos.cms.futurecdn.net/wiXtq4NPpGbNf6PEHTT4hg.jpg" alt=""/>
                        </div>
                        <h3 className="project-title">Amazon Cart Clone</h3>
                        <p className="project-description"><span>React clone of an Amazon Cart at checkout. <br/> Change the quantities and delete items to watch your total price change.</span></p>
                        <div className="project-actions">
                            <a href="https://romantic-payne-adfef4.netlify.app/" target="_blank"><button className="project-btn">See Live</button></a>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-image-container">
                            <img src="https://assetshuluimcom-a.akamaihd.net/h3o/facebook_share_thumb_default_hulu.jpg" alt=""/>
                        </div>
                        <h3 className="project-title">Hulu Clone</h3>
                        <p className="project-description"><span>React clone of Hulu movie categories. <br/>  Movies are pulled from the The Movie Data Base (tmdb). <br/> Select categories to filter by.</span></p>
                        <div className="project-actions">
                            <a href="https://huluclone-c3a6f.web.app/" target="_blank"><button className="project-btn">See Live</button></a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Work
