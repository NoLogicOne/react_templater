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
        onKeywordsInputChanger} from "./model/logic.js";

const {log} = console;

class App extends Component {
  constructor(props){
    super(props);

    this.onKeywordsInputChange = this.onKeywordsInputChange.bind(this);
  }

  onKeywordsInputChange(keyword) {
    let data = onKeywordsInputChanger(this.props.data, keyword);
  }

  render() {
    let {data, //state object
         remarkWord, //bolding words
         fillImport, //fill import_area
         onKeywordChange, //edit keywords in phrases
         generateTable, //click the Mix button
         onTemplateChange} = this.props
    
    return (
      <div className="App">
        <img src={logo} 
             className="App-logo" 
             alt="logo" />
        <Keywords onInputChange={fillImport}
                  import_area={data.import_area}/>
        <Template template={data.template}
                  import_area={data.import_area}
                  generateTable={generateTable}
                  onChange={onTemplateChange} />
        <Table
          remarkWord={remarkWord}
          onKeywordChange={onKeywordChange}
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
  },
  remarkWord: (hash, word, based_template) => {
    dispatch(AC.remarkWord(hash, word, based_template))
  },
  onKeywordChange: (hash, value, b_template) => {
    dispatch(AC.keywordChange(hash, value, b_template))
  },
  fillImport: (value) => {
    dispatch(AC.fillImport(value))
  },
  generateTable: (input_area, template) => {
    dispatch(AC.generateTable(input_area, template))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
