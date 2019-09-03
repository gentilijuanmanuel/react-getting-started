import React, { Component } from 'react';
import { Route, BrowserRouter, NavLink } from 'react-router-dom';

import Courses from './components/Courses/Courses';
import Users from './components/Users/Users';

import './App.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <div>
            <NavLink className="hola" to="/users">Users</NavLink>
            <NavLink to="/courses">Courses</NavLink>
          </div>
          <Route path="/users" component={Users} />
          <Route path="/courses" component={Courses} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
