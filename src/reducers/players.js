import * as actions from '../actions/players';

const initialState = {
  singleplayer: false,
  multiplayer: false
}

export const playersReducer = (state=initialState, action) => {
  if(action.type === actions.SET_MULTIPLAYER_MODE) {
    console.log('setting multiplayer mode')
    return Object.assign({}, state, {
      singleplayer: false,
      multiplayer: true
    });
  }

  if(action.type === actions.SET_SINGLEPLAYER_MODE) {
    console.log('setting singleplayer mode')
    return Object.assign({}, state, {
      singleplayer: true,
      multiplayer: false
    });
  }

  if(action.type === actions.NO_PLAYERS) {
    return Object.assign({}, state, {
      singleplayer: false,
      multiplayer: false
    })
  }
  return state;
};