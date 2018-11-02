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
                this.setState({
                    data: res,
                    loading: false
                })
                console.log(res)
                if(res.action) {
                    this.props.dispatch({type: res.action, data: res.data});
                }
            })
        }

        render() {
            return <BaseComponent {...this.state.loading}/>
        }
    }

    




