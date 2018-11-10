import React from 'react';
import './goalList.css';
import moment from 'moment';
import fetchReq from '../fetchReq';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


let goalTypeIcon = {
    '1': './icons/professional.svg',
    '2': './icons/personal.svg',
    '3': './icons/community.svg'
}
let goalType = {
    '1': "Professional",
    '2': "Personal",
    '3': "Community",
}

let goalPrivacy = {
    '1': './icons/public.svg',
    '2': './icons/private.svg'
}

let goalScope = {
    '1': 'Daily',
    '2': 'Weekly',
    '3': 'Monthly',
    '4': 'Annual',
}

let goalScopeAdd = {
    '1': 'd',
    '2': 'w',
    '3': 'M',
    '4': 'y'
}


let GoalList = (props) => 
    <div className="goalBG">
        {props.goal.goal_status === 3 ?
            <div>
                <img className='trophy' src={'./icons/trophy.png'}/>
                <div className='completedText'>Congratulations!</div>
            </div>
        :
            <img className='iconCat' src={goalTypeIcon[props.goal.goal_category]}/> 
        }
        <div className="goalContent">
            <div className="goalHead">
                <div className="goalName">{props.goal.goal_name}</div>
                <ul className="goalSubHead">
                    <li>A {goalScope[props.goal.goal_scope]} {goalType[props.goal.goal_category]} Goal</li>
                </ul>
            </div>
            <div className="goalScopeSection">
                <div className="goalScope">
                    <span>Goal Started:</span>
                    <span className="startDate"> {moment(props.goal.creation_date).format('h:mmA, MM-DD-YYYY')}.</span>
                </div>
                <div className="goalScope">
                    <span>Target Completion:</span>
                    <span className="completeDate"> {moment(props.goal.creation_date).add(1, goalScopeAdd[props.goal.goal_scope]).format('h:mmA, MM-DD-YYYY')}.</span>
                </div>
            </div>
            <div className="goalDesc">{props.goal.goal_description}</div>
        </div>
        <div className="goalRightCol">
            <div className="privacyStatus">
                <img className='icon' src={goalPrivacy[props.goal.goal_privacy]}/>
                {props.goal.goal_privacy === 1 ?
                    <div>Public</div>
                :
                    <div>Private</div>
                }
                <button className="btn" onClick={event => {
                    fetchReq(`/updateprivacy?goalID=${props.goal.id}&privacy=${props.goal.goal_privacy}`, {
                        headers: {token: localStorage.token}
                    }, props.history.push, '/goals', props.dispatch)
                }}>Change</button>
            </div>
            <div className="goalStatus">Status: In Progress</div>
            {props.goal.goal_status !== 3 ?
                <button className="btn" onClick={event => {
                    fetchReq(`/complete?goalID=${props.goal.id}`, {
                        headers: {token: localStorage.token}
                    }, props.history.push, '/goals', props.dispatch)
                }}>Complete</button>
            :
                <div>Completed!</div>
            }
        </div>
    </div>

let GoalListSmart = connect()(GoalList)
export default withRouter(GoalListSmart);