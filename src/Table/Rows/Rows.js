import React from 'react';

import Phrase from "./Phrase/Phrase.js";


const Rows = ({phrases, remarkWord}) => {
  
  const createRows = () => {
    return phrases.map((phrase, idx) => 
      (<tr key={idx}>
        <td>
          <input
            className="templater__table_input"
            onChange={e => e.target.value} 
            value={phrase.keyword} />
        </td>
        <td>
          <Phrase phrase={phrase}
                  remarkWord={remarkWord}/>
        </td>
      </tr>)
    )
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