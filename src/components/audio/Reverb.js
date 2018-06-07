import Tone from 'tone';
import React from 'react';
import PropTypes from 'prop-types';

class Reverb extends React.Component {
  static propTypes = {
    player: PropTypes.any.isRequired,
    knobValue: PropTypes.number.isRequired,
  };

  state = {
    connected: false,
  };

  componentWillMount() {
    this.reverb = new Tone.JCReverb(0).toMaster();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.knobValue !== prevProps.knobValue) {
      if (this.props.knobValue !== 0) {
        this.reverb.roomSize.value = this.props.knobValue;
      }
      if (this.props.knobValue !== 0 && !this.state.connected) {
        this.setState({ connected: true });
        this.props.player.connect(this.reverb);
      } else {
        try {
          this.props.player.disconnect(this.reverb);
        } catch (error) {}

        this.setState({ connected: false });
      }
    }
  }

  render() {
    return null;
  }
}

export default Reverb;
