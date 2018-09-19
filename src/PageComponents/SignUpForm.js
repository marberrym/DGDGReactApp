import React from 'react';
import NavBar from './NavBar';

let SignUpForm = (props) =>

    <div>
        <NavBar/>
        <form>
            <label>
                First Name: 
                <input type="text" name="firstname" required/>
            </label>
            <label>
                Last Name:
                <input type="text" name="lastname" required/>
            </label>
            <label>
                Username:
                <input type="text" name="username" required/>
            </label>
            <label>
                Email:
                <input type="email" name="email" required/>
            </label>
            <label>
                Password:
                <input type="password" name="password" required/>
            </label>
            <label>
                Confirm Password:
                <input type="password" name="password" required/>
            </label>
            <button onSubmit={(event) =>
                event.preventDefault()
            }>Submit</button>
        </form>
    </div>

export default SignUpForm;