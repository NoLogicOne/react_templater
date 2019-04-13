import React from 'react';

import Word from "./Word/Word.js";

import './Phrases.css';

const Phrases = ({phrases}) => {
    
    const createWords = (phrase) => {
        return phrase.words.map((word, index) => (
            <Word key={index} 
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

// Word.defaultProps = {
//     	word: "default word",
//     	marker: true
//     }

export default Phrases;