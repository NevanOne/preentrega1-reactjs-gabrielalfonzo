import React from "react";
import "./Navbar.css"
const Navbar = () => {
    return(
        <div className="navbar">
            <div className="nav_logo"></div>
            <div className="nav_items">
                <a href="#"> INICIO</a>
                <a href="#"> JUEGOS</a>
                <a href="#"> PELICULAS</a>
                <a href="#"> CARRITO</a>
            </div>
            <div className="nav_toggle" >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default Navbar;

