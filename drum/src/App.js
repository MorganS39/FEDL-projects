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
                <h1>
                  Sample text
                </h1>

              </div>
            </div>
          </div>
        </div>
      </div>  
    );
  } 
}