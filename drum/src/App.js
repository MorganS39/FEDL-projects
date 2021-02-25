import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drum: "",
    };
  }


render() {

  return (
      <div id="drum-machine">
        <div className="App">
          <div className="container">
            <div className="row mt-4">
              <div className="col text-center">
                <div id="display">
                  <h1>
                    Sample text
                  </h1>
                  <div className="keypad">
                    <div className="drum-pad">
                      <button id="qAudio">
                        Q
                        <audio class="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3">Q</audio>
                      </button>
                    </div>
                    <div className="drum-pad">
                      <button id="wAudio">
                        W
                        <audio class="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3">W</audio>
                      </button>
                    </div>
                    <div className="drum-pad">
                      <button id="eAudio">
                        E
                        <audio class="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3">E</audio>
                      </button>
                    </div>
                    <a 
                        class="drum-pad"
                        id="A"
                        title="A audio"
                        src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
                    >
                      A
                    </a>
                    <a 
                        class="drum-pad"
                        id="S"
                        title="S audio"
                        src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
                    >
                      S
                    </a>
                    <a 
                        class="drum-pad"
                        id="D"
                        title="D audio"
                        src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
                    >
                      D
                    </a>
                    <a 
                        class="drum-pad"
                        id="Z"
                        title="Z audio"
                        src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
                    >
                      Z
                    </a>
                    <a 
                        class="drum-pad"
                        id="X"
                        title="X audio"
                        src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
                    >
                      X
                    </a>
                    <a 
                        class="drum-pad"
                        id="C"
                        title="C audio"
                        src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
                    >
                      C
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    );
  } 
}