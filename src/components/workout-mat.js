import React from 'react';
import {connect} from 'react-redux';

export function WorkoutMat(props){
  return(
    <div className="workout-mat col-8 offset-2">
      <div className="exercise-type">
        
      </div>
    </div>
  )
}

export default connect()(WorkoutMat);