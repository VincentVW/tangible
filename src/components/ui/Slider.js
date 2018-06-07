import React from 'react';
import PropTypes from 'prop-types';
import './Slider.css';

const MIN_VALUE = 0;
const MAX_VALUE = 1;
const STEP_VALUE = 0.02;
const DELAY = 1000;
const TIME_FROM_MAX_TO_MIN = 5000;
const INTERVAL = TIME_FROM_MAX_TO_MIN * STEP_VALUE;

class Slider extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    manipulationIntensity: PropTypes.number.isRequired,
    onUpdate: PropTypes.func.isRequired,
  };

  numberFormat = new Intl.NumberFormat('en-EN', { minimumFractionDigits: 2 });
  interval = null;
  timeout = null;

  componentWillUnmount () {
    if (this.timeout) clearTimeout(this.timeout);
    if (this.interval) clearInterval(this.interval);
  }

  handleChange = e => {
    this.props.onUpdate(this.props.id, parseFloat(e.target.value));
    this.startIntervalWithDelay();
  }

  startIntervalWithDelay = () => {
    if (this.timeout) clearTimeout(this.timeout);
    if (this.interval) clearInterval(this.interval);

    this.timeout = setTimeout(() => {
      this.startInterval();
    }, DELAY);
  }

  startInterval = () => {
    this.interval = setInterval(() => {
      const { manipulationIntensity } = this.props;

      const newManipulationIntensity = (manipulationIntensity - STEP_VALUE >= 0)
        ? manipulationIntensity - STEP_VALUE
        : 0;

      this.props.onUpdate(this.props.id, newManipulationIntensity);
      
      if (newManipulationIntensity <= 0) clearInterval(this.interval);
    }, INTERVAL)
  }

  render() {
    return (
      <div className="slider">
        <span className="slider__id">
          { `#${this.props.id}` }
        </span>
        <input 
          className="slider__input"
          max={ MAX_VALUE } 
          min={ MIN_VALUE } 
          onChange={ this.handleChange }
          step={ STEP_VALUE }
          type="range" 
          value={ this.props.manipulationIntensity } 
        />
        <span className="slider__value">
          { this.numberFormat.format(this.props.manipulationIntensity) }
        </span>
      </div>
    )
  }
}

export default Slider;
