import React, { useRef } from 'react';
import Table from 'react-bootstrap/Table';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';

export function ReportTable({ data, title }) {
  const tableRef = useRef(null);

  const generatePdf = () => {
    const doc = new jsPDF();
    const tableElement = tableRef.current;
    html2canvas(tableElement).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      doc.save('table.pdf');
    });
  };

  const generateExcel = () => {
    const header = [['Echo Glitch CRM Portal', title]]; // Header content
    const headerWS = XLSX.utils.aoa_to_sheet(header);
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, headerWS, 'Header');
    XLSX.utils.book_append_sheet(wb, ws, 'Data');
    XLSX.writeFile(wb, 'table.xlsx');
  };

  const generateCSV = () => {
    const csvContent = XLSX.utils.sheet_to_csv(XLSX.utils.json_to_sheet(data));
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'table.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const getKeys = () => {
    if (data.length === 0) return [];
    return Object.keys(data[0]);
  };

  const renderHeader = () => {
    const keys = getKeys();
    return keys.map((key, index) => <th key={index}>{key.toUpperCase()}</th>);
  };

  const renderRows = () => {
    return data.map((item, index) => {
      const values = Object.values(item);
      return (
        <tr key={index}>
          {values.map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      );
    });
  };

  return (
    <div className="bg-white" ref={tableRef}>
      <div className="row report-header py-3">
        <div className="col-3 text-center">
          <img src={require("../assets/images/crmlogo.png")} alt="CRM Logo" className="crmlogosidebar" />
        </div>
        <div className="col-9 text-left">
          <h2> Echo Glitch CRM Portal </h2>
          <h1> {title} </h1>
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </Table>
      <button className="pdfbutton" onClick={generatePdf}>Download PDF</button>
      <button className="pdfbutton xlbutton" onClick={generateExcel}>Download Excel</button>
      <button className="pdfbutton csvbutton" onClick={generateCSV}>Download CSV</button>
    </div>
  );
}


export default ReportTable;
