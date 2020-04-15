import React, { Component } from 'react'

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <form className="login">
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email"></input>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password"></input>
                    <input type="submit" value="Log In"></input>
                    <input type=""></input>
                </form>
            </div>
        )
    }
}
