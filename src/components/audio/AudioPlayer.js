import React, { Component } from 'react';
import Tone from 'tone';
import LowPass from './LowPass';
import Reverb from './Reverb';
import Volume from "./Volume";

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
    // return <Volume player={this.player} knobValue={this.props.manipulationIntensity}/>

    switch (this.props.manipulationType) {
      case 'lowpass':
        return (
          <LowPass
            player={this.player}
            knobValue={this.props.manipulationIntensity}
          />
        );
      case 'reverb':
        return (
          <Reverb
            player={this.player}
            knobValue={this.props.manipulationIntensity}
          />
        )
      case 'volume':
        return (
          <Volume
            player={this.player}
            knobValue={this.props.manipulationIntensity}
          />
        )
      default:
        return null;
    }
  }
}

export default AudioPlayer;
