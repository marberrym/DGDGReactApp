import React, { Component } from 'react';
import LoginForm from '../PageComponents/LoginForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import fetchReq from '../fetchReq';

class LoginFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    render() {
        let login = () => {
            let user = {
                username: this.state.username.toLocaleLowerCase(),
                password: this.state.password
            }
            fetchReq('/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(user) 
            }, this.props.history.push, '/', this.props.dispatch)
        }
        let updateState = (keyvalue, string) =>
            this.setState({[keyvalue]: string})

        return <LoginForm {...this.state} 
                update={updateState}
                login={login}
                />
    }  
}

let LoginFormContainerSmart = connect()(withRouter(LoginFormContainer))
export default LoginFormContainerSmart;