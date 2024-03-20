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


function CommissionReport() {
  const [showRecord, setShowRecord] = useState(false);
  const [checkedRows, setCheckedRows] = useState([]);
  const { projectData, blockData, commissionTableData, updateInventoryData } = useDataContext();
  console.log(commissionTableData);
 




 return (
    <div className="row">
   

      <ReportTable data={commissionTableData} />

  
      
    </div>
  );
}

export default CommissionReport;