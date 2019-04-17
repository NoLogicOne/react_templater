
const data = {
  template: "this text #realy bold#",
  keywords: {
    isList: true,
    keys: [
      {
        checked: true,
        value: "not bold" 
      },
      {
        checked: false,
        value: "realy bold"
      }
    ]
  },
  phrases: [
    {
      hash: "#phrase1",
      keyword: "not bold",
      words: [
        {
          word: "this",
          marker: false
        },
        {
          word: "text",
          marker: true
        },
        {
          word: "not",
          marker: true
        },
        {
          word: "bold",
          marker: true
        }, {}
      ],
      light: 0,
      length: 0
    },
  ]
}

const _phraseExecute = (data, hash, callback, ...args) => {
  let hashed = data.phrases
    .map(phrase => {
      if (phrase.hash === hash) {
        return callback(phrase, args);
      }
      return phrase;
    })[0]

  let newPhrases = data.phrases.map(phrase => 
    phrase.hash === hash ? hashed : phrase
  )

  return {...data, phrases: newPhrases}
}

const remarker = (data, hash, word) => {
  let callback = (phrase, word) => {
    phrase.words = phrase.words.map(w => {
      return w.word === word[0] 
        ? {...w, marker: !w.marker}
        : {...w};
    })
    return phrase;
  }

  return _phraseExecute(data, hash, callback, word);
}

const templateChanger = (data, value) => {
  return {...data, template: value}
}

const onKeywordsInputChanger = (data, keyword) => {
  let newKeys = data.keywords.keys.map(key => 
    key.value === keyword 
      ? {...key, checked: !key.checked}
      : {...key} 
  );

  let newKeywords = {...data.keywords, keys: newKeys}

  return {...data, keywords: newKeywords}
}

export {data,
        remarker,
        onKeywordsInputChanger,
        templateChanger}