import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drum: "",
    };
  }

render() {

  function qPlay(){
    var qsound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3");
    qsound.autoplay = false;
    qsound.play();
  }
  function wPlay(){
    var qsound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3");
    qsound.autoplay = false;
    qsound.play();
  }
  function ePlay(){
    var qsound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3");
    qsound.autoplay = false;
    qsound.play();
  }
  function aPlay(){
    var qsound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3");
    qsound.autoplay = false;
    qsound.play();
  }
  function sPlay(){
    var qsound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3");
    qsound.autoplay = false;
    qsound.play();
  }
  function dPlay(){
    var qsound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3");
    qsound.autoplay = false;
    qsound.play();
  }
  function zPlay(){
    var qsound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3");
    qsound.autoplay = false;
    qsound.play();
  }
  function xPlay(){
    var qsound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3");
    qsound.autoplay = false;
    qsound.play();
  }
  function cPlay(){
    var qsound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3");
    qsound.autoplay = false;
    qsound.play();
  }
    
  
  return (
      <div id="drum-machine">
        <div className="App">
          <div className="container">
            <div className="row mt-4">
              <div className="col text-center">
                <div id="display">
                  <h1>
                    Drum Machine
                  </h1>
                  <div className="keypad">
                    <button 
                      className="drum-pad" 
                      id="qAudio" 
                      type="button" 
                      value="sound" 
                      onClick={qPlay}>
                      <audio 
                        class="clip" 
                        id="Q" 
                        src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
                      ></audio>
                    Q
                    </button>
                    <button 
                      className="drum-pad" 
                      id="wAudio"
                      type="button" 
                      value="sound" 
                      onClick={wPlay}>
                      <audio 
                        class="clip" 
                        id="W" 
                        src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
                      ></audio>
                    W
                    </button>
                    <button 
                      className="drum-pad" 
                      id="eAudio"
                      type="button" 
                      value="sound" 
                      onClick={ePlay}>
                      <audio 
                        class="clip" 
                        id="E" 
                        src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
                      ></audio>
                    E
                    </button>
                    <button 
                      className="drum-pad" 
                      id="aAudio"
                      type="button" 
                      value="sound" 
                      onClick={aPlay}>
                      <audio 
                        class="clip" 
                        id="A" 
                        src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
                      ></audio>
                    A
                    </button>
                    <button 
                      className="drum-pad" 
                      id="sAudio"
                      type="button" 
                      value="sound" 
                      onClick={sPlay}>
                      <audio 
                        class="clip" 
                        id="S" 
                        src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
                      ></audio>
                    S
                    </button>
                    <button 
                      className="drum-pad" 
                      id="dAudio"
                      type="button" 
                      value="sound" 
                      onClick={dPlay}>
                      <audio 
                        class="clip" 
                        id="D" 
                        src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
                      ></audio>
                    D
                    </button>
                    <button 
                      className="drum-pad" 
                      id="zAudio"
                      type="button" 
                      value="sound" 
                      onClick={zPlay}>
                      <audio 
                        class="clip" 
                        id="Z" 
                        src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
                      ></audio>
                    Z
                    </button>
                    <button 
                      className="drum-pad" 
                      id="xAudio"
                      type="button" 
                      value="sound" 
                      onClick={xPlay}>
                      <audio 
                        class="clip" 
                        id="X" 
                        src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
                      ></audio>
                    X
                    </button>
                    <button 
                      className="drum-pad" 
                      id="cAudio" 
                      type="button" 
                      value="sound" 
                      onClick={cPlay}>
                      <audio 
                        class="clip" 
                        id="C" 
                        src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
                      ></audio>
                    C
                    </button>
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