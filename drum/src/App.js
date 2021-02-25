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
                        <audio class="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"></audio>
                      </button>
                    </div>
                    <div className="drum-pad">
                      <button id="wAudio">
                        W
                        <audio class="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"></audio>
                      </button>
                    </div>
                    <div className="drum-pad">
                      <button id="eAudio">
                        E
                        <audio class="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"></audio>
                      </button>
                    </div>
                    <div className="drum-pad">
                      <button id="aAudio">
                        A
                        <audio class="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"></audio>
                      </button>
                    </div> <div className="drum-pad">
                      <button id="sAudio">
                        S
                        <audio class="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"></audio>
                      </button>
                    </div> <div className="drum-pad">
                      <button id="dAudio">
                        D
                        <audio class="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"></audio>
                      </button>
                    </div>
                    </div> <div className="drum-pad">
                      <button id="zAudio">
                        Z
                        <audio class="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"></audio>
                      </button>
                    </div>
                    </div> <div className="drum-pad">
                      <button id="xAudio">
                        X
                        <audio class="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"></audio>
                      </button>
                    </div>
                    <div className="drum-pad">
                      <button id="cAudio" onClick="play">
                        C
                        <audio class="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"></audio>
                      </button>
                    </div>
                </div>
              </div>
            </div>
          </div> 
        </div> 
    );
  } 
}