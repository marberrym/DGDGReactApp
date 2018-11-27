import React from 'react';
import './checkin.css';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import './goalList.css';

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
                Were you able to complete this goal today?
                <RadioGroup onChange={event => props.update("goal_outcome", event)} horizontal>
                    <RadioButton 
                        rootColor="#14261430" 
                        pointColor="#6DB263" 
                        value="1"
                        >Yes
                    </RadioButton>
                    <RadioButton 
                        rootColor="#14261430" 
                        pointColor="#6DB263" 
                        value="2"
                        >No
                    </RadioButton>
                </RadioGroup>
                {props.goal_outcome == 1 ?
                    <div>
                        <div>Great Job!  Keep it up!</div>
                        <img className="trophy" src="./icons/trophy.png"/>
                    </div>
                :
                    null
                }
                {props.goal_outcome == 2 ?
                    <div>
                        <div>That's okay!  Tomorrow is a new day!</div>
                        <div>What could you have improved upon to meet that goal tomorrow?</div>
                        <textarea 
                            value={props.goal_improvements} 
                            onChange={event => props.update("goal_improvements", event.target.value)}
                        ></textarea>

                    </div>
                :
                    null
                }
            </div>,
        2 : <div>
                Did you do something to help yourself today?
                <RadioGroup onChange={event => props.update("self_help", event)} horizontal>
                    <RadioButton
                        rootColor="#14261430" 
                        pointColor="#6DB263" 
                        value="1"
                        >Yes
                    </RadioButton>
                    <RadioButton
                        rootColor="#14261430" 
                        pointColor="#6DB263" 
                        value="2"
                        >No
                    </RadioButton>
                </RadioGroup>
                
                {props.self_help == 1 ?
                    <div>
                        <div>Awesome, self-love is key!</div>
                        <div>How did you help yourself today?</div>
                        <div className="textContainer">
                            <textarea 
                                value={props.self_help_response}
                                onChange={event => props.update("self_help_response", event.target.value)}>
                            </textarea>
                        </div>
                    </div>
                :
                    null
                }
                {props.self_help == 2 ? 
                    <div>
                        <div>That's okay, remember to treat yourself!</div>
                        <div>How could you help yourself tomorrow?</div>
                        <div className="textContainer">
                            <textarea
                                value={props.self_help_response}
                                onChange={event => props.update("self_help_response", event.target.value)}>
                            </textarea>
                        </div>
                    </div>
                :
                    null
                }
            </div>,
        3 : <div>
                Did you do something to help someone else today?
                <RadioGroup onChange={event => props.update("help_others", event)} horizontal>
                    <RadioButton
                        rootColor="#14261430" 
                        pointColor="#6DB263" 
                        value="1">Yes
                    </RadioButton>
                    <RadioButton 
                        rootColor="#14261430" 
                        pointColor="#6DB263" 
                        value="2">No
                    </RadioButton>
                </RadioGroup>
                {props.help_others == 1 ?
                    <div>
                        <div>That's awesome.  Help yourself, but always help others too.</div>
                        <div>How did you help help someone else today?</div>
                        <textarea value={props.help_others_response} 
                            onChange={event => props.update("help_others_response", event.target.value)}>
                        </textarea>
                    </div>
                :
                    null
                }
                {props.help_others == 2 ?
                    <div>
                        <div>That's okay, remember helping others IS helping yourself!</div>
                        <div>What could you do to help someone tomorrow?</div>
                        <textarea value={props.help_others_response}
                            onChange={event => props.update("help_others_response", event.target.value)}>
                        </textarea>
                    </div>
                :
                    null    
                }
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
            {props.question !== 3 ?
                <button className="btn" onClick={event => {
                    props.update("question", props.question+1);
                }}>Next</button>
            :
                <div>
                    <button className="btn">Submit</button>
                </div>
            }
            
        </div>
    </div>

export default CheckInForm;