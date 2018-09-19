import React from 'react';
import { Link } from 'react-router-dom';

let NavBar = () =>
    <div className="navbar">
        <div>
            <Link to="/" className="navLink">Home</Link>
            <Link to="/goals" className="navLink">My Goals</Link>
            <Link to="/about" className="navLink">About DGDG</Link>
        </div>
        <div className="flexRow">
            <Link to="/signup" className="navLink">Sign Up</Link>
            <div className="navLink">Log In</div>
        </div>
    </div>

export default NavBar;