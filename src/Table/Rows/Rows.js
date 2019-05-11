import React from 'react';

import Phrase from "./Phrase/Phrase.js";

const Rows = ({phrases, onKeywordChange, remarkWord, onCheck}) => {
  let row_array = [];

  const createRow = (phrase, idx) => {
    return (
      <tr key={idx} className={phrase.colored ? "colored" : "default"}>
        <td className="templater__table_keyword">
          <input
            className="templater__table_input"
            onChange={e => onKeywordChange(idx, e.target.value, phrase.based_template)} 
            value={phrase.keyword} />
        </td>
        <td>
          <input type="checkbox"
                 onChange={e => onCheck(idx)} 
                 checked={phrase.colored}/>
          <Phrase phrase={phrase}
                  hash={idx}
                  onCheck={onCheck}
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