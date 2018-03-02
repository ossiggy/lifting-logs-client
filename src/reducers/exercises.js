import * as actions from '../actions/exercises';

const initialState = {
  exercise: null
};

export const exercisesReducer = (state=initialState, action) => {
  if(action.type === actions.HANDLE_EXERCISE_CHANGE){
    return Object.assign({}, state, {
      exercise: action.exercise
    })
  }
  return state;
};