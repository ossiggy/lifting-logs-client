import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {setMultiPlayerMode, setSinglePlayerMode} from '../actions';

import './css/landing-page.css';

export class LandingPage extends Component{
  render(){
    return (
      <div className="landing-page">
        <h1 className="landing-page-title col-12">Lifting Logs</h1>
        <div className="explainer-container col-6 offset-3">
          <p className="explainer">
            Going for PRs?
          </p>
          <p className = "explainer smash">
            SMASH YOUR PRs
          </p>
          <p className="explainer">
            Lifting with a friend?
          </p>
          <p className="explainer destroy">
            DESTROY YOUR FRIEND
          </p>
          <p className="explainer">
            Whoever you're competing against
          </p>
          <p className="explainer ruiner">
            RUIN THEIR DAY
          </p>
          <Link to='/gym'>
            <button 
            type="submit" 
            className="player-number-button"
            onClick={()=>this.props.dispatch(setSinglePlayerMode())}
            >Smash PRs</button>
          </Link>
          <Link to='/gym'>
            <button type="submit" 
            className="player-number-button"
            onClick={()=>this.props.dispatch(setMultiPlayerMode())}
            >Destroy Friend</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default connect()(LandingPage);