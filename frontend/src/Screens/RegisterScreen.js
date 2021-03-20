import React from 'react';
import {Link} from 'react-router-dom';

export default function RegisterScreen(props) {

    const redirect = props.location.search 
        ? props.location.search.split('=')[1] 
        : '/';
    const submitHandler = (e) => {
        e.preventDefault();
        props.history.push('/signin');
    }

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Create Account</h1>
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Enter Name">
                    </input>
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter Email">
                    </input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter Password">
                    </input>
                </div>
                <div>
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input type="password" id="confirmpassword" placeholder="Confirm Password">
                    </input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Register
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        Already have an account? {' '}
                        <Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}