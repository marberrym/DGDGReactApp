import React, { Component } from 'react';
import SignUpForm from '../PageComponents/SignUpForm';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            email: '',
        }
    }
    render() {
        let updateState = (keyvalue, string) =>
            this.setState({[keyvalue]: string})

        return <SignUpForm {...this.state} update={updateState}/>
    }  
}

export default SignUp;