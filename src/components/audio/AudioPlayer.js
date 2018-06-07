import React, { Component } from 'react';
import Tone from 'tone';

class AudioPlayer extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.player = new Tone.Player({
      url: this.props.filename,
      loop: false,
      volume: -10,
    }).toMaster();
  }

  componentDidUpdate = prevProps => {
    if (prevProps.isPlaying !== this.props.isPlaying) {
      this.player.start();
    }
  };

  render() {
    return null;
  }
}

export default AudioPlayer;
