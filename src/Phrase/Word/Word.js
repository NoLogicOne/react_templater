import React from 'react';
import PropTypes from 'prop-types';

import './Word.css';

const Word = ({word, marker, remarkWord, hash}) => {

    const createText = () => {
    	return marker 
    		? (<b>{word} </b>) 
    		: (<span>{word} </span>)
    }

    return (
		<span className="templater__word"
              onContextMenu={e => {
                e.preventDefault();
                remarkWord(hash, word);
              }}>
            
            {createText()}
		</span>
    );
}

Word.propTypes = {
    word: PropTypes.string,
    marker: PropTypes.bool
}

Word.defaultProps = {
    	word: "!word isn't defined!".toUpperCase(),
    	marker: true
    }

export default Word;