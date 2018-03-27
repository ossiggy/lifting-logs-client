import * as actions from '../actions/weights';

const initialState = {
  adding: true,
  weight: 0
}

export const weightReducer = (state = initialState, action) => {
  if(action.type === actions.TOGGLE_ADD) {
    return Object.assign({}, state, {
      adding: !state.adding
    })
  }

  if(action.type === actions.ADD_WEIGHT) {
    return Object.assign({}, state, {
      weight: state.weight + action.weight
    })
  }

  if(action.type === actions.SUB_WEIGHT) {
    return Object.assign({}, state, {
      weight: state.weight - action.weight
    })
  }
  return state;
}