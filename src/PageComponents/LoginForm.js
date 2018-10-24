import React from 'react';
import NavBar from './NavBar';
import HeadLogo from './HeadLogo';

let LoginForm = (props) => 
    <div className="pageLayout">
        <NavBar/>
        <HeadLogo />
        <form className="formflex" onSubmit={(event) => {
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
            <button className="btn">Login</button>
        </form>
    </div>


export default LoginForm;