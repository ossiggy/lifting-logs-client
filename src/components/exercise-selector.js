import React, { Component } from 'react';
import {connect} from 'react-redux';
import {handleExerciseChange, toggleAdd} from '../actions';

import './css/exercise-selector.css';

const data = require('../workout-list.json')

export class ExerciseSelector extends Component{

  render(){

    let lifts;
    let toggleButton;

    if(this.props.adding){
    toggleButton = (
      <button 
      type="button" 
      className="adding"
      id="toggle" 
      onClick={()=> this.props.dispatch(toggleAdd())}>Adding</button>
    )
  }

  if(!this.props.adding){
    toggleButton = (
      <button 
      type="button" 
      className="subbing"
      id="toggle" 
      onClick={()=>this.props.dispatch(toggleAdd())}>Subbing</button>
    )
  }

    if(this.props.exercise){
      lifts = data[this.props.exercise].map((lift, i) => {
        return <option key={i} value={lift}>{lift}</option>;
      })
    };

    return(
      <div className="select-banner col-12">
        <select className="muscle-group" 
          onChange={(event)=>{
            let {value} = event.target;
            this.props.dispatch(handleExerciseChange(value));
          }
        }>
        <option value="" className="placeholder">Select Group</option>
        <option value="legs">Legs</option>
        <option value="back">Back</option>
        <option value="chest">Chest</option>
        <option value="core">Core</option>
        <option value="arms">Arms</option>
        <option value="cardio">Cardio</option>
        </select>
        <select className="lift" onChange={(event)=>{
          let {value} = event.target;
          console.log(value)
        }}>
        <option value="" className="placeholder">Select Lift</option>
          {lifts}
        </select>
        {toggleButton}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
   return { 
    exercise: state.exercise.exercise,
    adding: state.weight.adding
   }
}

export default connect(mapStateToProps)(ExerciseSelector);