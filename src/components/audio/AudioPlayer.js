import React, { Component } from 'react';
import Tone from 'tone';
import LowPass from './LowPass';

class AudioPlayer extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.player = new Tone.Player({
      url: this.props.wavFile,
      loop: true,
      volume: -10,
    }).toMaster();
  }

  componentDidUpdate = prevProps => {
    if (prevProps.isPlaying !== this.props.isPlaying) {
      this.player.start();
    }
  };

  render() {
    switch (this.props.manipulationType) {
      case 'lowpass':
        return (
          <LowPass
            player={this.player}
            knobValue={this.props.manipulationItensity}
          />
        );
      default:
        return null;
    }
  }
}

export default AudioPlayer;
