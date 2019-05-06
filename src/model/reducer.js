import {data} from "./data/initialState.js"
import * as types from "./constants/ActionTypes.js" 

export const phrases = (state = data.phrases, action) => {
	let {hash, value, word, based_template} = action
	let result
	switch (action.type) {
		case types.REMARK_WORD: 
			let result = _phraseExecute(state, hash, (phrase) => {
				return {
					...phrase,
					words: phrase.words.map(w => {
      					return w.word === word
			        		? {...w, marker: !w.marker}
					        : {...w}
			    	})
				}
			})

			return setPhraseDepencies(result, hash)
		
		case types.KEYWORD_CHANGE:
			result = _phraseExecute(state, hash, (phrase) => {
				return {
					...phrase,
					keyword: value
				}
			})
			result = _setTitle(result, hash, based_template)
			return setPhraseDepencies(result, hash)
		
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


const setPhraseDepencies = (phrases, hash) => {
	let result = {...phrases}
	result = _setLength(result, hash)
	result = _setLight(result, hash)

	return result
}

const _setTitle = (phrases, hash, template) => {
	console.log("template - ", template)
	return _phraseExecute(phrases, hash, (phrase) => {
		let text = template.replace(/\#(.)*\#/, phrase.keyword)
		if(text.length > types.MAX_LENGTH){
			text = template.replace(/\#/g, "")
		}
		let new_words = text
			.split(" ")
			.filter(w => w !== "")
			.map(word => ({
				word,
				marker: false	
			}))

		return {
			...phrase,
			words: new_words
		}
	})
}

const _setLength = (phrases, hash) => {
	return _phraseExecute(phrases, hash, (phrase) => {
		return {
			...phrase,
			length: phrase
				.words
				.reduce((acc, curr) => curr.word.length + acc + 1, -1)
		}
	})
}

const _setLight = (phrases, hash) => {
	return _phraseExecute(phrases, hash, (phrase) => {
		return {
			...phrase,
			light: phrase
				.words
				.reduce((acc, curr) => {
					console.log(curr.marker)
					return curr.marker
						? (curr.word.length + acc + 1)
						: acc
				}, -1) / phrase.length * 100 | 0
		}
	})
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
