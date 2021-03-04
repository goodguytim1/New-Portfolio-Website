import React from 'react';
import Background from './Tim.jpg';


function Home() {

    let background = {
        background: `url(${Background})`,
        
      }
    return (
<div className="Home-page" style={background}>
        <h1>Tim O'Brien</h1>
        <h2>Web Developer</h2>
        <div className="Button-1">
          <button>Contact Me</button>
        </div>
        <div className="Button-2">
          <button>Resume</button>
        </div>
      </div>
    )
}

export default Home
