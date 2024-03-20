import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import '../assets/css/table.css';
import Fade from 'react-reveal/Fade';
import TableRow from './TableRow';

function Table({ tablerow, datasource, tablehead, checkedRows, onCheckboxChange, onDeleteRow }) {

  const tableRef = useRef(null);

  const generatePdf = () => {
  const doc = new jsPDF();

  // Get the HTML content of the table using tableRef
  const tableElement = tableRef.current;
  html2canvas(tableElement).then(canvas => {
    const imgData = canvas.toDataURL('image/png');

    // Calculate width and height of PDF
    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    doc.save('table.pdf');
  });
};


  return (
    <React.Fragment>
      <div className="table-container" ref={tableRef}>
        <table className="print-table">
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
     {/* <button className="pdfbutton" onClick={generatePdf}>Download PDF</button> */}
    </React.Fragment>
  );
}

export default Table;
