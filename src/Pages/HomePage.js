import React from 'react';
import HeadLogo from '../PageComponents/HeadLogo';
import NavBar from '../PageComponents/NavBar';
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';

let HomePage = (props) => 
    <div>
        <NavBar />
        <HeadLogo />
        {props.user.id ?
            <div className="pageLayout">
                <div className="buttonContainer">
                    <button className="btn">Completed</button>
                    <button className="btn">Check-in</button>
                    <Link to="/newgoal"><button className="btn">New Goal</button></Link>
                </div>
                <div>Welcome Back {props.user.username}</div>
            </div>
        :
            null
        }
    </div>


let HomePageSmart = connect(state => ({user: state.user}))(HomePage);
export default HomePageSmart;