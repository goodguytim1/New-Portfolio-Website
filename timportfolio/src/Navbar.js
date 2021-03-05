import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"
import Background from './Tim.jpg';

function Navbar() {
    return (
        <div className="Navbar">
            <div className="Logo-container">
                <Link to = '/'><img id="logo" src={"http://cdn.shopify.com/s/files/1/1816/1199/products/MBTA_T_Logo_Green_MAGNET_grande.jpg?v=1494006530"} alt=""/></Link>
            </div>
            <div className="Button-container">
                <ul className="Button-nav">
                    <li><Link to = '/'>Home</Link></li>
                    <li><Link to = '/about'>About</Link></li>
                    <li><Link to='/work'>Works</Link></li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Navbar
