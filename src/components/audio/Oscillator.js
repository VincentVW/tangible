import Tone from 'tone';
import React from 'react';
import PropTypes from 'prop-types';

function randomRange(min, max) {
  return min + (Math.random() * max - min);
}

class Oscillator extends React.Component {
  static propTypes = {
    isPlaying: PropTypes.bool.isRequired,
  };

  state = {
    frequencyReach: randomRange(400, 1000),
    increasingNumber: 0,
    increaseRange: randomRange(0.04, 0.13),
  };

  componentDidMount() {
    this.oscillator = new Tone.Oscillator({
      frequency: this.props.frequency,
      volume: -10,
    }).toMaster();
    this.doImperativeWork();
  }

  componentDidUpdate() {
    this.doImperativeWork();
  }

  doImperativeWork = () => {
    if (this.props.isPlaying) {
      this.oscillator.start();
    } else {
      this.oscillator.stop();
    }

    this.oscillator.frequency.value = this.props.frequency
  };

  render() {
    return null;
  }
}

export default Oscillator;
