import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Template from "./Template/Template.js";
import Table from "./Table/Table.js";


const data = {
  template: "this text #realy bold#",
  phrases: [
    {
      hash: "#phrase1",
      keyword: "not bold",
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
        }, {}
      ],
      light: 0,
      length: 0
    },
  ]
}

const remarker = (data, hash, word) => {
  let hashed = data.phrases
    .map(phrase => {
      if (phrase.hash === hash) {
        phrase.words = phrase.words.map(w => {
          return w.word === word 
            ? {...w, marker: !w.marker}
            : {...w};
        })
      }

      return phrase;
    })[0]

  let newPhrases = data.phrases.map(phrase => 
    phrase.hash === hash ? hashed : phrase
  )

  return {...data, phrases: newPhrases}
}

const templateChanger = (data, value) => {
  return {...data, template: value}
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data
    }

    this.remarkWord = this.remarkWord.bind(this);
    this.onTemplateChange = this.onTemplateChange.bind(this);
  }

  remarkWord(hash, word) {
    let data = remarker(this.state.data, hash, word);

    this.setState({
      data
    })
  }

  onTemplateChange(value) {
    let data = templateChanger(this.state.data, value);

    this.setState({
      data
    })
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Template template={this.state.data.template}
                  onChange={this.onTemplateChange} />
        <Table
          remarkWord={this.remarkWord}
          phrases={this.state.data.phrases}/>
      </div>
    );
  }
}

export default App;
