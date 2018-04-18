import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleBar from './titlebar';
import Search from './search';
import MovieList from './movielist';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/loginComponent/login';
import Signup from './components/signupComponent/signup';
import Dashboard from './components/dashboard/dashboard';

const App = () => (

  <Router>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/home" component={Dashboard}/>
    </Switch>
  </Router>

);

export default App;


