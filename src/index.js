import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'

import * as reducers from "./model/reducer.js"
import {data} from "./model/data/initialState.js"
import * as Creators from "./model/actions/phraseActions.js"

import App from './App'
import * as serviceWorker from './serviceWorker'

import './index.css'

const reducer = combineReducers(reducers, data)

const store = createStore(reducer)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
// serviceWorker.unregister();
