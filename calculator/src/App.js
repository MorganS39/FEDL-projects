import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDisplay: ""
    };
  }

  render () {
    let calcface = "0"
    if (this.state.numbPress) {
      calcface = ${padNumber[this.state.numbPress]};
    }
  
    return (
      <div className="container">
        <div className="keypad">

        </div>
      </div>
    ); 
  }
}
