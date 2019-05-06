import React from 'react';

import Phrase from "./Phrase/Phrase.js";

const Rows = ({phrases, remarkWord}) => {
  let row_array = [];

  const createRow = (phrase, idx) => {
    return (
      <tr key={idx}>
        <td className="templater__table_keyword">
          <input
            className="templater__table_input"
            onChange={e => e.target.value} 
            value={phrase.keyword} />
        </td>
        <td>
          <Phrase phrase={phrase}
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
    let i = 0;
    for (let phrase in phrases) {
      row_array.push(createRow(phrases[phrase], i++))
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