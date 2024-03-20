import React, { useState } from 'react';
import '../assets/css/projects.css';
import Button from '../components/Button';
import { CiCirclePlus } from 'react-icons/ci';
import { MdAddBusiness, MdDelete } from 'react-icons/md';
import Form from '../components/Form';
import ReportTable from '../components/ReportTable';
import Fade from 'react-reveal/Fade';
import { styles } from '../constants/styles';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useDataContext } from './DataContext';


function TransferReport() {

  const { transferTableData } = useDataContext();

 




 return (
    <div className="row">
   

      
      <ReportTable title="Transfer Report" data={transferTableData} />

  
      
    </div>
  );
}

export default TransferReport;