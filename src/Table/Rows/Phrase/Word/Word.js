import React from 'react';
import './Word.css';

const Word = ({word, marker, remarkWord, hash}) => {
    // let _span;

    const createText = () => {
    	return marker 
    		? (<b>{word} </b>) 
    		: (<span>{word} </span>)
    }

    const onContextMenu = (e) => {
        e.preventDefault();
        console.log(hash, " ", word)

        remarkWord(hash, word);
    }

    return (
		<span className="templater__word"
              onContextMenu={onContextMenu}>
              {/*ref={span => _span = span}>*/}
			{createText()}
		</span>
    );
}

// Word.defaultProps = {
//     	word: "default word",
//     	marker: true
//     }

export default Word;