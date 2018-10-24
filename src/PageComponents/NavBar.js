import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import { connect } from 'react-redux';

let NavBar = (props) =>
    <div className="navbar">
        <div className="navLinkGroup">
            <Link to="/"><img className="navBarLogo" src="/images/dgdg.png" alt="DGDG Logo"/></Link>
            <Link to="/" className="navLink">Home</Link>
            
            <Link to="/about" className="navLink">About DGDG</Link>
        </div>
        {props.user.id ?
            <div className="navLinkGroup">
                <Link to="/goals" className="navLink">My Goals</Link>
                <div className="navLink" onClick={event => {
                    window.localStorage.clear()
                    props.dispatch({type: "ASSIGN_USER", data: {}})
                }}>Log Out</div>
            </div>
        :
            <div className="navLinkGroup">
                <Link to="/signup" className="navLink">Sign Up</Link>
                <Link to="/login" className="navLink">Log In</Link>
            </div>
        }
    </div>

let NavBarSmart = connect(state => ({user: state.user}))(NavBar)
export default NavBarSmart;