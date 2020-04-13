import React, { Component } from 'react'

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <form className="login">
                    <label for="email">First name:</label>
                    <input type="text" id="email" name="email"></input>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password"></input>
                </form>
            </div>
        )
    }
}
