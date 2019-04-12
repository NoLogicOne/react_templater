import React from 'react';
import './Word.css';

const Word = ({word, marker}) => {
    
    const createText = () => {
    	return marker 
    		? (<b>{word} </b>) 
    		: (<span>{word} </span>)
    }

    return (
		<span className="templater__word">
			{createText()}
		</span>
    );
}

// Word.defaultProps = {
//     	word: "default word",
//     	marker: true
//     }

export default Word;