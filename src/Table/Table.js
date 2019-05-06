import React from 'react';

import Rows from "./Rows/Rows.js";

const Table = (props) => {
    console.log(props)
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
        <Rows {...props}/>
      </table>
    );

}

export default Table;
