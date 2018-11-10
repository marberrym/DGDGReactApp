import React from 'react';
import NavBar from '../PageComponents/NavBar';
import HeadLogo from '../PageComponents/HeadLogo';
import "animate.css"
import ScrollAnimation from 'react-animate-on-scroll';
import "./about.css"

let About = () => 
    <div className="pageLayout">
        <NavBar />
        <HeadLogo />
        <div className="aboutFlex">
            <div className="aboutBox">
                <div className="aboutHead"><strong>Do Good, Die Great.</strong></div>
                <div className="aboutSubHead">From dream to production by Matthew Marberry</div>
                <div>
                    Throughout his life Matthew has become familiar with the power of goals.
                    Efficient goal oriented planning has the power to change many things in this world.
                </div>
            </div>
            <div className="aboutBox">
                <img className="devPic" src="./images/aboutDev.jpg"></img>
            </div>
        </div>
        <div className="aboutBox">
            DGDG is a goal management system.  It's a place where you can track your progress
            for your personal, professional and community-oriented goals.  You can keep your goals
            private or you can share them with your friends and the DGDG community!  Here at DGDG we 
            hope to help each and every user travel the road between who they are and who they want to be.
        </div>
    </div>

export default About;