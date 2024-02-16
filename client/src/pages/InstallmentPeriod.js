import React, {useState} from 'react';
import '../assets/css/projects.css';
import Button from '../components/Button';
import { CiCirclePlus } from "react-icons/ci";
import { MdAddBusiness } from "react-icons/md";
import Form from '../components/Form';
import Table from '../components/Table';
import Fade from 'react-reveal/Fade';
import { MdDelete } from "react-icons/md";
import {styles} from '../constants/styles';
import { useDataContext } from './DataContext';

function InstallmentPeriod() {
    const [showForm, setShowForm] = useState(false);
    const [tableData, setTableData] = useState([{ 
    Id: 1, 
    InstallmentPeriodName: "First InstallmentPeriod",
    DisplayName: "InstallmentPeriod1",
  },

   { 
    Id: 2, 
    InstallmentPeriodName: "Second InstallmentPeriod",
    DisplayName: "InstallmentPeriod2",
  }]);

     const handleAddInstallmentPeriodClick = () => {
        setShowForm(!showForm); // Toggle the visibility of the form
    };

    const handleSaveInstallmentPeriodClick = async (formData) => {
    // Your existing code to save the block
    const newInstallmentPeriod = {
        addinstallmentperiod: formData.addinstallmentperiod,
    };

    console.log(newInstallmentPeriod);

    try {
      const response = await fetch('http://localhost:4000/installmentperiod', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newInstallmentPeriod),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error adding project:', error.message);
    }
  };

    const inputs = [
        {
            title: "Add Installment Period",
            type: "text",
            rows: 0,
            placeholder: "i.e One Year"
        },
        

         {
            title: "Submit",
            type: "button",
            rows: 0,
            placeholder: "Type project name",
            icon: <MdAddBusiness />
        },
       
    ];


   

 const tableheadrow = [
  {
    col1: "ID",
    col2: "Time Duration",
    col3: "Date",
  },
  // Add more header columns if needed
];

const initialtableData = [
  { 
    Id: 1, 
    InstallmentPeriodName: "First InstallmentPeriod",
    DisplayName: "InstallmentPeriod1",
  },

   { 
    Id: 2, 
    InstallmentPeriodName: "Second InstallmentPeriod",
    DisplayName: "InstallmentPeriod2",
  },
  
  
];


    return (
        <div className="row">
        <div className="button-container">
        <div className="add-button">
            <Button buttonClass="colored-button" title="Add InstallmentPeriod" icon={<CiCirclePlus iconclass="colored-icon" />} clickfunction={handleAddInstallmentPeriodClick}/>
          </div>  
        <div className="delete-button">
            <Button buttonClass="transparent-button" title="Delete InstallmentPeriod" icon={<MdDelete iconclass="transparent-icon" />} clickfunction={handleAddInstallmentPeriodClick}/>
            </div>
         </div>
            {showForm && 
                 <Fade top>
                <Form inputs={inputs} 
                onSave={handleSaveInstallmentPeriodClick}/>
                </Fade>
            }
      
         <div className="table-container">
          <div className="button-container mt-3">
        <div className="add-button">
            <Button style={styles.circlebutton} buttonColor="blue" title="Copy" clickfunction={handleAddInstallmentPeriodClick}/>
          </div>  
        <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="skyblue" title="CSV" clickfunction={handleAddInstallmentPeriodClick}/>
            </div>
         
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="green" title="Excel" clickfunction={handleAddInstallmentPeriodClick}/>
            </div>
        
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="red" buttonColor="blue" title="PDF" clickfunction={handleAddInstallmentPeriodClick}/>
            </div>
         
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="pink" title="Print" clickfunction={handleAddInstallmentPeriodClick}/>
            </div>
         </div>
            <Table tablerow={tableData} tablehead={tableheadrow}/>
        </div>
        </div>
      
    );
}

export default InstallmentPeriod;
