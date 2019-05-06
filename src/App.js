import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Template from "./Template/Template.js";
import Table from "./Table/Table.js";
import Keywords from "./Keywords/Keywords.js";

import * as AC from "./model/actions/phraseActions.js"

import {data, 
        templateChanger,
        onKeywordsStateChanger, 
        onKeywordsInputChanger} from "./model/logic.js";

const {log} = console;


class App extends Component {
  constructor(props){
    super(props);

    // this.state = {
    //   data
    // }
    // this.remarkWord = this.remarkWord.bind(this);
    // this.onTemplateChange = this.onTemplateChange.bind(this);
    this.onKeywordsInputChange = this.onKeywordsInputChange.bind(this);
  }

  // remarkWord(hash, word) {
  //   let data = remarker(this.state.data, hash, word);

  //   this.setState({
  //     data
  //   })
  // }

  // onTemplateChange = (value) => {
  //   this.props.onTemplateChange(value)
  // }

  onKeywordsInputChange(keyword) {
    let data = onKeywordsInputChanger(this.props.data, keyword);

    // this.setState({
    //   data
    // })
  }

  render() {
    let {data} = this.props
    return (
      <div className="App">
        <img src={logo} 
             className="App-logo" 
             alt="logo" />
        <Keywords onInputChange={this.onKeywordsInputChange}
                  import_area={data.import_area}/>
        <Template template={data.template}
                  onChange={this.props.onTemplateChange} />
        <Table
          // remarkWord={this.remarkWord}
          remarkWord={e=>e}
          phrases={data.phrases}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state
})

const mapDispatchToProps = dispatch => ({
  onTemplateChange: (value) => {
    dispatch(AC.editTemplate(value))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
