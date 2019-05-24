import {data} from "./data/initialState.js"
import * as types from "./constants/ActionTypes.js" 

export const phrases = (state = data.phrases, action) => {
	let {hash, value, word, based_template, input_area} = action
	let result

	switch (action.type) {
		case types.REMARK_WORD: 
			result = _phraseExecute(state, hash, (phrase) => {
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
		
		case types.COLOR_PHRASE:
			return _phraseExecute(state, hash, (phrase) => {
				let colored = !phrase.colored
				return {
					...phrase,
					colored
				}
			})

		case types.DELETE_EXPORT:
			let newState = {}
			for (let key in state){
				if (!state[key].colored){
					newState[key] = state[key]
				}
			}
			return newState

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
	let {hash, phrases} = action

	switch (action.type) {
		case types.COLOR_PHRASE:
			let phrasesArray = []
			
			phrases[hash] = {
				...phrases[hash],
				colored: !phrases[hash].colored
			}

			for(let key in phrases) {
				phrasesArray.push(phrases[key])
			}

			return phrasesArray
				.filter(p => p.colored)
				.reduce((acc, phrase) => {
					return acc 
						+ phrase.keyword
						+ " "
						+ phrase.minuses
						+ "\n"
				}, "")
				.trim()
				
		case types.DELETE_EXPORT:
			return ""

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

/*
разделяет фразу на ключевое слово и минус слова
принимает запись из поля для ввода ключевиков
возвращает объект, содержащий 
*/
const _divideKeyword = (fullKeyword) => {
	let keyword = fullKeyword
		.replace(/\s-.*$/, "")
		.trim()
	let minuses = fullKeyword
		.replace(keyword, "")
		.trim()

	return {
		keyword,
		minuses
	}
}

const createPhrase = (fullKeyword, template) => {
	let result = {}
	let {keyword, minuses} = _divideKeyword(fullKeyword)
	
	let phrase = {
		based_template: template,
		keyword,
		colored: false,
		minuses,
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

/*для создания уникального идентификатора 
фразы для его записи в объект состояния на 
основании */
const hashCode = str => {
    let hash = 0;
    if (str.length === 0) {
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
		let {keyword} = phrase
		let {text} = pastePhraseInTemplate(keyword, based_template)
		
		let new_words = text
			.split(" ")
			.filter(w => w !== "")
			.map(word => ({
				word,
				marker: _setMarker(keyword, word)
			}))

		return {
			...phrase,
			words: new_words
		}
	})
}

const _setMarker = (keyword, word) => {
	return keyword
		.split(" ")
		.reduce((acc, curr, idx, keys) => 
			acc || isEqualWords(word, curr), 
		false)
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

const isEqualWords = (word1, word2) => {
	return cutEnd(word1) === cutEnd(word2)
}

const cutEnd = (word) => {
	for (let i = 0, len = ends.length; i < len; i++) {
		let end = ends[i];
		let withoutEnd = word.substring(0, word.length - end.length)
		let wordsEnd = word.substring(word.length - end.length)
		if(end === wordsEnd){
			return withoutEnd
		}
	}
	return word
}

const ends = [
	"ему", "ыми", "ими", "ами", "ому", "ого", "ому", "ему",
	"им", "ым", "ей", "ой", "ою", "юю", "ые", "ых", "их",
	"ые", "ие", "ом", "ем", "ая", "ое",
	"о", "а", "я", "е"
]