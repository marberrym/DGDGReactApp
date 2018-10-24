import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import { connect } from 'react-redux';
import url from '../globalURL';
import windowSize from '../windowSize';

let NavBar = (props) =>
    <div className="navbar">
        <div className="navLinkGroup">
            <Link to="/"><img className="navBarLogo" src='http://localhost:3000/images/dgdg.png' alt="DGDG Logo"/></Link>
            <Link to="/" className="navLink">Home</Link>
            
            <Link to="/about" className="navLink">About DGDG</Link>
        </div>
        {localStorage.token ?
            <div className="navLinkGroup">
                <Link to='/goals'><img className="navBarLogo" src={`/uploads/avatars/${props.user.avatar}`} alt="avatar"/></Link>
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

let NavBarSmart = connect(state => ({user: state.user}))(windowSize(NavBar))
export default NavBarSmart;