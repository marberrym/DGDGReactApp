import React, { Component } from 'react';
import url from './globalURL';
import { connect } from 'react-redux';

export default (path, parameters, type = null) => (BaseComponent) => 
    class Injection extends Component {
        constructor(props) {
            super(props)
            this.state = {
                data: {}
            }
        }


        componentDidMount() {
            connect()(Injection);
            fetch(url + path, parameters)
            .then(res => res.json())
            .then(res => {
                this.setState({data: res})
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

    




