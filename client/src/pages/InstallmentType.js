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

function InstallmentType() {
    const [showForm, setShowForm] = useState(false);
    const { installmenttypeTableData, updateInstallmenttypeData } = useDataContext();
    const [tableData, setTableData] = useState([{ 
    Id: 1, 
    InstallmentTypeName: "First InstallmentType",
    DisplayName: "InstallmentType1",
    BalloonPayment: "InstallmentType1",
  },

   { 
    Id: 2, 
    InstallmentTypeName: "Second InstallmentType",
    DisplayName: "InstallmentType2",
    BalloonPayment: "InstallmentType1",
  }]);

     const handleAddInstallmentTypeClick = () => {
        setShowForm(!showForm); // Toggle the visibility of the form
    };

    const handleSaveInstallmentTypeClick = async (formData) => {
    // Your existing code to save the block
    const newInstallmentType = {
        addinstallment: formData.addinstallment,
        value: formData.value,
        balloonpayment: formData.balloonpayment,
    };

    console.log(newInstallmentType);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/installmenttype`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newInstallmentType),
});


      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
    console.error('Error in handleSaveInstallmentTypeClick:', error);
    }
  };

    const inputs = [
        {
            title: "ADD Installment",
            type: "text",
            rows: 0,
            placeholder: "i.e One Month"
        },

        {
            title: "Value",
            type: "text",
            rows: 0,
            placeholder: "i.e 1"
        },

        {
            title: "Balloon Payment",
            type: "select",
            options: ["Yes", "No"],
            rows: 0,
            placeholder: "i.e 1"
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
    col3: "Value",
    col4: "Baloon Payment",
  },
  // Add more header columns if needed
];

const initialtableData = [
  { 
    Id: 1, 
    InstallmentTypeName: "First InstallmentType",
    DisplayName: "InstallmentType1",
    InstallmentTypeName: "First InstallmentType",
    DisplayName: "InstallmentType1",
  },

   { 
    Id: 2, 
    InstallmentTypeName: "Second InstallmentType",
    DisplayName: "InstallmentType2",
    InstallmentTypeName: "First InstallmentType",
    DisplayName: "InstallmentType1",
  },
  
  
];


    return (
        <div className="row">
        <div className="button-container">
        <div className="add-button">
            <Button buttonClass="colored-button" title="Add InstallmentType" icon={<CiCirclePlus iconclass="colored-icon" />} clickfunction={handleAddInstallmentTypeClick}/>
          </div> 
          {/* 
        <div className="delete-button">
            <Button buttonClass="transparent-button" title="Delete InstallmentType" icon={<MdDelete iconclass="transparent-icon" />} clickfunction={handleAddInstallmentTypeClick}/>
            </div>
            */}
         </div>
            {showForm && 
                 <Fade top>
                <Form inputs={inputs} 
                onSave={handleSaveInstallmentTypeClick}/>
                </Fade>
            }
      
         <div className="table-container">
         
            <Table tablerow={installmenttypeTableData} tablehead={tableheadrow}
            datasource="installmenttypedata"/>
        </div>
        </div>
      
    );
}

export default InstallmentType;
