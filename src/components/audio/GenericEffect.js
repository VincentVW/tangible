import React from 'react';
import PropTypes from 'prop-types';

class KnobEffect extends React.Component {
  static propTypes = {
    initialFunction: PropTypes.func.isRequired,
    player: PropTypes.any.isRequired,
    range: PropTypes.number.isRequired,
    parameter: PropTypes.string.isRequired,
    knobValue: PropTypes.number.isRequired,
    useValue: PropTypes.bool,
  };

  static defaultProps = {
    useValue: true,
  };

  componentWillMount() {
    this.effect = this.props.initialFunction();
    this.props.player.connect(this.effect);
  }

  componentDidUpdate() {
    console.log(
      `${this.props.parameter}: ${this.props.range * this.props.knobValue}`
    );
    if (this.props.useValue) {
      console.log(
        `${this.props.parameter} pre: ${this.effect[this.props.parameter].value}`
      );
      this.effect[this.props.parameter].value =
        this.props.range * this.props.knobValue;
    } else {
      console.log(
        `${this.props.parameter} pre: ${this.effect[this.props.parameter]}`
      );
      this.effect[this.props.parameter] =
        this.props.range * this.props.knobValue;
    }
  }

  render() {
    return null;
  }
}

export default KnobEffect;
