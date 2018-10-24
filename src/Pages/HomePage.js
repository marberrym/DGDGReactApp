import React from 'react';
import HeadLogo from '../PageComponents/HeadLogo';
import NavBar from '../PageComponents/NavBar';
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';

let HomePage = (props) => 
    <div className="pageLayout">
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
            <div className="pageLayout">
                <div className="homeTextBox">
                    <p>
                        Welcome to the DGDG community, where we not only focus on bettering ourselves both 
                        professionally and personally, but also focus on bettering those around us.
                    </p>
                    <p>
                        Closing the gap between who we are and who we want to be, one day at a time.
                    </p>
                </div>
                <Link to="/signup"><button className="btn">Register</button></Link>
            </div>
        }
    </div>


let HomePageSmart = connect(state => ({user: state.user}))(HomePage);
export default HomePageSmart;