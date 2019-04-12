import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Word from "./Word/Word.js";


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
  }
}


class App extends Component {
  
  createWords() {
    return data.phrase.words.map((word, index) => (
      <Word key={index} 
            word={word.word}
            marker={word.marker}/> 
    ))
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        {this.createWords()}
      </div>
    );
  }
}

export default App;
