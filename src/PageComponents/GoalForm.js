import React from 'react';

let GoalForm = (props) =>
    <div>
        <form className="formflex" onSubmit={event => {
            console.log(Object.keys(props))
            event.preventDefault();
            props.submit();
            Object.keys(props).forEach(prop => {
                console.log(prop);
                if(prop !== 'update' && prop !== 'submit') {
                    props.update(prop, '')
                }
            })
        }}>
            <label>
                Goal Name: <input onChange={event => props.update('goal_name', event.target.value)} 
                type="text" value={props.goal_name}></input>
            </label>
            <label>
                Goal Category: <select onChange={event => props.update('goal_category', event.target.value)}
                value={props.goal_category}>
                        <option value="0"></option>
                        <option value="1">Professional</option>
                        <option value="2">Personal</option>
                        <option value="3">Communal</option>
                    </select> 
            </label>
            <label>
                Goal Privacy: <select onChange={event => props.update('goal_privacy', event.target.value)}
                value={props.goal_privacy}>
                        <option value="0"></option>
                        <option value="1">Public</option>
                        <option value="2">Private</option>
                    </select> 
            </label>
            <label>
                Goal Scope: <select onChange={event => props.update('goal_scope', event.target.value)}
                value={props.goal_scope}>
                        <option value="0"></option>
                        <option value="1">Today</option>
                        <option value="2">This week</option>
                        <option value="3">This month</option>
                        <option value="4">This year</option>
                    </select> 
            </label>
            <label>
                Goal Status: <select onChange={event => props.update('goal_status', event.target.value)}
                value={props.goal_status}>
                        <option value="0"></option>
                        <option value="1">In progress</option>
                        <option value="2">To do</option>
                        <option value="3">Completed</option>
                    </select> 
            </label>
            <label className="descContainer">
                Goal Description:
                <textarea onChange={event => props.update('goal_description', event.target.value)}
                value={props.goal_description}></textarea>
            </label>
            <button className="btn">Submit Goal</button>
        </form>
    </div>

export default GoalForm;