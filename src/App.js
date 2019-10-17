import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import Assignment from './containers/Assignment/Assignment';
import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Assignment />
          <nav>
            <ul>
              <li><NavLink to="/courses" exact>Courses</NavLink></li>
              <li><NavLink to="/users" exact>Users</NavLink></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/courses/:id" component={Course} />
            <Route path="/courses" component={Courses} />
            <Route path="/users" component={Users} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
