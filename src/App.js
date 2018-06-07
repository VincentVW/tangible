import React, { Component } from 'react';
import AudioPlayer from './components/audio/AudioPlayer';

class App extends Component {

  render() {
    return (
      <div>
				<AudioPlayer wavFile="bass.wav" manipulationValue={this.state.arrayOfLayers[0].value} isPlaying={true} manipulationType="lowpass" />
				<AudioPlayer wavFile="bells.wav" manipulationValue={this.state.arrayOfLayers[1].value} isPlaying={true} manipulationType="lowpass" />
				<AudioPlayer wavFile="highhats.wav" manipulationValue={this.state.arrayOfLayers[2].value} isPlaying={true} manipulationType="lowpass" />
				<AudioPlayer wavFile="strings.wav" manipulationValue={this.state.arrayOfLayers[3].value} isPlaying={true} manipulationType="lowpass" />
				<AudioPlayer wavFile="woodblock.wav" manipulationValue={this.state.arrayOfLayers[4].value} isPlaying={true} manipulationType="lowpass" />
      </div>
    );
  }
}

export default App;
