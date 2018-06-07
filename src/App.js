import React, { Component } from 'react';
import './App.css';

import DoorBell from './components/doorbell/doorbell';
import Visual from './components/visual/visual';
import "./../node_modules/video-react/dist/video-react.css";

class App extends Component {

	constructor() {
		super();
	}
 
  render() {
    return (
      <div className="App" style={{display: 'flex', justifyContent: 'center'}}>

        <Visual />

		<DoorBell />
      </div>
    );
  }
}

export default App;
