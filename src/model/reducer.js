import {data} from "./data/initialState.js"
import * as types from "./constants/ActionTypes.js" 

export const phrases = (state = data.phrases, action) => {
	let {hash, value, word, based_template, input_area} = action
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

			return setPhraseDepencies(result, hash, based_template)
		
		case types.KEYWORD_CHANGE:
			result = _phraseExecute(state, hash, (phrase) => {
				return {
					...phrase,
					keyword: value
				}
			})
			result = _setTitle(result, hash, based_template)
			return setPhraseDepencies(result, hash, based_template)
		
		case types.GENERATE_TABLE:
			result = createPhrases(input_area, based_template)
			
			for (let key in result) {
				result = _setTitle(result, key, result[key].based_template)
				result = setPhraseDepencies(result, key, result[key].based_template)
			}

			return result

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

const createPhrase = (keyword, template) => {
	let result = {}
	let phrase = {
		based_template: template,
		keyword,
		colored: false,
		minuses: "-nothing",
		length: 0,
		light: 0,
		words: []
	}

	result["p" + hashCode(keyword)] = phrase
	return result
}

const createPhrases = (input_area, template) => {
	let keywords = input_area
		.split(/(\n|,)/g)
		.filter(k => k !== undefined)
		.filter(k => k !== null)
		.filter(k => k !== ",")
		.map(k => k.trim())
		.filter(k => k !== "")

	return keywords.reduce((phrases, keyword) => {
		let newPhrase = createPhrase(keyword, template)
		return {
			...phrases,
			...newPhrase
		}
	}, {})
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

const setPhraseDepencies = (phrases, hash, based_template) => {
	let result = {...phrases}
	result = _setLength(result, hash, based_template)
	result = _setLight(result, hash)

	return result
}

const _setTitle = (phrases, hash, based_template) => {
	
	return _phraseExecute(phrases, hash, (phrase) => {
		let {text} = pastePhraseInTemplate(phrase.keyword, based_template)
		
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

const pastePhraseInTemplate = (phrase, based_template) => {
	let text = based_template.replace(/#(.)*#/, phrase)
	let len = text
		.replace(/(!|\?|\.)$/, "")
		.length

	if(len > types.MAX_LENGTH){
		text = based_template.replace(/#/g, "")
	}
	
	return {
		text,
		len
	}
}

const _setLength = (phrases, hash, b_template) => {
	return _phraseExecute(phrases, hash, (phrase) => {
		let {len} = pastePhraseInTemplate(phrase.keyword, b_template)
		return {
			...phrase,
			length: len
		}
	})
}

const _setLight = (phrases, hash) => {
	return _phraseExecute(phrases, hash, (phrase) => {
		let bolderLength = phrase
			.words
			.reduce((acc, curr) => {
				return curr.marker
					? (curr.word.length + acc + 1)
					: acc
			}, -1)

		let realLength = phrase
			.words
			.reduce((acc, curr) => {
				return curr.word.length + acc + 1
			}, -1)

		return {
			...phrase,
			light: bolderLength / realLength * 100 | 0
		}
	})
}



