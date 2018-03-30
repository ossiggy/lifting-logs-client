import * as actions from '../actions/weights';

const initialState = {
  adding: true,
  weight: 0,
  foFive: 0,
  twoFive: 0,
  ten: 0,
  five: 0
}

export const weightReducer = (state = initialState, action) => {
  if(action.type === actions.TOGGLE_ADD) {
    return Object.assign({}, state, {
      adding: !state.adding
    })
  }

  if(action.type === actions.ADD_WEIGHT) {
    return Object.assign({}, state, {
      weight: state.weight + action.weight * 2
    })
  }

  if(action.type === actions.SUB_WEIGHT) {
    if(state.weight>0){
      return Object.assign({}, state, {
        weight: state.weight - action.weight * 2
      })
    }
  }

  if(action.type === actions.ADD_PLATE) {
    if(action.plate === 45){
      return Object.assign({}, state, {
        foFive: state.foFive+2
      })
    }
    if(action.plate === 25){
      return Object.assign({}, state, {
        twoFive: state.twoFive+2
      })
    }
    if(action.plate === 10){
      return Object.assign({}, state, {
        ten: state.ten+2
      })
    }
    if(action.plate === 5){
      return Object.assign({}, state, {
        five: state.five+2
      })
    }
  }

  if(action.type === actions.SUB_PLATE) {
    if(action.plate === 45&&state.foFive>0){
      return Object.assign({}, state, {
        foFive: state.foFive-2
      })
    }
    if(action.plate === 25&&state.twoFive>0){
      return Object.assign({}, state, {
        twoFive: state.twoFive-2
      })
    }
    if(action.plate === 10&&state.ten>0){
      return Object.assign({}, state, {
        ten: state.ten-2
      })
    }
    if(action.plate === 5&&state.five>0){
      return Object.assign({}, state, {
        five: state.five-2
      })
    }
  }

  if(action.type === actions.RESET){
    return Object.assign({}, state, {
      weight: 0,
      foFive: 0,
      twoFive: 0,
      ten: 0,
      five: 0
    })
  }
  return state;
}