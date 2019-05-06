import * as types from "../constants/ActionTypes.js"

export function remarkWord(hash, word, based_template) {
	return {
		type: types.REMARK_WORD,
		hash,
		word,
		based_template
	}
}

export function fillImport(value) {
	return{
		type: types.FILL_IMPORT,
		value
	}
}

export function editTemplate(value) {
	return {
		type: types.EDIT_TEMPLATE,
		value
	}
}

export function keywordChange(hash, value, based_template) {
	console.log("AC - ", based_template)
	return {
		type: types.KEYWORD_CHANGE,
		hash,
		value,
		based_template
	}
}