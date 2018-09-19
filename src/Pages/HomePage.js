import React from 'react';
import HeadLogo from '../PageComponents/HeadLogo';
import HeadCaption from '../PageComponents/HeadCaption';
import NavBar from '../PageComponents/NavBar';

let HomePage = (props) => 
    <div>
        <NavBar />
        <HeadLogo />
        <HeadCaption />
    </div>

export default HomePage;