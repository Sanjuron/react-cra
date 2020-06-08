import React, { Component } from 'react';
import Quizz from "./Quizz";

class App extends Component {
  state = {}

  render() { 
    return ( 
      <div className="App">
        <h1>Bienvenue sur mon site!!!</h1>
          <Quizz />

      </div>
     );
  }
}
 
export default App;