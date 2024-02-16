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

function FeeSetup() {
    const [showForm, setShowForm] = useState(false);
    const { projectData, feeTableData, updateFeeData } = useDataContext();
    const [tableData, setTableData] = useState([
  { 
    Id: 1, 
    Name: "Duplicate Allotment",
    Fee: 0.0,
    Slug: "duplicate-allotment",
  },

  { 
    Id: 2, 
    Name: "Duplicate Allotment",
    Fee: 0.0,
    Slug: "duplicate-allotment",
  },

  { 
    Id: 2, 
    Name: "Duplicate Allotment",
    Fee: 0.0,
    Slug: "duplicate-allotment",
  },
  
  
]);

     const handleAddFeeClick = () => {
        setShowForm(!showForm); // Toggle the visibility of the form
    };
    const inputs = [
        {
            title: "Order",
            type: "text",
            rows: 0,
            placeholder: "Type Order"
        },

        {
            title: "Name",
            type: "text",
            rows: 0,
            placeholder: "Type Name"
        },

        {
            title: "Fee",
            type: "text",
            rows: 0,
            placeholder: "Type Fee"
        },
        {
            title: "Slug",
            type: "text",
            rows: 0,
            placeholder: "Type Slug"
        },
         {
            title: "Submit",
            type: "button",
            rows: 0,
            placeholder: "Type project name",
            icon: <MdAddBusiness />
        },
       
    ];

    const handleSaveFeeClick = async (formData) => {
    // Your existing code to save the block
    const newFee = {
        order: formData.order,
        name: formData.name,
        fee: formData.fee,
        slug: formData.slug,
    };

    console.log(newFee);

    try {
      const response = await fetch('http://localhost:4000/fee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFee),
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

 const tableheadrow = [
  {
    col1: "ID",
    col2: "Fee Order",
    col3: "Name",
    col4: "Fee",
    col5: "Slug",
  },
  // Add more header columns if needed
];



    return (
        <div className="row">
        <div className="button-container">
        <div className="add-button">
            <Button buttonClass="colored-button" title="Add Fee" icon={<CiCirclePlus iconclass="colored-icon" />} clickfunction={handleAddFeeClick}/>
          </div>  
        <div className="delete-button">
            <Button buttonClass="transparent-button" title="Delete Fee" icon={<MdDelete iconclass="transparent-icon" />} clickfunction={handleAddFeeClick}/>
            </div>
         </div>
            {showForm && 
                 <Fade top>
                <Form inputs={inputs} onSave={handleSaveFeeClick}/>
                </Fade>
            }
      
         <div className="table-container">
          <div className="button-container mt-3">
        <div className="add-button">
            <Button style={styles.circlebutton} buttonColor="blue" title="Copy" clickfunction={handleAddFeeClick}/>
          </div>  
        <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="skyblue" title="CSV" clickfunction={handleAddFeeClick}/>
            </div>
         
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="green" title="Excel" clickfunction={handleAddFeeClick}/>
            </div>
        
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="red" buttonColor="blue" title="PDF" clickfunction={handleAddFeeClick}/>
            </div>
         
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="pink" title="Print" clickfunction={handleAddFeeClick}/>
            </div>
         </div>
            <Table tablerow={feeTableData} tablehead={tableheadrow}/>
        </div>
        </div>
      
    );
}

export default FeeSetup;
