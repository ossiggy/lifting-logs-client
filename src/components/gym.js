import React, { Component } from 'react';
import {connect} from 'react-redux';
import Scoreboard from './scoreboard';
import WeightBench from './weight-bench';
import ExerciseSelector from './exercise-selector';

import './css/gym.css';

export class Gym extends Component {

  render (){

    return (
      <div className="gym">
        <Scoreboard />
        <ExerciseSelector />
        <WeightBench />
        <h3 className="total-weight">{this.props.weight}</h3>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  multiplayer: state.players.multiplayer === true,
  singleplayer:state.players.singleplayer === true,
  weight: state.weight.weight
})

export default connect(mapStateToProps)(Gym);