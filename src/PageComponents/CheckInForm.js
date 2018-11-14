import React from 'react';
import './checkin.css';

let questionRouter = {
    0 : <div>
            What is a goal you have set for yourself today?
            <textarea></textarea>
        </div>,
    1 : <div>
            Did you do something to help yourself today?
            <checkbox>
                <option>Yes</option>
                <option>Yes</option>
            </checkbox>
        </div>
}

let CheckInForm = (props) => 
    <div>
        {questionRouter[props.question]}

        {props.question > 0 ?
            <button className="btn" onClick={event => {
                props.update("question", props.question-1)
            }}>Previous</button>
        :
            null
        }
        <button className="btn" onClick={event => {
            props.update("question", props.question+1);
        }}>Next</button>
    </div>

export default CheckInForm;