import React from 'react';
import NavBar from '../PageComponents/NavBar';
import inject from '../inject';
import { connect } from 'react-redux';
import HeadLogo from '../PageComponents/HeadLogo';
import Loading from '../PageComponents/Loading';


let MyGoals = (props) =>
    <div>
        {!props.loading ?
            <div className="pageLayout">
                <NavBar/>
                <HeadLogo/>
                <div>This is where I will list all goals</div>
            </div>
        :
            <div className="pageLayout">
                <Loading/>
            </div>
        }
    </div>
    

export default connect()(inject('/goal', {
    method: 'GET',
    headers: {token: localStorage.token}
})(MyGoals));