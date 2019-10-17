import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import Assignment from './containers/Assignment/Assignment';
import Courses from './containers/Courses/Courses';
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
            <Route path="/courses" component={Courses} />
            <Route path="/users" component={Users} />
            <Route render={() => <h1>Not Found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
