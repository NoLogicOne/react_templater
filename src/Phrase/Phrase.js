import React from 'react';

import Word from "./Word/Word.js";

import './Phrase.css';

const Phrase = ({phrase}) => {
    
    const createWords = () => {
        return phrase.words.map((word, index) => (
            <Word key={index} 
            {...word}/> 
        ))
    }

    return (
		<div className="templater__phrase">
            {createWords()}
		</div>
    );
}

// Word.defaultProps = {
//     	word: "default word",
//     	marker: true
//     }

export default Phrase;