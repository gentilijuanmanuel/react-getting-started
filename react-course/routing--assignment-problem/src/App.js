import React, { Component } from 'react';
import { Route, BrowserRouter, NavLink, Switch, Redirect } from 'react-router-dom';

import Courses from './components/Courses/Courses';
import Users from './components/Users/Users';

import './App.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <div>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/courses">Courses</NavLink>
          </div>
          <Switch>
            <Route path="/users" component={Users} />
            <Route path="/courses" component={Courses} />
            <Redirect path="/all-courses" to="/courses" />
            <Route render={() => <h1>404 not found :(</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
