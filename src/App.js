import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Template from "./Template/Template.js";
import Table from "./Table/Table.js";
import Keywords from "./Keywords/Keywords.js";

import {data, remarker, templateChanger} from "./model/logic.js";


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
        <Keywords {...this.state.data.keywords}/>
        <Table
          remarkWord={this.remarkWord}
          phrases={this.state.data.phrases}/>
      </div>
    );
  }
}

export default App;
