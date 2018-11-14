import React from 'react';
import './checkin.css';

let questionRouter = {
    0 : <div>
            What is a goal you have set for yourself today?
            <textarea></textarea>
            <button className="btn">Next</button>
        </div>
}

let CheckInForm = (props) => 
    <div>
        {questionRouter[props.question]}
    </div>

export default CheckInForm;