import React from 'react';

const Rows = ({keywords}) => {
  
  const createRows = () => {
    return keywords.map((keyword) => 
      (<tr key={keyword}>
        <td>{keyword}</td>
      </tr>)
    )
  }

  return (
    <tbody>
      {createRows()}
    </tbody>
  )
}

export default Rows;