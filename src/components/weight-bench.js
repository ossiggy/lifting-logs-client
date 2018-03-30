import React, { Component } from 'react';
import {connect} from 'react-redux';

import {addWeight, subWeight, addPlate, subPlate} from '../actions/weights'

import './css/weight-bench.css';

export class WeightBench extends Component{
  
  render(){

    if(this.props.adding){
      return(
        <div className="weight-bench col-12">
          <button 
          className="fo-five"
          onClick={() => {
            this.props.dispatch(addWeight(45))
            this.props.dispatch(addPlate(45))
            }}
          >
          <div className="little-circle">45x{this.props.foFive}</div>
          </button>
          <button 
          className="two-five"
          onClick={() => {
            this.props.dispatch(addWeight(25))
            this.props.dispatch(addPlate(25))
            }}
          >
          <div className="little-circle">25x{this.props.twoFive}</div>
          </button>
          <button 
          className="ten"
          onClick={() => {
            this.props.dispatch(addWeight(10))
            this.props.dispatch(addPlate(10))
            }}
          ><div className="little-circle">10x{this.props.ten}</div>
          </button>
          <button 
          className="five"
          onClick={() => {
            this.props.dispatch(addWeight(5))
            this.props.dispatch(addPlate(5))
            }}
          >
          <div className="little-circle">5x{this.props.five}</div>
          </button>
        </div>
      )
    }
    if(!this.props.adding){
      return(
        <div className="weight-bench col-12">
          <button 
          className="fo-five"
          onClick={() => {
            this.props.dispatch(subWeight(45))
            this.props.dispatch(subPlate(45))
            }}
          >
          <div className="little-circle">45x{this.props.foFive}</div>
          </button>
          <button 
          className="two-five"
          onClick={() => {
            this.props.dispatch(subWeight(25))
            this.props.dispatch(subPlate(25))
            }}
          >
          <div className="little-circle">25x{this.props.twoFive}</div>
          </button>
          <button 
          className="ten"
          onClick={() => {
            this.props.dispatch(subWeight(10))
            this.props.dispatch(subPlate(10))
            }}
          ><div className="little-circle">10x{this.props.ten}</div>
          </button>
          <button 
          className="five"
          onClick={() => {
            this.props.dispatch(subWeight(5))
            this.props.dispatch(subPlate(5))
            }}
          >
          <div className="little-circle">5x{this.props.five}</div>
          </button>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  weight: state.weight.weight,
  adding: state.weight.adding,
  foFive: state.weight.foFive,
  twoFive: state.weight.twoFive,
  ten: state.weight.ten,
  five: state.weight.five
})

export default connect(mapStateToProps)(WeightBench);