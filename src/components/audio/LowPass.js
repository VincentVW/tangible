import Tone from 'tone';
import React from 'react';
import PropTypes from 'prop-types';

function randomRange(min, max) {
  return min + (Math.random() * max - min);
}


class LowPass extends React.Component {
  static propTypes = {
    player: PropTypes.any.isRequired,
    knobValue: PropTypes.bool.isRequired,
  };

  componentWillMount() {
    this.lowpass = new Tone.LowpassCombFilter().toMaster();
    this.props.player.connect(this.lowpass);
    this.range = randomRange(0.02, 0.04);
  }

  componentDidUpdate() {
    this.lowpass.resonance.value = this.range * this.props.knobValue;
    this.lowpass.dampening.value = this.range * this.props.knobValue * 10000;
  }

  render() {
    return null;
  }
}

export default LowPass;
