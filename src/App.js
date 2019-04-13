import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Phrase from "./Phrase/Phrase.js";


const data = {
  phrase: {
    hash: "#phrase1",
    words: [
      {
        word: "not bold",
        marker: false
      },
      {
        word: "realy bold",
        marker: true
      }
    ],
    light: 0,
    length: 0
  },
  keyword: "bold"
}


class App extends Component {
  

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Phrase phrase={data.phrase}/>
      </div>
    );
  }
}

export default App;
