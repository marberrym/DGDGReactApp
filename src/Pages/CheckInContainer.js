import React, { Component } from 'react';
import NavBar from '../PageComponents/NavBar';
import HeadLogo from '../PageComponents/HeadLogo';
import CheckInForm from '../PageComponents/CheckInForm';

class CheckInContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goal: "",
            goal_outcome: 0,
            goal_improvements: "",
            self_help: "",
            help_others: "",
        }
    }

    render() {
        let update = (key, value) => {
            this.setState({[key]: value})
        }

        return <div className="pageLayout">
            <NavBar />
            <HeadLogo />
            <CheckInForm {...this.state} update={update}/>
        </div>
    }
}

export default CheckInContainer;