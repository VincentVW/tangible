import React, { Component } from 'react';
import AudioPlayer from './components/audio/AudioPlayer';
import Slider from './components/ui/Slider';

class App extends Component {
  state = {
    players: [
      {
        id: 0,
        manipulationIntensity: 0,
        manipulationType: 'lowpass',
        isPlaying: false,
        wavFile: 'bass.wav',
      },
      {
        id: 1,
        manipulationIntensity: 0,
        manipulationType: 'highpass',
        isPlaying: false,
        wavFile: 'bells.wav',
      },
      {
        id: 2,
        manipulationIntensity: 0,
        manipulationType: 'highpass',
        isPlaying: false,
        wavFile: 'highhats.wav',
      },
      {
        id: 3,
        manipulationIntensity: 0,
        manipulationType: 'highpass',
        isPlaying: false,
        wavFile: 'strings.wav',
      },
      {
        id: 4,
        manipulationIntensity: 0,
        manipulationType: 'lowpass',
        isPlaying: false,
        wavFile: 'woodblock.wav',
      },
    ],
  };

  setPlayerIntensity = (playerId, manipulationIntensity = 0) => {
    const players = this.state.players.map(player => {
      return player.id === playerId
        ? { ...player, manipulationIntensity }
        : player;
    });
    this.setState({ players });
  };

  switchPlayer = (playerId, isPlaying = false) => {
    const players = this.state.players.map(player => {
      return player.id === playerId ? { ...player, isPlaying } : player;
    });
    this.setState({ players });
  };

  // FOR TESTING PURPOSES
  // componentDidMount() {
  // this.setPlayerIntensity(0, 0.5);
  // this.switchPlayer(2, true);
  // }

  playAll = () => {
    const players = this.state.players.map(player => ({
      ...player,
      isPlaying: true,
    }));
    this.setState({ players });
  };

  render() {
    return (
      <div>
        <button onClick={this.playAll}>play</button>

        {this.state.players.map(player => (
          <AudioPlayer {...player} key={player.id} />
        ))}
        {this.state.players.map(player => (
          <Slider
            {...player}
            key={player.id}
            onUpdate={this.setPlayerIntensity}
          />
        ))}
      </div>
    );
  }
}

export default App;
