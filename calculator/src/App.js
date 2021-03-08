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
    let calcface = "0"
    if (this.state.numbPress) {
      calcface = ${padNumber[this.state.numbPress]};
    }
  
    return (
      <div className="container">
        <div className="keypad">
          {/* Basic structure of numberpad 0-9 and = sign */}
          <div className="numberPad">
            <div id="equals">
              <a>=</a>
            </div>
            <div id="zero">
              <a>0</a>
            </div>
            <div id="one">
              <a>1</a>
            </div>
            <div id="two">
              <a>2</a>
            </div>
            <div id="three">
              <a>3</a>
            </div>
            <div id="four">
              <a>4</a>
            </div>
            <div id="five">
              <a>5</a>
            </div>
            <div id="six">
              <a>6</a>
            </div>
            <div id="seven">
              <a>7</a>
            </div>
            <div id="eight">
              <a>8</a>
            </div>
            <div id="nine">
              <a>9</a>
            </div>
          </div>
          <div className="mathOperators">
            <div id="add">
              <a>+</a>
            </div>
            <div id="subtract">
              <a>-</a>
            </div>
            <div id="multiply"> 
              <a>*</a>
            </div>
            <div id="divide">
              <a>/</a>
            </div>
          </div>
        </div>
      </div>
    ); 
  }
}
