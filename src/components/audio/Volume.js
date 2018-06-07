import Tone from 'tone';
import React from 'react';
import PropTypes from 'prop-types';

function randomRange(min, max) {
  return min + (Math.random() * max - min);
}


class Volume extends React.Component {
  static propTypes = {
    player: PropTypes.any.isRequired,
    knobValue: PropTypes.number.isRequired,
  };

  componentWillMount() {
    this.volume = new Tone.Volume(0).toMaster();
    this.props.player.connect(this.volume);
    // this.props.player.chain(this.volume, Tone.Master());
    // this.range = randomRange(0.02, 0.04);
  }

  componentDidUpdate() {
    // this.props.player.setVolume(1 - this.props.knobValue);
    this.volume.volume.value = this.props.knobValue * -25;
    // this.volume.mute = this.props.knobValue > 0.5;
  }

  render() {
    return null;
  }
}

export default Volume;
