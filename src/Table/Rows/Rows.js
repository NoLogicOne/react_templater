import React from 'react';

import Phrase from "./Phrase/Phrase.js";

const Rows = ({phrases, onKeywordChange, remarkWord}) => {
  let row_array = [];

  const createRow = (phrase, idx) => {
    return (
      <tr key={idx}>
        <td className="templater__table_keyword">
          <input
            className="templater__table_input"
            onChange={e => onKeywordChange(idx, e.target.value, phrase.based_template)} 
            value={phrase.keyword} />
        </td>
        <td>
          <Phrase phrase={phrase}
                  hash={idx}
                  remarkWord={remarkWord}/>
        </td>
        <td className="templater__table_length">
          {phrase.length}
        </td>
        <td className="templater__table_ligth">
          {phrase.light}
        </td>
      </tr>
      )
  }

  const createRows = () => {
    for (let phrase in phrases) {
      row_array.push(createRow(phrases[phrase], phrase))
    }

    return row_array.map(curr => curr)
  }

  return (
    <tbody>
      {createRows()}
    </tbody>
  )
}

Rows.defaultProps = {
  phrases: []
}

export default Rows;