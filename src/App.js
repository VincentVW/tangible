import React, { Component } from 'react';
import AudioPlayer from './components/audio/AudioPlayer';

class App extends Component {
  state = {
    players: [
      {
        id: 0,
        manipulationItensity: 0,
        manipulationType: 'lowpass',
        isPlaying: false,
        wavFile: 'bass.wav',
      },
      {
        id: 1,
        manipulationItensity: 0,
        manipulationType: 'lowpass',
        isPlaying: false,
        wavFile: 'bells.wav',
      },
      {
        id: 2,
        manipulationItensity: 0,
        manipulationType: 'lowpass',
        isPlaying: false,
        wavFile: 'highhats.wav',
      },
      {
        id: 3,
        manipulationItensity: 0,
        manipulationType: 'lowpass',
        isPlaying: false,
        wavFile: 'strings.wav',
      },
      {
        id: 4,
        manipulationItensity: 0,
        manipulationType: 'lowpass',
        isPlaying: false,
        wavFile: 'woodblock.wav',
      }
    ]
  }

  setPlayerIntensity = (playerId, intensity = 0) => {
    const players = this.state.players.map(player => {
      return (player.id === playerId)
        ? { ...player, intensity }
        : player;
    });
    this.setState({ players });
  }

  switchPlayer = (playerId, isPlaying = false) => {
    const players = this.state.players.map(player => {
      return (player.id === playerId)
        ? { ...player, isPlaying }
        : player;
    });
    this.setState({ players });
  }

  // FOR TESTING PURPOSES
  // componentDidMount () {
  //   this.setPlayerIntensity(2, 0.5);
  //   this.switchPlayer(2, true);
  // }

  render() {
    return (
      <div>
        { this.state.players.map(player => <AudioPlayer key={ player.id } { ...player } />) }
      </div>
    );
  }
}

export default App;
