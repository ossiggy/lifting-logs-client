import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import Header from './header';
import LandingPage from './landing-page';
import Gym from './gym';


export class App extends Component {
  
  render() {
    return(
      <div className="app">
        <Header />
        <Route exact path="/" component = {LandingPage} />
        <Route exact path="/gym" component = {Gym} />
      </div>
    )
  }
}

export default withRouter(connect()(App));