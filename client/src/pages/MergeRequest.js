import React, { useState } from 'react';
import '../assets/css/projects.css';
import Button from '../components/Button';
import { CiCirclePlus } from 'react-icons/ci';
import { MdAddBusiness, MdDelete } from 'react-icons/md';
import Form from '../components/Form';
import Table from '../components/Table';
import Fade from 'react-reveal/Fade';
import { styles } from '../constants/styles';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useDataContext } from './DataContext';


function MergeRequest() {
  const [showRecord, setShowRecord] = useState(true);
  const [checkedRows, setCheckedRows] = useState([]);

  const { userData, mergeRequestTableData, customerData } = useDataContext();
  // const userNames = userData.map(user => user.name);
  //  console.log(userData);
    const [tableData, setTableData] = useState([]);


    const [Inputs, setInputs] = useState([
        {
            title: "CustomerName",
            type: "select",
            options: customerData.map(customer => customer.customer_name),
            values: customerData.map(customer => customer.id),
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Reference Num",
            type: "text",
  
            rows: 0,
            placeholder: "---Choose---"
        },
        
        {
            title: "Transfer Fee",
            type: "text",
            rows: 0,
            placeholder: "Type Price"
        },
        {
            title: "Agent",
            type: "select",
            options: ["3 Marla", "5 Marla", "7 Marla", "8 Marla", "9 Marla", "10 Marla", "Commercial", "Residence"],
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Image",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Email",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Phone",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "CNIC",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Plot 1",
            type: "select",
            options: ["Open", "Sold out", "Token"],
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Project",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Block",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Size",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Price",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Feature",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },

        {
            title: "Plot 2",
            type: "select",
            options: ["Open", "Sold out", "Token"],
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Project",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Block",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Size",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Price",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Feature",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },

        {
            title: "CNIC Copy",
            type: "file",
            rows: 0,
            placeholder: "Upload your CNIC Copy"
        },
       
        {
            title: "Submit",
            type: "button",
            rows: 0,
            icon: <MdAddBusiness />,
            class: "",
        },
  ]);

  const handleShowRecordClick = () => {
  setShowRecord(!showRecord);
  console.log(showRecord);
};

//   const handleAddFormClick = () => {
//     setShowForm(!showForm);
//   };


  const handleSaveMergerequestClick = async (formData) => {
    // Your existing code to save the block
    const newMergerequest = {
        customer: formData.customername,
        refnum: formData.referencenum,
        transferfee: formData.transferfee,
        agent: formData.agent,
        plot1: formData.plot1,
        plot2: formData.plot2,
        cniccopy: formData.cniccopy,
    };

    console.log(newMergerequest);

    try {
      const response = await fetch('http://localhost:4000/mergerequest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMergerequest),
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

  const handleCheckboxChange = (Id) => {
    setCheckedRows((prevCheckedRows) =>
      prevCheckedRows.includes(Id)
        ? prevCheckedRows.filter((id) => id !== Id)
        : [...prevCheckedRows, Id]
    );
  };

  const handleDeleteProjectClick = () => {
    console.log('Checked Rows:', checkedRows);
   
  };
  const handleDeleteRow = (Id) => {
    // Implement the logic to delete the row with the specified Id
    const updatedTableData = tableData.filter((row) => row.Id !== Id);
    setTableData(updatedTableData);
  };




  
  
 

 

 const tableheadrow = [
  {
    col1: "ID ",
    col2: "Customer",
    col3: "Ref No",
    col4: "Transfer Fee",
    col5: "Agent",
    col6: "Plot 1",
    col7: "Plot 2",
    col8: "CNIC Copy",
  },

];





 return (
    <div className="row">
    <div className="button-container">
        <div className="add-button">
          <Button
            buttonClass="colored-button"
            title={showRecord ? ("Show Records") : ("Add Record")}
            icon={<CiCirclePlus iconclass="colored-icon" />}
            clickfunction={handleShowRecordClick}
          />
        </div> 
      </div>


      <Fade top>
  {showRecord ? (
       <Form inputs={Inputs} onSave={handleSaveMergerequestClick} />
      
  ) : (
      <div className="table-container">
    
      <Table
      tablerow={mergeRequestTableData}
      tablehead={tableheadrow}
      checkedRows={checkedRows}
      onCheckboxChange={handleCheckboxChange}
      onDeleteRow={handleDeleteRow}
      datasource="mergerequestsdata"
    />
    </div>
  )}
</Fade>


      
    </div>
  );
}

export default MergeRequest;