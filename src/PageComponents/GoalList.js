import React from 'react';
import './goalList.css';
import moment from 'moment';

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
    '1': '- A Daily Goal',
    '2': 'Goal for the week!',
    '3': 'Goal for the month!',
    '4': 'Goal for the year!',
}

let goalScopeAdd = {
    '1': 'd',
    '2': 'w',
    '3': 'M',
    '4': 'y'
}


let GoalList = (props) => 
    <div className="goalBG">
        <div className="goalHeader">
            <img className='icon' src={goalPrivacy[props.goal.goal_privacy]}/>
            {props.goal.goal_privacy === 1 ?
                <div>Public</div>
            :
                <div>Private</div>
            }
            <img className='icon' src={goalTypeIcon[props.goal.goal_category]}/>
            <div>{`${goalType[props.goal.goal_category]} Goal`}</div>   
        </div>
        <div>
            <div>{props.goal.goal_name}  {goalScope[props.goal.goal_scope]}</div>
        </div>
        
        <div>Goal Started on {moment(props.goal.creation_date).format('Do, MMMM, YYYY')}.</div>
        <div>Target Completion: {moment(props.goal.creation_date).add(1, goalScopeAdd[props.goal.goal_scope]).format('Do, MMMM, YYYY')}.</div>
        <div>{props.goal.goal_description}</div>
    </div>

export default GoalList;