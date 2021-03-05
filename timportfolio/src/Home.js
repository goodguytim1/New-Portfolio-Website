import React from 'react';
import './Home.css'
import {Link} from 'react-router-dom'

function Home() {

    // let background = {
    //     background: `url(${Background})`,
        
    //   }
    return (
<div className="Home-page">
  <div className="overlay"> </div>
  <div className="shadow-overlay"></div>
    <div className="Home-content">
      <div className="Home-content__main">
        <h3>Hello There</h3>
        <h1>I am Tim O'Brien<br/> I am a web developer</h1>
        <div className="Home-content__buttons">
          <Link to="/contact"><button className="btn">Contact</button></Link>
          <button className="btn">Resume</button>
        </div>
      </div>  
    </div>
</div>
    )
}

export default Home
