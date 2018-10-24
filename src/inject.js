import React, { Component } from 'react';
import url from './globalURL';

export default (path, parameters, type = null) => (BaseComponent) => 
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
                if(type) {
                    this.props.dispatch({type: type, data: res});
                }
            })
        }

        render() {
            return <BaseComponent {...this.state}/>
        }
    }

    




