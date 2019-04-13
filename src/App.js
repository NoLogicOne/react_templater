import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Phrases from "./Phrase/Phrases.js";


const data = {
  template: "this text #realy bold#",
  keywords: [
    "not bold",
    "realy realy bold",
    "so long fucking bold as Greate Chineese Wall - longest"
  ], 
  phrases: [
    {
      hash: "#phrase1",
      keyword: "not bold",
      value: "this text not bold",
      words: [
        {
          word: "this",
          marker: false
        },
        {
          word: "text",
          marker: true
        },
        {
          word: "not",
          marker: true
        },
        {
          word: "bold",
          marker: true
        }
      ],
      light: 0,
      length: 0
    },

  ]
}


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Phrases phrases={data.phrases}/>
      </div>
    );
  }
}

export default App;
