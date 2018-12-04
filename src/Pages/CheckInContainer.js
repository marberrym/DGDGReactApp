import React, { Component } from 'react';
import NavBar from '../PageComponents/NavBar';
import HeadLogo from '../PageComponents/HeadLogo';
import CheckInForm from '../PageComponents/CheckInForm';
import fetchReq from '../fetchReq';

class CheckInContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: 0,
            goal: "",
            goal_outcome: "",
            goal_improvements: "",
            self_help: "",
            self_help_response: "",
            help_others: "",
            help_others_response: "",
            checkin_privacy: "",
        }
    }

    render() {
        let update = (key, value) => {
            this.setState({[key]: value})
        }

        let submit = () => {
            let data = {
                goal: this.state.goal,
                goal_outcome: this.state.goal_outcome,
                goal_improvements: this.state.goal_improvements,
                self_help: this.state.self_help,
                self_help_response: this.state.self_help_response,
                help_others: this.state.help_others,
                help_others_response: this.state.help_others_response,
                checkin_privacy: this.state.checkin_privacy,
            }
            
            fetchReq('/checkin', {
                method: "POST",
                headers: {
                    token: localStorage.token,
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(data)
            }, this.props.history.push, '/', this.props.dispatch)
        }

        return <div className="pageLayout">
            <NavBar />
            <HeadLogo />
            <CheckInForm {...this.state} update={update} submit={submit}/>
        </div>
    }
}

export default CheckInContainer;