import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './css/landing-page.css';

export default function LandingPage(props){
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
          Regardless of who you're competing against
        </p>
        <p className="explainer ruiner">
          RUIN THEIR DAY
        </p>
        <button type="button" className="player-number-button">Smash PRs</button>
        <button type="button" className="player-number-button">Destroy Friends</button>
      </div>
    </div>
  )
}