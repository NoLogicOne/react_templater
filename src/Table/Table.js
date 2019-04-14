import React from 'react';

import Rows from "./Rows/Rows.js";

const Table = ({phrases, remarkWord}) => {

    return (
      <table className="templater__table">
        <thead>
          <tr>
            <th>Keyword</th>
            <th>Title</th>
            <th>length</th>
            <th>light</th>
          </tr>
        </thead>
        <Rows phrases={phrases}
              remarkWord={remarkWord}/>
      </table>
    );

}

export default Table;
