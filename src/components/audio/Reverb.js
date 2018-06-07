import Tone from 'tone';
import React from 'react';
import PropTypes from 'prop-types';

class Reverb extends React.Component {
  static propTypes = {
    player: PropTypes.any.isRequired,
    reverbOn: PropTypes.bool.isRequired,
  };

  componentWillMount() {
    this.reverb = new Tone.JCReverb(0.2).toMaster();
  }

  componentDidUpdate(prevProps) {
    if (this.props.reverbOn !== prevProps.reverbOn) {
      if (this.props.reverbOn) {
        this.props.player.connect(this.reverb);
      } else {
        this.props.player.disconnect(this.reverb);
      }
    }
  }

  render() {
    return null;
  }
}

export default Reverb;
