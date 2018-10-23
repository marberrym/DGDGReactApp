import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

let NavBar = () =>
    <div className="navbar">
        <div className="navLinkGroup">
            <Link to="/"><img className="navBarLogo" src="/images/dgdg.png" alt="DGDG Logo"/></Link>
            <Link to="/" className="navLink">Home</Link>
            <Link to="/goals" className="navLink">My Goals</Link>
            <Link to="/about" className="navLink">About DGDG</Link>
        </div>
        <div className="navLinkGroup">
            <Link to="/signup" className="navLink">Sign Up</Link>
            <Link to="/login" className="navLink">Log In</Link>
        </div>
    </div>

export default NavBar;