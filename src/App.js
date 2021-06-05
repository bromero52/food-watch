import React, { lazy, Suspense } from "react";
// import logo from './fw-logo.svg';
// import './App.css';
import { Route, Switch } from "react-router";
import Nav from "./components/Navi";
import Temp from "./components/Temp";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AddMeal from "./components/AddMeal";
import AuthHome from "./components/AuthHome";
import MealViewer from "./components/MealViewer";
import "./styles/theme.scss";
import Layout from "antd/lib/layout/layout";
import 'antd/dist/antd.css';


function App() {
  return (
    <Layout className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Temp} exact />
        <Route path="/home component={AuthHome}" />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/addmeal" component={AddMeal} />
        <Route path="/mymeals" component={MealViewer} />
      </Switch>
    </Layout>
  );
}

export default App;
