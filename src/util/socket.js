// Imports
// -----------------------------------------------------------------------------
// Libraries
import React, { Component } from 'react';
import openSocket from 'socket.io-client';

// Class
// -----------------------------------------------------------------------------
class IO extends Component {

	constructor(props) {
		super(props);

		this.socket = openSocket(`http://192.168.1.99:5000`);
		this.listen();
	}

	listen() {
		this.socket.on('a', this.props.onActive);
		this.socket.on('y', this.props.onSuccess);
		this.socket.on('n', this.props.onError);
	}

	render() {
		return <div></div>;
	}
}

// Exports
// -----------------------------------------------------------------------------
export default IO;



