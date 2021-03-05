import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"

function Navbar() { 

    return (
        <div className="Navbar">
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
        </div>
    )
}

export default Navbar
