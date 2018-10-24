import React, { Component } from 'react';

export default (BaseComponent) => 
    class WindowSize extends Component {
        constructor(props) {
            super(props)
            this.state = {
                screenWidth: window.innerWidth,
                screenHeight: window.innerHeight
            }
        }
        
        componentDidMount() {
            window.addEventListener('resize', () => {
                this.setState({
                    screenWidth: window.innerWidth,
                    screenHeight: window.innerHeight
                })
            })
        }

        render() {
            return <BaseComponent 
                {...this.state}
                {...this.props}
                />
        }

    }
