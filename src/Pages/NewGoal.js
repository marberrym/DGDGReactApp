import React, { Component } from 'react';
import NavBarSmart from '../PageComponents/NavBar';
import HeadLogo from '../PageComponents/HeadLogo';
import GoalForm from '../PageComponents/GoalForm';
import fetchReq from '../fetchReq';


class NewGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goal_name: "",
            goal_category: 0,
            goal_scope: 0,
            goal_status: 0,
            goal_privacy: 0,
            goal_description: ""
        }
    }
    
    render() {
        let submitGoal = () => {
            let data = {
                goal_name: this.state.goal_name,
                goal_category: this.state.goal_category,
                goal_scope: this.state.goal_scope,
                goal_status: this.state.goal_status,
                goal_privacy: this.state.goal_privacy,
                goal_description: this.state.goal_description
            }
            fetchReq('/goal', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    token: localStorage.token
                },
                body: JSON.stringify(data) 
            }, this.props.history.push, '/goals')
        }
        let update = (key, value) => this.setState({[key]: value})

        return <div className="pageLayout">
            <NavBarSmart/>
            <HeadLogo/>
            <GoalForm 
            {...this.state}
            submit={submitGoal}
            update={update}
            />
        </div>
    }
}

export default NewGoal;