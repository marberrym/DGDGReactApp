import React, { Component } from 'react';
import clickOutside from 'react-click-outside';
import { Link } from 'react-router-dom';

class BurgerNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handleClickOutside() {
        this.setState({isOpen: false})
    }

    toggle() {
        this.state.isOpen === false ?
            this.setState({isOpen: true})
        :
            this.setState({isOpen: false})
    }

    render() {
        return <div className="navLinkGroup">
            <div className="avatarBox">
                <Link to='/goals'><img className="navBarLogo navBarAvatar" src={`/uploads/avatars/${this.props.avatar}`} alt="avatar"/></Link>
            </div>
            <div className="navBars" onClick={event =>this.toggle()}
            ><i class="fas fa-bars fa-2x"></i></div>
            {this.state.isOpen === true ?
                <div className="slideMenu">
                    <Link to="/goals" className="slideItem"><div>My Goals</div></Link>
                    <Link to="/newgoal" className="slideItem"><div>New Goal</div></Link>
                    <div className="slideItem" onClick={event => {
                        window.localStorage.clear();
                        this.props.dispatch({type: "ASSIGN_USER", data: {}})
                    }}>Log Out</div>
                </div>
            :
                null
            }
        </div>
    }
}

export default clickOutside(BurgerNav);