import React, { Component } from 'react';
import '../styles/Form.css';

export default class register extends Component {
    render() {
        return (
            <div>
                <form className="form">
                    <h1 className="form-title">Sign Up</h1>
                <label for=""fname>First Name</label>
                    <input type="text" id="fname" name="fname"></input>

                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lname"></input>

                    <label for="email">Email</label>
                    <input type="text" placeholder ="Email" id="email" name="email"></input>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password"></input>
                    <input type="submit" value="Register"></input>
                </form>
            </div>
        )
    }
}
