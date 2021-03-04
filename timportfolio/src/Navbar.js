import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <div className="Navbar">
            <div className="Logo-container">
                <img src="http://cdn.shopify.com/s/files/1/1816/1199/products/MBTA_T_Logo_Green_MAGNET_grande.jpg?v=1494006530" alt=""/>
            </div>
            <div className="Button-container">
            <Link to = '/'><button>Home</button></Link>
            <Link to = '/about'><button>About Me</button></Link>
            <Link to='/work'><button>My Work</button></Link>
            </div>
        </div>
    )
}

export default Navbar
