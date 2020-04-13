import React from 'react';
// import logo from './fw-logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Nav from './components/Nav';
import Temp from './components/Temp';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Nav/>
        <Switch>
          <Route path="/" component= { Temp } exact /> 
          <Route path="/about" component = { About } />
        </Switch>
    </div>
  );
}

export default App;
