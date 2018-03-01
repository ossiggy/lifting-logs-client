import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import Header from './header';
import LandingPage from './landing-page';


export default class App extends Component {
  
  render() {
    return(
      <div className="app">
        <Header />
        <Route exact path="/" component = {LandingPage} />
      </div>
    )
  }
}
