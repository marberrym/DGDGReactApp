import React, { Component } from 'react';
import url from './globalURL';

export default (path, parameters) => (BaseComponent) => 
    class Injection extends Component {
        constructor(props) {
            super(props)
            this.state = {
                loading: false,
                data: {}
            }
        }

        componentDidMount() {
            this.setState({loading: true})
            fetch(url + path, parameters)
            .then(res => res.json())
            .then(res => {
                if (res.error === 'jwt expired') {
                    localStorage.removeItem('token');
                    this.setState({
                        loading: false
                    })
                } else if (!res.error) {
                    this.setState({
                        data: res,
                        loading: false
                    })
                    if(res.action) {
                        this.props.dispatch({type: res.action, data: res.data});
                    }
                }
            })
        }

        render() {
            return <BaseComponent {...this.state.loading}/>
        }
    }

    




