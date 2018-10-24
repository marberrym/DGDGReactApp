import React, { Component } from 'react';
import LoginForm from '../PageComponents/LoginForm';
import url from '../globalURL';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
                username: this.state.username,
                password: this.state.password
            }

            fetch(`${url}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(user) 
            })
            .then(res => res.json())
            .then(res => {
                window.localStorage.setItem('token', res.token)
                this.props.dispatch({type: "ASSIGN_USER", data: res.user})
                this.props.history.push('/')
            })
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