import React from 'react';
import './checkin.css';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

let questionRouter = (props) => {
    
    let router = {
        0 : <div>
            What is a goal you have set for yourself today?
                <div className="textContainer">
                    <textarea 
                        value={props.goal} 
                        onChange={event => props.update("goal", event.target.value)}
                    ></textarea>
                </div>
            </div>,
        1 : <div>
                Did you do something to help yourself today?
                <RadioGroup value={props.self_help} horizontal>
                    <RadioButton 
                        rootColor="#14261430" 
                        pointColor="#6DB263" 
                        value="1"
                        onChange={event => props.update("self_help", 1)}
                        >Yes
                    </RadioButton>
                    <RadioButton 
                        rootColor="#14261430" 
                        pointColor="#6DB263" 
                        value="2"
                        onChange={event => props.update("self_help", 2)}
                        >No
                    </RadioButton>
                </RadioGroup>
            </div>,
        2 : <div>
                Did you do something to help someone else today?
                <RadioGroup horizontal>
                    <RadioButton value="1">Yes</RadioButton>
                    <RadioButton value="2">No</RadioButton>
                </RadioGroup>
            </div>
    }

    return router[props.question]
}

let CheckInForm = (props) => 
    <div className="checkinForm">
        {questionRouter(props)}
        <div>
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
    </div>

export default CheckInForm;