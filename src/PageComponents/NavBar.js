import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import { connect } from 'react-redux';
import windowSize from '../windowSize';
import BurgerNav from './BurgerNav';

let NavBar = (props) =>
    <div className="navbar">
        <div className="navLinkGroup">
            <Link to="/"><img className="navBarLogo" src='http://localhost:3000/images/dgdg.png' alt="DGDG Logo"/></Link>
            <Link to="/" className="navLink">Home</Link>
            
            <Link to="/about" className="navLink">About DGDG</Link>
        </div>
        {localStorage.token ?
            props.screenWidth > 600 ?
                <div className="navLinkGroup">
                    <div className="avatarBox">
                        <Link to='/goals'><img className="navBarLogo navBarAvatar" src={`/uploads/avatars/${props.user.avatar}`} alt="avatar"/></Link>
                    </div>
                    <Link to="/goals" className="navLink">My Goals</Link>
                    <div className="navLink" onClick={event => {
                        window.localStorage.clear()
                        props.dispatch({type: "ASSIGN_USER", data: {}})
                    }}>Log Out</div>
                </div>
            :
                <BurgerNav avatar={props.user.avatar} dispatch={props.dispatch}/>
        :
            <div className="navLinkGroup">
                <Link to="/signup" className="navLink">Sign Up</Link>
                <Link to="/login" className="navLink">Log In</Link>
            </div>
        }
    </div>
       

let NavBarSmart = connect(state => ({user: state.user}))(windowSize(NavBar))
export default NavBarSmart;