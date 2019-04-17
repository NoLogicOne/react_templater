import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Template from "./Template/Template.js";
import Table from "./Table/Table.js";
import Keywords from "./Keywords/Keywords.js";

import {data, 
        remarker, 
        templateChanger,
        onKeywordsStateChanger, 
        onKeywordsInputChanger} from "./model/logic.js";

const {log} = console;


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data
    }

    this.remarkWord = this.remarkWord.bind(this);
    this.onTemplateChange = this.onTemplateChange.bind(this);
    this.onKeywordsStateChange = this.onKeywordsStateChange.bind(this);
    this.onKeywordsInputChange = this.onKeywordsInputChange.bind(this);
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

  onKeywordsInputChange(keyword) {
    let data = onKeywordsInputChanger(this.state.data, keyword);

    this.setState({
      data
    })
  }

  onKeywordsStateChange(e){
    let data = onKeywordsStateChanger(this.state.data);
    log(data);
    this.setState({data});
  }

  render() {
    return (
      <div className="App">
        <img src={logo} 
             className="App-logo" 
             alt="logo" />
        <button className="templater__state_btn"
             onClick={this.onKeywordsStateChange}>
             Change state
        </button>
        <Template template={this.state.data.template}
                  onChange={this.onTemplateChange} />
        <Keywords onInputChange={this.onKeywordsInputChange}
                  {...this.state.data.keywords}/>
        <Table
          remarkWord={this.remarkWord}
          phrases={this.state.data.phrases}/>
      </div>
    );
  }
}

export default App;
