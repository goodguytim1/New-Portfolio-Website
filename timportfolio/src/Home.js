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
          <Link to={process.env.PUBLIC_URL + "/Tim's Resume.pdf" } target="_blank"><button className="btn"><a ></a>Resume</button></Link>
        </div>
      </div>  
    </div>
</div>
    )
}

export default Home
