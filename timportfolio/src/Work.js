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
                        <br/> <br/> I can't share the live version or the code due to privacy concerns, but please watch my teams short presentation if you would like to know more.</span></p>
                        <div className="project-actions">
                            <a href="https://youtu.be/lSzXlH8OF40" target="_blank"><button className="project-btn">See Presentation</button></a>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-image-container">
                            <img src={process.env.PUBLIC_URL + '/Melbourne.png'} alt=""/>
                        </div>
                        <h3 className="project-title">Point Cloud Rendering of Melbourne</h3>
                        <p className="project-description"><span>I was the project manager of 12 UCF students who worked to create a 3d point cloud rendering of the city of melbourne in observable notebooks.<br/> 
                        <br/>Check out the observable notebook we made below!<br/> <br/></span></p>
                        <div className="project-actions">
                            <a href="https://observablehq.com/d/26f8bf1c411a72ab" target="_blank"><button className="project-btn">See Observable</button></a>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-image-container">
                            <img src="https://cdn.mos.cms.futurecdn.net/wiXtq4NPpGbNf6PEHTT4hg.jpg" alt=""/>
                        </div>
                        <h3 className="project-title">Amazon Cart Clone</h3>
                        <p className="project-description"><span>React clone of an Amazon Cart at checkout. <br/> <br/> Change the quantities and delete items to watch your total price change.<br/> <br/> Click below to see it hosted!</span></p>
                        <div className="project-actions">
                            <a href="https://romantic-payne-adfef4.netlify.app/" target="_blank"><button className="project-btn">See Live</button></a>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-image-container">
                            <img src="https://assetshuluimcom-a.akamaihd.net/h3o/facebook_share_thumb_default_hulu.jpg" alt=""/>
                        </div>
                        <h3 className="project-title">Hulu Clone</h3>
                        <p className="project-description"><span>React clone of Hulu movie categories. <br/>  <br/> Movies are pulled from the The Movie Data Base (tmdb). <br/> Select categories to filter by.  <br/> <br/> Click below to see it hosted!</span></p>
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
