import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// import logo from './logo.svg';
import ResponsiveDrawer from './components/ResponsiveDrawer'
import Test from './components/Test'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={ResponsiveDrawer}/>
          <Route path='/test' component={Test}/>
        </Switch>
      </div>
    );
  }
}

export default App;
