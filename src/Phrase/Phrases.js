import React from 'react';

import Word from "./Word/Word.js";

import './Phrases.css';

const Phrases = ({phrases, remarkWord}) => {
    
    const createWords = (phrase) => {
        return phrase.words.map((word, index) => (
            <Word key={index} 
                  hash={phrase.hash}
                  remarkWord={remarkWord}
                  {...word}/> 
        ))
    }

    const createPhrases = () => {
        return phrases.map(phrase => createWords(phrase));
    }

    return (
		<div className="templater__phrase">
            {createPhrases()}
		</div>
    );
}

export default Phrases;