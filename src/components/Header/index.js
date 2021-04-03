import React from 'react'
import './style.css'

const Header =(props)=>{
    return(
        <header className="header">
            <nav className="HeaderMenu">
                <a href="a">Home</a>
                <a href="a">About us</a>
                <a href="a">Contact us</a>
            </nav>
            <div>
                Links
            </div>
        </header>
    )
}

export default Header