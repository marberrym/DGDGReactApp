import React from 'react';
import NavBar from './NavBar';

let SignUpForm = (props) => {
    return <div>
        <NavBar/>
        <div className="flexRow center">
            <form className="signupForm labeltext">
                <label>
                    {console.log(props)}
                    First Name: <input type="text"  value={props.firstname} onChange={(event) => 
                        props.update('firstname', event.target.value)} required/>
                </label>
                <label>
                    Last Name: <input type="text" value={props.lastname} onChange={(event) => 
                        props.update('lastname', event.target.value)} required/>
                </label>
                <label>
                    Username: <input type="text" value={props.username} onChange={(event) => 
                        props.update('username', event.target.value)} required/>
                </label>
                <label>
                    Email: <input type="email" value={props.email} onChange={(event) => 
                        props.update('email', event.target.value)} required/>
                </label>
                <label>
                    Password: <input type="password" value={props.password} onChange={(event) => 
                        props.update('password', event.target.value)} required/>
                </label>
                <label>
                    Confirm Password: <input type="password" value={props.pwverify} onChange={(event) => 
                        props.update('pwverify', event.target.value)} required/>
                </label>
                <button onSubmit={(event) =>
                    event.preventDefault()
                }>Submit</button>
            </form>
        </div>
        
    </div>
}

export default SignUpForm;