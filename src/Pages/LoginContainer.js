import React, { Component } from 'react';
import LoginForm from '../PageComponents/LoginForm';

class LoginFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    render() {
        let updateState = (keyvalue, string) =>
            this.setState({[keyvalue]: string})

        return <LoginForm {...this.state} update={updateState}/>
    }  
}

export default LoginFormContainer;