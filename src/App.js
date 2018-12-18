import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import GetCodes from './GetCodes';
import CreateCode from './CreateCode';

class App extends Component {
  state = {
    codes: []
  };

  

  componentDidMount() {
    console.log('hello motherfucker, this is my website I can say that now');
  }
  render() {
    return (

        <Switch>
          <Route exact path="/" component={GetCodes} />
          <Route path="/create_code" component={CreateCode} />
        </Switch>

    );
  }
}

export default App;
