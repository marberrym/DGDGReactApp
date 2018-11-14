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
                <div className="intro">
                    A great man once said to me...
                    <blockquote>
                        "Matthew, if you walk through life choosing to <strong>do good</strong>,<br/> then at the very least you will be sure to <strong>die great</strong>."
                    </blockquote>
                    Since that day, those words have always resonated with me.
                    <br/>
                    As I continue to grow, I begin to see more of the hidden wisdom that lives in that lives in that statement.  I have allowed it to become one of the key
                    principles that I try to live my life by.  It is a principle that I hope to share with others through my actions and the development of DGDG. 
                </div>
            </div>
            <div className="devPicBox">
                <img className="devPic" src="./images/aboutDev.jpg"></img>
            </div>
            <div className="aboutContent">
                This is where I will go over smart goals and goal break down systems.
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