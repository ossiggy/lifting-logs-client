import * as actions from '../actions/players';

const initialState = {
  singleplayer: null
}

export const playersReducer = (state=initialState, action) => {
  if(action.type === actions.SET_MULTIPLAYER_MODE) {
    console.log('setting multiplayer mode')
    return Object.assign({}, state, {
      singleplayer: false
    });
  }

  if(action.type === actions.SET_SINGLEPLAYER_MODE) {
    console.log('setting singleplayer mode')
    return Object.assign({}, state, {
      singleplayer: true
    });
  }

  if(action.type === actions.NO_PLAYERS) {
    return Object.assign({}, state, {
      singleplayer: null
    })
  }
  return state;
};