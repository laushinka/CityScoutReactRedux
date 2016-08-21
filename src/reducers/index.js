import { combineReducers } from 'redux';
import searchReducer from './searchReducer'
import scoresReducer from './scoresReducer'
import preferencesReducer from './preferencesReducer'
import modalsReducer from './modalsReducer'

// Mapping of state
const rootReducer = combineReducers({
  address: searchReducer,
  preferences: preferencesReducer,
  scores: scoresReducer,
  modals: modalsReducer
});

export default rootReducer;
