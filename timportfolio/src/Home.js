import React, {Fragment} from 'react';
import './Home.css';
import {useSpring, animated} from 'react-spring';
import {Link} from 'react-router-dom';
import Media from 'react-media';

function Home() {

    // let background = {
    //     background: `url(${Background})`,
        
    //   }
    let styleSmall= {
      fontSize: '1.8rem',
    };
    let styleMedium = {
      fontSize: '3rem',
    };
    let styleBig = {
      fontSize: '6rem',
    };

    let helloStyleSmall = {
      fontSize: '1rem',
    }
    let helloStyleMedium = {
      fontSize: '1.4rem',
    }
    let helloStyleBig = {
      fontSize: '1.8rem',
    }
    const props = useSpring({opacity:1, from: {opacity:0}});
    return (
<animated.div style={props} className="Home-page">
  <div className="overlay"> </div>
  <div className="shadow-overlay"></div>
    <div className="Home-content">
      <div className="Home-content__main">
        
        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <Fragment>
              {matches.small && <div> <h3 style={helloStyleSmall}>Hello There!</h3> <h1 style={styleSmall}>I am Tim O'Brien:<br/> Web Developer.</h1></div>}
              {matches.medium && <div> <h3 style={helloStyleMedium}>Hello There!</h3>  <h1 style={styleMedium}>I am Tim O'Brien:<br/> Web Developer.</h1></div>}
              {matches.large && <div> <h3 style={helloStyleBig}>Hello There!</h3> <h1 style={styleBig}>I am Tim O'Brien:<br/> Web Developer.</h1></div>}
            </Fragment>
          )}
        </Media>
        <div className="Home-content__buttons">
          {/* <Link to="/contact"><button className="btn">Contact</button></Link> */}
          <Link to={process.env.PUBLIC_URL + "/Tim's Resume.pdf" } target="_blank"><button className="btn">Resume</button></Link>
        </div>
      </div>  
    </div>
</animated.div>
    )
}

export default Home
