/**
 * File: reducer-search-term.js
 */

// Imports
// -----------------------------------------------------------------------------
// Types
import { AUDIO } from '../actions/types';

// Reducer
// -----------------------------------------------------------------------------
const audioReducer = (state = null, action) => {
	// Otherwise check if action applies to this reducer.
	switch (action.type) {
		case AUDIO:
			return action.payload;

		default:
			return state;
	}
};

// Exports
// -----------------------------------------------------------------------------
export default audioReducer;
