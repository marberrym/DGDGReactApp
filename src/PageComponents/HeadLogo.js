import React from 'react';
import './headLogo.css';

let HeadLogo = () => 
    <div>
        <div className="head">
            <div className="header flip">Dg.</div>
            <img className="headIMG" src="/images/dgdg.png" alt="DGDG Logo"/>
            <div className="header">Dg.</div>
        </div>
        <div className="head subHead">
            <div className="dg1">Do good.</div>
            <div className="dg2">Die great.</div>
            <div className="dg3">Stay connected.</div>
        </div>
    </div>

export default HeadLogo;