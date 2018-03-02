import {combineReducers} from 'redux';
import {playersReducer} from './players';
import {exercisesReducer} from './exercises';

export default combineReducers({
  players: playersReducer,
  exercise: exercisesReducer
})