import React from 'react';
import NavBar from '../PageComponents/NavBar';
import HeadLogo from '../PageComponents/HeadLogo';

let About = () => 
    <div className="pageLayout">
        <NavBar />
        <HeadLogo />
        <div className="aboutBox">
            DGDG is a goal management system.  It's a place where you can track your progress
            for your personal, professional and community-oriented goals.  You can keep your goals
            private or you can share them with your friends and the DGDG community!  Here at DGDG we 
            hope to help each and every user travel the road between who they are and who they want to be.
        </div>
    </div>

export default About;