import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import GetCodes from './GetCodes';
import CreateCode from './CreateCode';

// in this video we're gonna talk about the key points.
// pregressive web apps aren't somthing that you shouldn't use 
// because they are shit

class App extends Component {
  state = {
    codes: []
  };

  componentDidMount() {
    console.log('hello motherfucker, this is my website I can say that now');
  }
  render() {
    return (
      // dont fucking add router here
      // <Router>
        <Switch>
          <Route exact path="/" component={GetCodes} />
          <Route path="/create_code" component={CreateCode} />
        </Switch>
      // </Router>
    );
  }
}

export default App;
