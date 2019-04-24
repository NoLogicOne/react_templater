const MAX_LENGTH = 35;
export const data = {
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
      light: "50%",
      length: 30
    },
  ]
}

/*tested*/
/*callback needs to get the 
phrase object and an array with the arguments*/
export const _phraseExecute = (data, hash, callback, ...args) => {
  let hashed = data.phrases
    .map(phrase => {
      if (phrase.hash === hash) {
        let res = callback(phrase, args);

        return res;
      }
      return phrase;
    })


  return {
    ...data,
    // filter fr create function, that delete null-phrase
    phrases: hashed.filter(phrase => phrase !== null)
  }
}

/*tested*/
export const remarker = (data, hash, word) => {
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

/*tested*/
export const templateChanger = (data, value) => {
  return {...data, template: value}
}

/*tested*/
export const onKeywordsInputChanger = (data, keyword) => {
  let newKeys = data.keywords.keys.map(key => 
    key.value === keyword 
      ? {...key, checked: !key.checked}
      : {...key} 
  );

  let newKeywords = {...data.keywords, keys: newKeys}

  return {...data, keywords: newKeywords}
}

/*probably it useless, cause my wife reject if future*/
export const onKeywordsStateChanger = (data) => {
  return {
    ...data, 
    keywords: {
      ...data.keywords, 
      isList: !data.keywords.isList}
  }
}


/*tested*/
export const pasteKeywordInTemplate = (keyword, template, max = MAX_LENGTH) => {
  let result = template
    .replace(/#.*#/i, keyword)
    .trim();

  return (result.length > max) ? template.replace(/#/g, "") : result;
}

export const getMarked = (word, phrase) => {
  return phrase.split(" ").contains(word);
}

export const createPhrase = (keyword, template) => {
  let words = pasteKeywordInTemplate(keyword, template)
    .split(" ")
    .map(word => ({word, marked: getMarked(word, keyword)}) );
  

  return {
    "hash": Date.now(),
    keyword,
    words,
    light: 30,
    length: 35
  }
}

export const pastePhraseInTable = (data, keyword, template) => {
  return{
    ...data,
    phrases: data.phrases.push(createPhrase(keyword, template))
  } 
}
