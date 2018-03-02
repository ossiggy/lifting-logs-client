import * as actions from '../actions/weights';

const initialState = {
  adding: true
}

export const weightReducer = (state = initialState, action) => {
  if(action.type === actions.TOGGLE_ADD) {
    return Object.assign({}, state, {
      adding: !state.adding
    })
  }
  return state;
}