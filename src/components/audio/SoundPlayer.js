import React, { Component } from 'react';
import Tone from 'tone';
// import Oscillator from './Oscillator';
import Reverb from './Reverb';
import PingPong from './PingPong';
// import LowPass from './components/audio/LowPass';
import GenericEffect from './GenericEffect';

import { Knob } from 'react-rotary-knob';


function randomRange(min, max) {
  return min + (Math.random() * max - min);
}


class SoundPlayer extends Component {
  state = {
    knob1: 0,
    knob2: 0,
    knob3: 0,
    testButton: false,
    ringButton: false,
    play: false,
    playTest: 0,
    reverbOn: false,
    pingpongOn: false
  };

  constructor(props) {
    super(props);

    this.player = new Tone.Player({
      url: this.props.soundFilename,
      loop: false,
      volume: -10
    }).toMaster();
  }

  handleKnob1Change = val => {
    this.setState({ knob1: val });
  };
  handleKnob2Change = val => {
    this.setState({ knob2: val });
  };
  handleKnob3Change = val => {
    this.setState({ knob3: val });
  };

  handlePlayClick = () => {
    this.player.start();
  };

  toggleReverb = val => { this.setState({ reverbOn: !this.state.reverbOn }); };
  togglePingpong = val => { this.setState({ pingpongOn: !this.state.pingpongOn }); };

  componentDidUpdate = (prevProps) => {
    if(prevProps.soundFilename !== this.props.soundFilename){
      this.player.load(this.props.soundFilename, () => { this.player.start() });
    }

    if(prevProps.play !== this.props.play){
      this.player.start();
    }
  }

  render() {
    return (
      <div
        className="App"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Knob
          value={this.state.knob1}
          onChange={this.handleKnob1Change}
          min={0}
          max={100}
        />
        <Knob
          value={this.state.knob2}
          onChange={this.handleKnob2Change}
          min={0}
          max={100}
        />
        <Knob
          value={this.state.knob3}
          onChange={this.handleKnob3Change}
          min={0}
          max={100}
        />

        <GenericEffect
          initialFunction={() => { return new Tone.FeedbackDelay("8n", 0).toMaster(); }}
          player={this.player}
          range={randomRange(0, 0.005)}
          parameter="feedback"
          knobValue={this.state.knob2}
        />

        <GenericEffect
          initialFunction={() => { return new Tone.PitchShift(0).toMaster(); }}
          player={this.player}
          range={randomRange(0, 10)}
          parameter="pitch"
          useValue={false}
          knobValue={this.state.knob1}
        />

        <GenericEffect
          initialFunction={() => { return new Tone.LowpassCombFilter().toMaster(); }}
          player={this.player}
          range={randomRange(3000, 1000)}
          parameter="dampening"
          useValue={true}
          knobValue={this.state.knob3}
        />
{/*
        <GenericEffect
          initialFunction={() => { return new Tone.BitCrusher({bits: 1, wet: 0}).toMaster(); }}
          player={this.player}
          range={randomRange(0.002, 0.006)}
          parameter="wet"
          useValue={true}
          knobValue={this.state.knob3}
        /> */}

        <GenericEffect
          initialFunction={() => { return new Tone.FeedbackEffect({feedback: 0, wet: 1}).toMaster(); }}
          player={this.player}
          range={randomRange(100, 120)}
          parameter="feedback"
          useValue={true}
          knobValue={this.state.knob3}
        />

        <GenericEffect
          initialFunction={() => { return new Tone.Chorus(999, 30, 0.3).toMaster(); }}
          player={this.player}
          range={randomRange(2000, 2010)}
          parameter="frequency"
          useValue={true}
          knobValue={this.state.knob2}
        />


{/*
        <GenericEffect
          initialFunction={() => { return new Tone.Phaser({
	"frequency" : 15,
	"octaves" : 5,
	"baseFrequency" : 1000
}).toMaster(); }}
          player={this.player}
          range={randomRange(800, 1000)}
          parameter="frequency"
          useValue={true}
          knobValue={this.state.knob1}
        /> */}

        <button onClick={this.togglePingpong}>{this.state.pingpongOn ? 'on' : 'off'}</button>
        <PingPong player={this.player} pingpongOn={this.state.pingpongOn} />

        <button onClick={this.toggleReverb}>{this.state.reverbOn ? 'on' : 'off'}</button>
        <Reverb player={this.player} reverbOn={this.state.reverbOn} />

      </div>
    );
  }
}

export default SoundPlayer;
