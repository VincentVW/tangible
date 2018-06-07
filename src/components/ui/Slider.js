import React from 'react';
import PropTypes from 'prop-types';
import './Slider.css';

class Slider extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    manipulationIntensity: PropTypes.number.isRequired,
    onUpdate: PropTypes.func.isRequired,
  };

  numberFormat = new Intl.NumberFormat('en-EN', { minimumFractionDigits: 2 });

  handleChange = e => {
    this.props.onUpdate(this.props.id, parseFloat(e.target.value));
  }

  render() {
    return (
      <div className="slider">
        <span className="slider__id">
          { `#${this.props.id}` }
        </span>
        <input 
          className="slider__input"
          max="1" 
          min="0" 
          onChange={ this.handleChange }
          step="0.05"
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
