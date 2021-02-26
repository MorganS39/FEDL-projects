import React from 'react';
import './style.css'

const URL = "https://s3.amazonaws.com/freecodecamp/drums/";

const SOUNDFILE_NAMES_AND_KEYS = {
  Q : "Heater-1",
  W : "Kick_n_Hat",
  E : "Chord_1",
  A : "Heater-6",
  S : "punchy_kick_1", 
  D : "Brk_Snr",
  Z : "Dry_Ohh",
  X : "Heater-3",
  C : "Dsc_Oh"
}

// Keycodes to add key binds
const KEYCODES = {
  81 : 'Q',
  87 : 'W',
  69 : 'E',
  65 : 'A',
  83 : 'S',
  68 : 'D',
  90 : 'Z',
  88 : 'X',
  67 : 'C'
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSoundId: ""
    };
      this.handleClickPlay = this.handleClickPlay.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.playSound = this.playSound.bind(this);
    }
    
   componentDidMount() {
     document.addEventListener("keydown", this.handleKeyPress);
    }
    
    componentWillUnmount() {
  document.removeEventListener("keydown", this.handleKeyPress);
    }
    
    playSound(){
      document.getElementById(this.state.currentSoundId).play();
    }

    handleKeyPress(event){
      
      const key = KEYCODES[event.keyCode];
      
      const isValidKey = Object.keys(SOUNDFILE_NAMES_AND_KEYS).includes(key);
      this.setState( { currentSoundId: (isValidKey)? key : '' } );
    }
        
    handleClickPlay(event){
      this.setState( { currentSoundId: event.target.children[0].id } );
    }
    
    render() {
      let message = 'No sound';
      if (this.state.currentSoundId) {
        message = `Sound: ${SOUNDFILE_NAMES_AND_KEYS[this.state.currentSoundId]}`;
        this.playSound();  
      }
      
      return (
        <div id="drum-machine">
          <Display currentSoundText={message}/>
          <div id="container">
            {
              Object.keys(SOUNDFILE_NAMES_AND_KEYS).map((key) => {
                return (
                  <DrumPad
                    name={key} 
                    soundFile={URL + SOUNDFILE_NAMES_AND_KEYS[key] + ".mp3"}
                    clickplayer={this.handleClickPlay}
                    key={key}
                  />
                )
              })
            }
          </div>
        </div>
      );
    }
  }
  
  function Display(props){
      return (
      <div id="display">
        {props.currentSoundText}
      </div>
    )
  }
  
  function DrumPad(props) {
    return (
      <div className="drum-pad" id={props.soundFile} onClick={props.clickplayer}>
        {props.name}
        <audio className="clip" id={props.name} src={props.soundFile} type="audio/mp3" ></audio>
      </div>
    )
  }