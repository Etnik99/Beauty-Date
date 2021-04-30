import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RegisterForm from "./components/RegisterForm"
import Home from "./pages/Home";
import Salons from "./pages/Salons";
import Blog from "./pages/Blog";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import LoginRegister from "./components/LoginRegister";
import Login from './components/Login';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';


function App() {
  return (
    <div className="App">
      <Route exact path="/home" component={Home} />
      <Route exact path="/register-form" component={RegisterForm} />
      <Route exact path="/salons" component={Salons} />
      <Route exact path="/salons/:serviceId/:locationId" component={Salons} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/login-register" component={LoginRegister} />
      <Switch>
        <Route exact path="/" component={Home} />
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
