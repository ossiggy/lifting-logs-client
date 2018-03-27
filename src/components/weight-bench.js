import React, { Component } from 'react';
import {connect} from 'react-redux';

import {addWeight, subWeight} from '../actions/weights'

import './css/weight-bench.css';

export class WeightBench extends Component{
  render(){
    if(this.props.adding){
      return(
        <div className="weight-bench col-12">
          <button 
          className="fo-five"
          onClick={() => this.props.dispatch(addWeight(45))}
          >
          <div className="little-circle">45</div>
          </button>
          <button 
          className="two-five"
          onClick={() => this.props.dispatch(addWeight(25))}
          >
          <div className="little-circle">25</div>
          </button>
          <button 
          className="ten"
          onClick={() => this.props.dispatch(addWeight(10))}
          ><div className="little-circle">10</div>
          </button>
          <button 
          className="five"
          onClick={() => this.props.dispatch(addWeight(5))}
          >
          <div className="little-circle">5</div>
          </button>
        </div>
      )
    }
    if(!this.props.adding){
      return(
        <div className="weight-bench col-12">
          <button 
          className="fo-five"
          onClick={() => this.props.dispatch(subWeight(45))}
          >
          <div className="little-circle">45</div>
          </button>
          <button 
          className="two-five"
          onClick={() => this.props.dispatch(subWeight(25))}
          >
          <div className="little-circle">25</div>
          </button>
          <button 
          className="ten"
          onClick={() => this.props.dispatch(subWeight(10))}
          ><div className="little-circle">10</div>
          </button>
          <button 
          className="five"
          onClick={() => this.props.dispatch(subWeight(5))}
          >
          <div className="little-circle">5</div>
          </button>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
  weight: state.weight.weight,
  adding: state.weight.adding
  }
}

export default connect(mapStateToProps)(WeightBench);