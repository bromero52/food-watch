import React from 'react';
// import logo from './fw-logo.svg';
// import './App.css';
import { Route, Switch } from 'react-router';
import Nav from './components/Navi';
import Temp from './components/Temp';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddMeal from './components/AddMeal';
import AuthHome from './components/AuthHome';
import MealViewer from './components/MealViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/theme.scss'

function App() {
  return (
    <div className="App">
      <Nav/>
        <Switch>
          <Route path="/" component= { Temp } exact /> 
          <Route path="/home component={AuthHome}"/>
          <Route path="/login" component = { Login } /> 
          <Route path="/signup" component = { SignUp } /> 
          <Route path="/addmeal" component = { AddMeal } />
          <Route path="/mymeals" component = { MealViewer} />
        </Switch>
    </div>
  );
}


export default App;
