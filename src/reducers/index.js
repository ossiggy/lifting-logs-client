import {combineReducers} from 'redux';
import {playersReducer} from './players';
import {exercisesReducer} from './exercises';
import {weightReducer} from './weights';

export default combineReducers({
  players: playersReducer,
  exercise: exercisesReducer,
  weight: weightReducer
})