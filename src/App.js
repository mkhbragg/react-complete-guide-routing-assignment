import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Assignment from './containers/Assignment/Assignment';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/courses" component={Courses} />
            <Route path="/users" component={Users} />
            <Route path="/" component={Assignment}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
