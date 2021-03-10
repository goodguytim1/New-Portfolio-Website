import React, {Fragment} from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
import Media from 'react-media';

function Navbar() { 

    let smallStyle = {
        position: 'relative',
        top: 0,
        right: 0
    }

    return (
        <div className="Navbar">
            <Media queries={{
                small: "(max-width: 599px)",
                medium: "(min-width: 600px) and (max-width: 1199px)",
                large: "(min-width: 1200px)"
                }}>
                {matches => (
                    <Fragment>
                        {matches.small &&             <div className="Navbar__container">
                <div style={smallStyle} className="Button-container">
                    <ul className="Button-nav">
                        <li className="Home__link"><Link to = '/'>Home</Link></li>
                        <li className="About__link"><Link to = '/about'>About</Link></li>
                        <li className="Works__link"><Link to='/work'>Works</Link></li>
                    </ul>
                </div>
            </div>}
                        {matches.medium &&             <div className="Navbar__container">
                <div className="Logo-container">
                    <Link to = '/'><img id="logo" src={"http://cdn.shopify.com/s/files/1/1816/1199/products/MBTA_T_Logo_Green_MAGNET_grande.jpg?v=1494006530"} alt=""/></Link>
                </div>
                <div className="Button-container">
                    <ul className="Button-nav">
                        <li className="Home__link"><Link to = '/'>Home</Link></li>
                        <li className="About__link"><Link to = '/about'>About</Link></li>
                        <li className="Works__link"><Link to='/work'>Works</Link></li>
                    </ul>
                </div>
            </div>}
                        {matches.large &&             <div className="Navbar__container">
                <div className="Logo-container">
                    <Link to = '/'><img id="logo" src={"http://cdn.shopify.com/s/files/1/1816/1199/products/MBTA_T_Logo_Green_MAGNET_grande.jpg?v=1494006530"} alt=""/></Link>
                </div>
                <div className="Button-container">
                    <ul className="Button-nav">
                        <li className="Home__link"><Link to = '/'>Home</Link></li>
                        <li className="About__link"><Link to = '/about'>About</Link></li>
                        <li className="Works__link"><Link to='/work'>Works</Link></li>
                    </ul>
                </div>
            </div>}
                    </Fragment>
                )}
            </Media>         

        </div>
    )
}

export default Navbar
