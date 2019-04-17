
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

/*callback he needs to get the 
phrase object and an array with the arguments*/
const _phraseExecute = (data, hash, callback, ...args) => {
  let hashed = data.phrases
    .map(phrase => {
      if (phrase.hash === hash) {
        return callback(phrase, args);
      }
      return phrase;
    })

  return {
    ...data,
    phrases: hashed
  }
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

const onKeywordsStateChanger = (data) => {
  return {
    ...data, 
    keywords: {
      ...data.keywords, 
      isList: !data.keywords.isList}
  }
}

export {data,
        remarker,
        onKeywordsInputChanger,
        onKeywordsStateChanger,
        templateChanger}