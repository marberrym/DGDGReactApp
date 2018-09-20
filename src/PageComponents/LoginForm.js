import React from 'react';
import NavBar from './NavBar';

let LoginForm = (props) => {
    return <div>
        <NavBar/>
        <div className="flexRow center">
            <form className="signupForm labeltext">
                <label>
                    Username: <input type="text" value={props.username} onChange={(event) => 
                        props.update('username', event.target.value)} required/>
                </label>
                <label>
                    Password: <input type="password" value={props.password} onChange={(event) => 
                        props.update('password', event.target.value)} required/>
                </label>
                <button onSubmit={(event) =>
                    event.preventDefault()
                }>Submit</button>
            </form>
        </div>
        
    </div>
}

export default LoginForm;