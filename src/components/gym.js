import React, { Component } from 'react';
import {connect} from 'react-redux';
import Scoreboard from './scoreboard';
import WorkoutMat from './workout-mat';
import WeightBench from './weight-bench';
import ExerciseSelector from './exercise-selector';

import './css/gym.css';

export class Gym extends Component {

  render (){

    let board
    if(this.props.singleplayer){
      board = (
        <div className = "singleplayer-gym">
          <WorkoutMat />
        </div>
      )
    }

    if(this.props.multiplayer){
      board = (
        <div className='multiplayer-gym'>
          <div className="player-one col-4">
            <WorkoutMat />
          </div>
          <div className="player-two col-4">
            <WorkoutMat />
          </div>
        </div>
      )
    }

    return (
      <div className="gym">
        <Scoreboard />
        <ExerciseSelector />
        {board}
        <WeightBench />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  multiplayer: state.players.multiplayer === true,
  singleplayer:state.players.singleplayer === true,
})

export default connect(mapStateToProps)(Gym);