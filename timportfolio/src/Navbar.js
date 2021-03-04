import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className="Navbar">
            <div className="Logo-container">
                <img src="http://cdn.shopify.com/s/files/1/1816/1199/products/MBTA_T_Logo_Green_MAGNET_grande.jpg?v=1494006530" alt=""/>
            </div>
            <div className="Button-container">
            <button>Home</button>
            <button>About Me</button>
            <button>My Work</button>
            </div>
        </div>
    )
}

export default Navbar
