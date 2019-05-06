import {data} from "./data/initialState.js"
import * as types from "./constants/ActionTypes.js" 

export const phrases = (state = data.phrases, action) => {
	switch (action.type) {
		case types.REMARK_WORD: 
			let {hash, word} = action
			return _phraseExecute(state, hash, (phrase) => {
				return {
					...phrase,
					words: phrase.words.map(w => {
      					return w.word === word
			        		? {...w, marker: !w.marker}
					        : {...w}
			    	})
				}
			})
		default:
			return state
	}
}

export const import_area = (state = data.import_area, action) => {
	switch (action.type) {
		case types.FILL_IMPORT:
			return action.value
		default:
			return state
	}
}

export const template = (state = data.template, action) => {
	switch (action.type) {
		case types.EDIT_TEMPLATE:
			return action.value
		default:
			return state
	}
}

export const export_area = (state = data.export_area, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export const last_template = (state = data.last_template, action) => {
	switch (action.type) {
		default:
			return state
	}
}

const _phraseExecute = (phrases, hash, callback, ...args) => {
  let hashed = {...phrases}
  hashed[hash] = callback(hashed[hash], ...args)

  return hashed
}

const remarker = (data, hash, word) => {
  let callback = (phrase, word) => {
    phrase = {
    	...phrase,
    	words: phrase.words.map(w => {
      			return w.word === word[0]
			        ? {...w, marker: !w.marker}
			        : {...w}
    	})
    }
    return phrase;
  }
  return _phraseExecute(data, hash, callback, word);
}

const hashCode = str => {
    let hash = 0;
    if (str.length == 0) {
        return hash;
    }
    for (var i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
