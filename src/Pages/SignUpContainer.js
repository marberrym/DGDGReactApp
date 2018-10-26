import React, { Component } from 'react';
import SignUpForm from '../PageComponents/SignUpForm';
import url from '../globalURL';
import { connect } from 'react-redux';

class SignUpContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            pwverify: '',
            email: '',
        }
    }

    render() {
        let signup = () => {
            let newUser = {
                first_name: this.state.firstname,
                last_name: this.state.lastname,
                username: this.state.username.toLowerCase(),
                password: this.state.password,
                email: this.state.email.toLowerCase()
            }
            fetch(`${url}/signup`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(res => {
                window.localStorage.setItem('token', res.token)
                this.props.dispatch({type: "ASSIGN_USER", data: res.user})
            })
        }

        let updateState = (keyvalue, string) =>
            this.setState({[keyvalue]: string})

        return <SignUpForm 
                {...this.state}
                signup={signup} 
                update={updateState}
                />
    }  
}

let SignUpContainerSmart = connect()(SignUpContainer)
export default SignUpContainerSmart;