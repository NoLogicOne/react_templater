import React from 'react';

import Word from "./Word/Word.js";

import './Phrase.css';

const Phrase = ({phrase, remarkWord}) => {
    
    const createWords = (phrase) => {
        return phrase.words.map((word, index) => (
            <Word key={index}
                  hash={phrase.hash}
                  remarkWord={remarkWord}
                  {...word}/>
        ))
    }

    return (
  		<div className="templater__phrase">
              {createWords(phrase)}
  		</div>
    );
}

export default Phrase;