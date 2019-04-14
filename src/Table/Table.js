import React from 'react';

import Rows from "./Rows/Rows.js";

const Table = ({keywords}) => {

    return (
      <table className="templater__table">
        <tr>
          <th>Keyword</th>
          <th>Title</th>
          <th>length</th>
          <th>light</th>
        </tr>
        <Rows keywords={keywords}/>
      </table>
    );

}

export default Table;
