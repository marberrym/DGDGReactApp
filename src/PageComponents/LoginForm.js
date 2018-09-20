import React from 'react';
import NavBar from './NavBar';
import HeadLogo from './HeadLogo';
import HeadCaption from './HeadCaption';

let LoginForm = (props) => {
    return <div>
        <NavBar/>
        <HeadLogo />
        <HeadCaption/>
        <div className="flexRow center">
            <form className="formflex labeltext" onSubmit={(event) => {
                    event.preventDefault();
                    props.update('username', '');
                    props.update('password', '')}
                }>
                <label>
                    Username: <input type="text" value={props.username} onChange={(event) => 
                        props.update('username', event.target.value)} required/>
                </label>
                <label>
                    Password: <input type="password" value={props.password} onChange={(event) => 
                        props.update('password', event.target.value)} required/>
                </label>
                <button>Login</button>
            </form>
        </div>
        
    </div>
}

export default LoginForm;