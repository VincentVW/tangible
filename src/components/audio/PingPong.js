import Tone from 'tone';
import React from 'react';
import PropTypes from 'prop-types';

class PingPong extends React.Component {
  static propTypes = {
    player: PropTypes.any.isRequired,
    pingpongOn: PropTypes.bool.isRequired
  }

  componentWillMount() {
    this.pingPong = new Tone.PingPongDelay("4n", 0.2).toMaster();
  }

  componentDidUpdate(prevProps) {
    if(this.props.pingpongOn !== prevProps.pingpongOn){
      if(this.props.pingpongOn){
        this.props.player.connect(this.pingPong);
      } else {
        this.props.player.disconnect(this.pingPong);
      }
    }
  }

  render() {
    return null;
  }
}

export default PingPong;
