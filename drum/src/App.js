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
                  <div className="drum-pad">
                  <a 
                        class="button"
                        id="Q"
                        title="Q audio"
                        src="#"
                    >
                      Q
                    </a>
                    <a 
                        class="button"
                        id="W"
                        title="W audio"
                        src="#"
                    >
                      W
                    </a>
                    <a 
                        class="button"
                        id="E"
                        title="E audio"
                        src="#"
                    >
                      E
                    </a>
                    <a 
                        class="button"
                        id="A"
                        title="A audio"
                        src="#"
                    >
                      A
                    </a>
                    <a 
                        class="button"
                        id="S"
                        title="S audio"
                        src="#"
                    >
                      S
                    </a>
                    <a 
                        class="button"
                        id="D"
                        title="D audio"
                        src="#"
                    >
                      D
                    </a>
                    <a 
                        class="button"
                        id="Z"
                        title="Z audio"
                        src="#"
                    >
                      Z
                    </a>
                    <a 
                        class="button"
                        id="X"
                        title="X audio"
                        src="#"
                    >
                      X
                    </a>
                    <a 
                        class="button"
                        id="C"
                        title="C audio"
                        src="#"
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