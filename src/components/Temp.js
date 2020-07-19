import React, { Component } from "react";
import logo from '../assets/fw-logo.svg';
import "../styles/App.css"

export default class Temp extends Component {
  render() {
    return (
      <div className="Temp">
        <header className="App-header">
          <h2 >In progress!</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}
