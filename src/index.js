// Imports
// -----------------------------------------------------------------------------
// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// Reducers
import reducers from './reducers';
// Components
import App from './App';
// Workers
import registerServiceWorker from './registerServiceWorker';
// Styling
import './index.css';

// Setup middleware
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
