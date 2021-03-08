import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDisplay: ""
    };
  }

  render () {
    // This will show 0 on start and enter numbers on the display as they're clicked
    if (this.state.numbPress) {
    }
  
    return (
      <div className="container">
        <div className="keypad" col="3" row="3">
          {/* Basic structure of numberpad 0-9 and = sign */}
          <div className="numberPad">
            <button id="equals">=</button>
            <button id="zero">0</button>
            <button id="one">1</button>
            <button id="two">2</button>
            <button id="three">3</button>
            <button id="four">4</button>
            <button id="five">5</button>
            <button id="six">6</button>
            <button id="seven">7</button>
            <button id="eight">8</button>
            <button id="nine">9</button>
          </div>
          <div className="mathOperators">
            <button id="add">+</button>
            <button id="subtract">-</button>
            <button id="multiply">*</button>
            <button id="divide">/</button>
          </div>
        </div>
      </div>
    ); 
  }
}
