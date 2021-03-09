import React from 'react';
import './Work.css';
import {useSpring, animated} from 'react-spring';

function Work() {
    const props = useSpring({opacity:1, from: {opacity:0}});
    return (
        <animated.div style={props} className="Works">
            <div className="Works__intro">
                <h3>Works</h3>
                <h1>Latest Projects.</h1>
                <p>Here you can find some of the projects I worked on recently:</p>
                <div className="Works__divide">
                    <h3>Personal Projects</h3>
                    <h3>School Projects Managed</h3>
                </div>
            </div>
            <hr class="solid"></hr>
            <div className="Works__projects">
                <div className="container">
                    <div className="project">
                        <div className="project-image-container">
                            <img src={process.env.PUBLIC_URL + '/chrome-extension.png'} alt=""/>
                        </div>
                        <h3 className="project-title">Sunshine Activity Planner App </h3>
                        <a href="https://github.com/goodguytim1/sunshine-chrome-extension/tree/master/my_solution" target="_blank"><button className="project-btn">View Code on Github</button></a>
                        <p className="project-description"><span> Available on the chrome store for download on any desktop.  Add tasks to complete throughout your day, link sites to read for later, check them off, or remove them, and watch as your progress bar goes to 100%!
                        <br/> <br/> I built this using basic html, css, and js along with some chrome dev tools: storage, tabs, and contextMenus.  <br/> <br/> Please give it a quick download from the chrome web store linked below!</span></p>
                        <div className="project-actions">
                            <a href="https://chrome.google.com/webstore/detail/sunshine-activity-planner/cofkndjgjdpjnafchlpmalpgbcmgohjd" target="_blank"><button className="project-btn">Chrome Webstore Download</button></a>
                        </div>
                    </div>

                    <div className="project">
                        <div className="project-image-container">
                            <img src={process.env.PUBLIC_URL + '/SeniorDesign.png'} alt=""/>
                        </div>
                        <h3 className="project-title">Senior Design: Cloud Tracking V2 for Orlando Utilities Commission (OUC) </h3>
                        <p className="project-description"><span>I was the project manager of 8 UCF students who worked on a cloud tracking system that would help the OUC predict solar panel power output.
                        <br/> <br/> My main role as a developer was redesign the site layout and UI, as well as ensure all of the pieces of the project connected.np
                        <br/> <br/> I can't share the live version or the code due to privacy concerns, but please watch my team's short presentation if you would like to know more and feel free to use the timestamps to navigate.</span></p>
                        <div className="project-actions">
                            <a href="https://youtu.be/lSzXlH8OF40" target="_blank"><button className="project-btn">See Presentation</button></a>
                        </div>
                    </div>

                    <div className="project">
                        <div className="project-image-container">
                            <img src={process.env.PUBLIC_URL + "/AmazonClone.png"} alt=""/>
                        </div>
                        <h3 className="project-title">Amazon Cart Clone</h3>
                        <a href="https://github.com/goodguytim1/Amazon-Cart-Clone/tree/master/amazon-cart" target="_blank"><button className="project-btn">View Code on Github</button></a>
                        <p className="project-description"><span>React clone of an Amazon Cart at checkout. <br/> <br/> Change the quantities and delete items to watch your total price change.<br/> <br/> Click below to see it hosted!</span></p>
                        <div className="project-actions">
                            <a href="https://romantic-payne-adfef4.netlify.app/" target="_blank"><button className="project-btn">See Live</button></a>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-image-container">
                            <img src={process.env.PUBLIC_URL + '/Melbourne.png'} alt=""/>
                        </div>
                        <h3 className="project-title">Point Cloud Rendering of Melbourne</h3>
                        <p className="project-description"><span>I was the project manager of 12 UCF students who worked to create a 3D point cloud rendering of the city of Melbourne in observable notebooks.<br/> 
                        <br/>Check out the observable notebook we made below!<br/> <br/></span></p>
                        <div className="project-actions">
                            <a href="https://observablehq.com/d/26f8bf1c411a72ab" target="_blank"><button className="project-btn">See Observable</button></a>
                        </div>
                    </div>

                    
                    <div className="project">
                        <div className="project-image-container">
                            <img src={process.env.PUBLIC_URL + "/HuluClone.png"} alt=""/>
                        </div>
                        <h3 className="project-title">Hulu Clone</h3>
                        <a href="https://github.com/goodguytim1/hulu-clone/tree/master/hulu-clone" target="_blank"><button className="project-btn">View Code on Github</button></a>
                        <p className="project-description"><span>React clone of Hulu movie categories. <br/>  <br/> Movies are pulled from the The Movie Data Base (tmdb). <br/> Select categories to filter by.  <br/> <br/> Click below to see it hosted!</span></p>
                        <div className="project-actions">
                            <a href="https://huluclone-c3a6f.web.app/" target="_blank"><button className="project-btn">See Live</button></a>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-image-container">
                            <img src={process.env.PUBLIC_URL + "/Comicality.png"} alt=""/>
                        </div>
                        <h3 className="project-title">Comicality</h3>
                        <a href="https://github.com/E1den/chucky_cheesers" target="_blank"><button className="project-btn">View Code on Github</button></a>
                        <p className="project-description"><span>This was the first project I ever managed, and I worked with a group of 5 students. <br/>  <br/> We used basic html, css, and javascript with SQL for backend.  My main role as a dev was to use a JS library called Konva to help with the in box editing.<br/> <br/> This is no longer hosted, but click below to watch the tutorial!</span></p>
                        <div className="project-actions">
                            <a href="https://youtu.be/Ic4dasUat6Y" target="_blank"><button className="project-btn">Watch Tutorial</button></a>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </animated.div>
    )
}

export default Work
