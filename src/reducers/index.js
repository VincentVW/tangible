// Imports
// -----------------------------------------------------------------------------
// Libraries
import { combineReducers } from 'redux';
// Reducers
import audioReducer from './reducer-audio';


// Create root reducer
// -----------------------------------------------------------------------------
const rootReducer = combineReducers({
	audio: audioReducer
});

// Exports
// -----------------------------------------------------------------------------
export default rootReducer;
