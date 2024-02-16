import React from 'react';
import '../assets/css/table.css';
import Fade from 'react-reveal/Fade';
import TableRow from './TableRow';

function Table({ tablerow, datasource, tablehead, checkedRows, onCheckboxChange, onDeleteRow }) {
  return (
    <React.Fragment>
      <div className="">
        <table>
          <thead>
            {tablehead.map((input, index) => (
              <TableRow key={index} input={input} isHeader={true} />
            ))}
          </thead>
          <tbody>
            {tablerow.map((row, index) => (
              <TableRow
                key={index}
                input={row}
                isHeader={false}
                onCheckboxChange={onCheckboxChange}
                onDeleteRow={onDeleteRow}
                source={datasource}
              />
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default Table;
